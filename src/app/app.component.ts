import { Component, OnInit } from '@angular/core';
import { Coche } from './models/coche';
import { CochesModelService } from './services/coches-model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  coches: Coche[] = [];
  marcaSelected: string = '';
  cocheSeleccionado: Coche | null = null;

  constructor(private cochesModel: CochesModelService) {
  }

  ngOnInit(): void {
    this.coches = this.cochesModel.getCoches();
  }

  showCoche(coche: Coche): void {
    this.cocheSeleccionado = coche;
  }

  filtrarSoloDisponibles() {
    this.coches = this.cochesModel.getSoloDisponibles();
  }

  filtrarSoloEnOferta() {
    this.coches = this.cochesModel.getSoloEnOferta();
  }

  mostrarTodos() {
    this.coches = this.cochesModel.getCoches();
  }

  vender(id: string | number){
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
