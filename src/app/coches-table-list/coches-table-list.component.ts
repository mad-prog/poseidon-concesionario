import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Coche } from '../models/coche';

@Component({
  selector: 'app-coches-table-list',
  templateUrl: './coches-table-list.component.html',
  styleUrls: ['./coches-table-list.component.scss']
})
export class CochesTableListComponent implements OnInit {

  coches: Coche[] = [];
  @Output() show = new EventEmitter<Coche>();

  constructor() {

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
        vendido: false
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
        vendido: true
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
        vendido: false
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
        vendido: false
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
        vendido: false
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
        vendido: true
      }
    ];

    this.coches.push({
      id: id++,
      marca: "Mercedes",
      modelo: "CLS",
      puertas: 3,
      tipoDeCoche: "Coupe",
      potencia: 260,      
      vendido: false
    })

  }

  ngOnInit(): void {
  }

  infoClick(infoCoche: Coche): void {
    this.show.emit(infoCoche);
  }

}
