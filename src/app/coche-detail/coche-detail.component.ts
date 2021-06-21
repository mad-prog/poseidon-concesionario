import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coche } from '../models/coche';

@Component({
  selector: 'app-coche-detail',
  templateUrl: './coche-detail.component.html',
  styleUrls: ['./coche-detail.component.scss']
})
export class CocheDetailComponent implements OnInit, OnChanges {

  @Input() cocheSeleccionado: Coche | null = null;
  @Output() cocheEditado = new EventEmitter<Coche>();

  cocheForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.cocheForm = fb.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      puertas: [''],
      tipoDeCoche: [''],
      potencia: [''],
      color: [''],
      oferta: [false],
      visible: [true],
      vendido: [false]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cocheSeleccionado) {
      console.log('(changes.cocheSeleccionado)');
      this.cocheForm.patchValue(changes.cocheSeleccionado.currentValue);
    }
  }

  ngOnInit(): void {
  }

  guardarClick(form: FormGroup): void {

    if (form.valid) {
      const result: Coche = form.value;

      if (this.cocheSeleccionado) {
        result.id = this.cocheSeleccionado.id;
      }

      this.cocheEditado.emit(result);
    }
  }


  nuevoCocheClick(): void {
    this.cocheForm.reset();

    this.cocheSeleccionado = null;
  }
}
