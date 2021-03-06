import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormularioReservaComponent } from './components/formulario-reserva/formulario-reserva.component';
import { FilaHabitacionComponent } from './components/fila-habitacion/fila-habitacion.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioReservaComponent,
    FilaHabitacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
