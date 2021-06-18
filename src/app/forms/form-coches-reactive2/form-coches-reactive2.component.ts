import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-coches-reactive2',
  templateUrl: './form-coches-reactive2.component.html',
  styleUrls: ['./form-coches-reactive2.component.scss']
})
export class FormCochesReactive2Component implements OnInit {

  cocheForm: FormGroup;

  mensaje: string = '';

  constructor(fb: FormBuilder) {
    this.cocheForm = fb.group({
      marca: ['', [Validators.required, Validators.minLength(5)]],
      modelo: ['', Validators.required],
      potencia: ['500']
    });

  }

  ngOnInit(): void {
  }

  enviar(form: FormGroup) {

    if (form.invalid) {
      alert('El formulario no es valido');
    } else {
      console.log(form);
      console.log(form.controls.marca);
    }
    // console.log(form.value);
    // console.log(form.errors);
    // console.log(form.dirty);
    // console.log(form.valid);

    // console.log(form.controls.marca.errors);

  }

  setData(): void {
      // this.cocheForm.controls.marca.setValue('Tesla');

      this.cocheForm.patchValue({
        marca: 'Tesla',
        modelo: 'S'
      });

  }
}
