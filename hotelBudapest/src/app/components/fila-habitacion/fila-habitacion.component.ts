import { Component, OnInit, EventEmitter } from '@angular/core';
import { Habitacion } from '../../model/habitacion';

@Component({
  selector: 'app-fila-habitacion',
  templateUrl: './fila-habitacion.component.html',
  styleUrls: ['./fila-habitacion.component.css'],
  outputs: ['eventoEmitidoFila']
})
export class FilaHabitacionComponent implements OnInit {
  private room: Habitacion;

  private eventoEmitidoFila: EventEmitter<Habitacion> = new EventEmitter<Habitacion>();

  constructor() {
    this.room = new Habitacion();
  }

  ngOnInit() {
  }

  confirmarFila() {
    console.log("Room=>", this.room);
    this.eventoEmitidoFila.emit(this.room);
  }

}
