import { Injectable } from '@angular/core';
import { Coche } from '../models/coche';

@Injectable({
  providedIn: 'root'
})
export class CochesModelService {

  private coches: Coche[] = [];
  private id = 0;
  constructor() {


    this.coches = [
      {
        id: this.id++,
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
        id: this.id++,
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
        id: this.id++,
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
        id: this.id++,
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
        id: this.id++,
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
        id: this.id++,
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
    return [...this.coches];
  }

  guardarCoche(coche: Coche): Coche | null {

    if (coche) {
      const idx = this.coches.findIndex(x => x.id === coche.id);

      if (idx >= 0) {
        this.coches[idx] = { ...coche };
        return { ...this.coches[idx] };
      } else {
        const result: Coche = { ...coche, id: this.id++ };
        this.coches.push(result);
        return { ...result };
      }
    }

    return null;
  }

  getCocheById(id: number): Coche | undefined {
    return this.coches.find(x => x.id === id);
  }

  private random(min: number = 1, max: number = 100000): number {
    return Math.floor(Math.random() * (max - min)) + min
  };
}
