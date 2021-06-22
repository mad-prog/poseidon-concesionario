import { Component, OnInit } from '@angular/core';
import { Coche } from './models/coche';
import { CochesModelService } from './services/coches-model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  mostrarTarjetas = true;
  coches: Coche[] = [];
  marcaSelected: string = '';
  cocheSeleccionado: Coche | null = null;

  constructor(private cochesModel: CochesModelService) {}

  ngOnInit(): void {
    this.coches = this.cochesModel.getCoches();

    this.cochesSelectOptions = this.coches.map((x) => x.marca);
  }

  showCoche(coche: Coche): void {
    this.cocheSeleccionado = coche;
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

    const fIndex = this.coches.findIndex((coche) => coche.id === cocheId);
    if (fIndex >= 0) {
      this.coches[fIndex].vendido = true;
    }
    this.coches = [...this.coches];
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

  filtrarSoloDisponibles() {
    this.coches = this.cochesModel
      .getCoches()
      .filter((x) => x.vendido === false);
  }

  filtrarSoloEnOferta() {
    this.coches = this.cochesBackup.filter((x) => x.oferta);
  }

  mostrarTodos() {
    this.coches = [...this.cochesBackup];
  }

  soldOut() {
    // this.coches = [...this.cochesBackup];

    // this.coches.forEach(x => x.vendido = true);

    this.coches = this.cochesBackup.map((oldCoche) => {
      const newCoche = { ...oldCoche, vendido: true };
      return newCoche;
    });

    // this.coches = this.cochesBackup.map(oldCoche => ({ ...oldCoche, vendido: true }));
  }

  reset() {
    this.coches = [...this.cochesBackup];
  }

  vender(id: string | number) {
    this.cochesModel.vender(id);
    this.coches = this.cochesModel.getCoches();
  }
  // de la directiva mi-select
  // marcaSelectionChange(value: string) {
  //   this.marcaSelected = value;
  // }

  guardarCoche(coche: Coche): void {
    this.cocheSeleccionado = this.cochesModel.guardarCoche(coche);
    this.coches = this.cochesModel.getCoches();
  }
}
