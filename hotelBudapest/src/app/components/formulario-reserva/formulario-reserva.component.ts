import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-reserva',
  templateUrl: './formulario-reserva.component.html',
  styleUrls: ['./formulario-reserva.component.css']
})
export class FormularioReservaComponent implements OnInit {

  private habitaciones: number[];
  private habitacion: number;

  constructor() {
    this.habitaciones = new Array();
    this.habitacion = 1;
    this.habitaciones.push(this.habitacion);
   }


  agregarFila(){
    this.habitacion ++;
    this.habitaciones.push(this.habitacion);
  }

  eliminarFila(posicion){
    this.habitaciones.splice(this.habitaciones.indexOf(posicion), 1);
  }

  reservar(){
    console.log('funciona!!');
  }

  ngOnInit() {
  }

}
