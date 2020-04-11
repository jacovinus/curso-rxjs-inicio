import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("observer siguiente [next] ", value),
  error: (error) => console.warn("observer error [obs]: ", error),
  complete: () => console.info("observer completado [obs]"),
};

const interval$ = new Observable<number>((subscriber) => {
  let count = 0;
  let interval = setInterval(() => {
    count++;
    subscriber.next(count);
    addEventListener;
    //a~ade un count por segundo
  }, 1000);
  setTimeout(()=> {
      subscriber.complete();
  }, 4000);
  // cuando finalizan las suscripciones se dispara el return
  return () => {
    clearInterval(interval);
    console.log("intervalo terminado");
  };
});

const subs1 = interval$.subscribe(observer);
const subs2 = interval$.subscribe(observer);
const subs3 = interval$.subscribe(observer);

/** ENCADENAR SUBSCRIPCIONES A LA ORIGINAL */ 
subs1.add(subs2).add(subs3);

setTimeout(() => {

    subs1.unsubscribe();

  console.log('subscripciones listas')
}, 6000);
