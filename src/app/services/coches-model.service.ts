import { Injectable } from '@angular/core';
import { Coche } from '../models/coche';

@Injectable({
  providedIn: 'root'
})
export class CochesModelService {

  private coches: Coche[] = [];
  private id = 1;
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

  getCocheById(cocheId: string | number | null): Coche | undefined {
    return this.coches.find(x => x.id === cocheId);
  }

  getSoloDisponibles(): Coche[] {
    return this.coches.filter(x => x.vendido === false);
  }

  getSoloEnOferta(): Coche[] {
    return this.coches.filter(x => x.oferta);
  }

  soldOut(): Coche[] {
    return this.coches.map(oldCoche => {
      const newCoche = { ...oldCoche, vendido: true };
      return newCoche;
    })
  }

  vender(cocheId: string | number | null): Coche | null {
    //// filter
    // const rFilter = this.coches.filter(coche => coche.id === cocheId);
    // if (rFilter?.length) {
    //   rFilter[0].vendido = true;
    // }

    // // find
    // const rFind = this.coches.find(coche => coche.id === cocheId);
    // if (rFind) {
    //   rFind.vendido = true;
    // }

    // findIndex

    if (cocheId) {

      // const coche = this.getCocheById(cocheId);
      // if (coche){
      //   coche.vendido = true;
      //   return this.guardarCoche(coche);
      // }

      const fIndex = this.coches.findIndex(coche => coche.id === cocheId);
      if (fIndex >= 0) {
        this.coches[fIndex].vendido = true;
        return this.coches[fIndex];
      }
    }

    return null;
    // map
    // this.coches.map(coche => {
    //    if (coche.id === cocheId){
    //      coche.vendido = true;
    //    }  
    // });

    //  //forEach
    //  this.coches.forEach(coche => {
    //   if (coche.id === cocheId){
    //     coche.vendido = true;
    //   }
    // })

  }

  private random(min: number = 1, max: number = 100000): number {
    return Math.floor(Math.random() * (max - min)) + min
  };
}
