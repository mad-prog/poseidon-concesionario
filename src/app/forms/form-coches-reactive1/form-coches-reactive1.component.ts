import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-coches-reactive1',
  templateUrl: './form-coches-reactive1.component.html',
  styleUrls: ['./form-coches-reactive1.component.scss']
})
export class FormCochesReactive1Component implements OnInit {

  cocheForm: FormGroup;
  nombre = new FormControl();

  constructor() {
    this.cocheForm = new FormGroup({
      marca: new FormControl('Tesla'),
      modelo: new FormControl('Model S'),
      potencia: new FormControl('500cv')
    });
  }

  ngOnInit(): void {
  }

  enviar(form: FormGroup) {
    console.log(form.value);
    console.log(form.errors);
    console.log(form.dirty);
    console.log(form.valid);
  }
}
