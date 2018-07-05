import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { retry, map, filter } from "rxjs/operators";

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.component.html",
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  
  subscription: Subscription;

  constructor() {
   
  this.subscription =  this.regresaObservable().subscribe(
      // te subscribes al observador

      numero => {
        console.log("subs", numero);
      },
      error => console.log("error", error),
      () => console.log("Termino el observador")
    );
    
  }



  ngOnInit() {
 
  }


  ngOnDestroy() {

    console.log("se va a cerrar");
    this.subscription.unsubscribe();
    
   }


  regresaObservable(): Observable<any> {
    return new Observable(observer => {
      let cont = 0;

      let intervalo = setInterval(() => {
        cont += 1;


        const salida = {

          valor: cont

        };

        observer.next(salida); // next emite el valor del observador

        // if (cont === 3) {
        //   clearInterval(intervalo);
        //   observer.complete(); // completa y termina el observador
        // }
        //  else {

        //   // if (cont === 2) {
        //   //   clearInterval(intervalo);
        //   //   observer.error("Auxilio"); // error en el observador y se termina
        //   // }
        // }
      }, 1000);
    }).pipe(

      map( resp => resp ),
    //   filter( (valor, index) => {

    //     // console.log(valor, index);
        

    // })
    //   filter( (valor, index) => {
    //   // if ( (valor % 2) == 1 ){
      
    //   //   // impar 
    //   //   return true;

    //   // } else {
    //   //          // par
    //   //          return false;
    //   //        }

    //   }
    // )

    );
  }
}
