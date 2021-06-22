import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Coche } from '../models/coche';

@Component({
  selector: 'app-coches-list',
  templateUrl: './coches-list.component.html',
  styleUrls: ['./coches-list.component.scss'],
})
export class CochesListComponent {
  mostrarTarjetas = false;

  @Input() coches: Coche[] = [];
  @Output() editar = new EventEmitter<Coche>();
<<<<<<< HEAD
  @Output() vender = new EventEmitter<string | number | null>();

=======
  @Output() vender = new EventEmitter<number | string>();
  
>>>>>>> 74c323a880c162348fea9c9ecd74c24148635ed9
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
