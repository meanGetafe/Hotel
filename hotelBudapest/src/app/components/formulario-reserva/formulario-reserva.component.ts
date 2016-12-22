import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../services/reserva.service';
import { Habitacion } from '../../model/habitacion';

@Component({
  selector: 'app-formulario-reserva',
  templateUrl: './formulario-reserva.component.html',
  styleUrls: ['./formulario-reserva.component.css'],
  providers: [ReservaService]
})
export class FormularioReservaComponent implements OnInit {

  private habitaciones: number[];
  private rooms: Habitacion[];
  private habitacion: number;
  private mensaje: string;

  constructor(private service: ReservaService) {
    this.habitaciones = new Array();
    this.rooms = new Array();
    this.habitacion = 1;
    this.habitaciones.push(this.habitacion);
  }


  agregarFila() {
    this.habitacion++;
    this.habitaciones.push(this.habitacion);
  }

  eliminarFila(posicion) {
    this.habitaciones.splice(this.habitaciones.indexOf(posicion), 1);
  }

  reservar() {
    console.log("Entra en reserva");
    this.service.reservar(this.rooms).subscribe((mensaje) => {
      this.mensaje = mensaje;
    }, (error) => {
      console.log("Error", error);
    }, () => {
      console.log("Terminada la subscripcion");
    });
  }

  recogerDatosFila(room: Habitacion) {
    this.rooms.push(room);
    console.log("llega al form la room ", room);
  }

  ngOnInit() {
  }

}
