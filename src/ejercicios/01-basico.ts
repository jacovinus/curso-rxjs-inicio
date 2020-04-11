import { Observable, Observer } from 'rxjs';

const observer : Observer<any> = {
next: value => console.log('siguiente [next] ',value),
error: error => console.warn('error [obs]: ',error),
complete: () => console.info('completado [obs]')
}
const obs$:Observable<string> = new Observable<string>( subs => {
subs.next('Hola')
subs.next('Mundo')
subs.next('Mundo')
subs.next('Mundo')
subs.complete();
subs.next('Mundo')
});  

/* obs$.subscribe( 
    valor => console.log('next: ', valor),
    error => console.log('error: ', error),
    () => console.info('Completado')
 ); */

 obs$.subscribe( observer );