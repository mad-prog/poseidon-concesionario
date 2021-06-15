import { Component, OnInit } from '@angular/core';
import { Coche } from './models/coche';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mostrarTarjetas = true;
  coches: Coche[] = [];

  ngOnInit(): void {

    let id = 0;

    this.coches = [
      {
        id: id++,
        marca: "Mercedes",
        modelo: "CLS",
        puertas: 3,
        tipoDeCoche: "Coupe",
        potencia: 260,
        oferta: true,
        visible: true,
        vendido: false,
        color: 'red'
      },
      {
        id: id++,
        marca: "Audi",
        modelo: "A6",
        puertas: 5,
        tipoDeCoche: "Berlina",
        potencia: 250,
        oferta: true,
        visible: true,
        vendido: true,
        color: 'blue'
      },
      {
        id: id++,
        marca: "Audi",
        modelo: "A3",
        puertas: 5,
        tipoDeCoche: "Familiar",
        potencia: 250,
        oferta: true,
        visible: true,
        vendido: false,
        color: 'green'
      },
      {
        id: id++,
        marca: "Citroën",
        modelo: "Grand C4 Spacetourer",
        puertas: 5,
        tipoDeCoche: "Monovolumen",
        potencia: 150,
        oferta: true,
        visible: true,
        vendido: false,
        color: 'yellow'
      },
      {
        id: id++,
        marca: "Mercedes",
        modelo: "GLC",
        puertas: 5,
        tipoDeCoche: "SUV",
        potencia: 258,
        oferta: true,
        visible: true,
        vendido: false,
        color: 'violet'
      },
      {
        id: id++,
        marca: "Porsche",
        modelo: "Cayenne",
        puertas: 5,
        tipoDeCoche: "SUV",
        potencia: 385,
        oferta: false,
        visible: true,
        vendido: true,
        color: 'grey'
      }
    ];

    this.coches.push({
      id: id++,
      marca: "Mercedes",
      modelo: "CLS",
      puertas: 3,
      tipoDeCoche: "Coupe",
      potencia: 260,
      vendido: false,
      color: 'orange'
    })
  }

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

  vender(cocheId: string | number | null): void {
    
  }
}
