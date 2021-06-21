import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coche } from '../models/coche';

@Component({
  selector: 'app-coche-detail',
  templateUrl: './coche-detail.component.html',
  styleUrls: ['./coche-detail.component.scss']
})
export class CocheDetailComponent implements OnInit, OnChanges {

  @Input() coche?: Coche;
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
    if (changes.coche) {
      this.cocheForm.patchValue(changes.coche.currentValue);
    }
  }

  ngOnInit(): void {
  }

  guardarClick(form: FormGroup): void {
    const result: Coche = form.value;

    if (this.coche) {
      result.id = this.coche.id;
    }

    this.cocheEditado.emit(result);
  }


  nuevoCoche(): void {
    this.cocheForm.reset();

  }
}
