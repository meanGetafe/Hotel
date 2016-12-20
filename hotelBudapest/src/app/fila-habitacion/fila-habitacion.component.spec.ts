/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FilaHabitacionComponent } from './fila-habitacion.component';

describe('FilaHabitacionComponent', () => {
  let component: FilaHabitacionComponent;
  let fixture: ComponentFixture<FilaHabitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilaHabitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
