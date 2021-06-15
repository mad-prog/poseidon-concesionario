import { Component, Input, OnInit } from '@angular/core';
import { Coche } from '../models/coche';

@Component({
  selector: 'app-coches-list',
  templateUrl: './coches-list.component.html',
  styleUrls: ['./coches-list.component.scss']
})
export class CochesListComponent {

  mostrarTarjetas = true;
  
  @Input() coches: Coche[] = [];

  showCoche(coche: Coche): void {
    console.log(coche);
    alert(coche.marca);
  }

  cambiarVistaClick() {
    // if (this.mostrarTarjetas){
    //   this.mostrarTarjetas = false;
    // } else {
    //   this.mostrarTarjetas = true;
    // }

    this.mostrarTarjetas = !this.mostrarTarjetas;
  }

}
