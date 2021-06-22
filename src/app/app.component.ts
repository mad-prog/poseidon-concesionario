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

  filtrarSoloDisponibles() {
    this.coches = this.cochesModel
      .getCoches()
      .filter((x) => x.vendido === false);
  }

  filtrarSoloEnOferta() {
    this.coches = this.cochesModel.filter((x) => x.oferta);
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
