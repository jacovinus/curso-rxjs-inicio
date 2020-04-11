import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("observer siguiente [next] ", value),
  error: (error) => console.warn("observer error [obs]: ", error),
  complete: () => console.info("observer completado [obs]"),
};

const int$ = new Observable<number>( subs => {
const intervalId = setInterval(()=> subs.next(Math.random()),1000 )
return () =>{
    clearInterval( intervalId );
    console.log('intervalo destruido')
}

});

setTimeout(()=>{

subject$.next( 10 )
subject$.complete()
intSubject.unsubscribe();
},4000);

const subject$ = new Subject();
const intSubject = int$.subscribe(subject$);

const subs2 = subject$.subscribe(observer);
const subs3 = subject$.subscribe(observer);

