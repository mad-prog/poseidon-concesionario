import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-html',
  templateUrl: './form-html.component.html',
  styleUrls: ['./form-html.component.scss']
})
export class FormHtmlComponent implements OnInit {

  name = 'Jose';
  constructor() { }

  ngOnInit(): void {
  }

  enviar(form: any): void {
    console.log(form);
  }

}
