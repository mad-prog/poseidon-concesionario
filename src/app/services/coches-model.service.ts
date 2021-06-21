import { Injectable } from '@angular/core';
import { Coche } from '../models/coche';

@Injectable({
  providedIn: 'root'
})
export class CochesModelService {

  private coches: Coche[] = [];

  constructor() {
    let id = 0;

    this.coches = [
      {
        id: id++,
        marca: "Mercedes",
        modelo: "CLS",
        puertas: 3,
        tipoDeCoche: "1",
        potencia: 260,
        oferta: true,
        visible: true,
        vendido: false,
        color: '#a4a4a4'
      },
      {
        id: id++,
        marca: "Audi",
        modelo: "A6",
        puertas: 5,
        tipoDeCoche: "2",
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
        tipoDeCoche: "3",
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
        tipoDeCoche: "4",
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
        tipoDeCoche: "1",
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
        tipoDeCoche: "2",
        potencia: 385,
        oferta: false,
        visible: true,
        vendido: true,
        color: 'grey'
      }
    ];
  }

  getCoches(): Coche[] {
    return this.coches;
  }
}
