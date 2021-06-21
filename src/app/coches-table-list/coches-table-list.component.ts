import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Coche } from '../models/coche';
@Component({
  selector: 'app-coches-table-list',
  templateUrl: './coches-table-list.component.html',
  styleUrls: ['./coches-table-list.component.scss']
})
export class CochesTableListComponent implements OnInit, OnChanges {

  @Input() coches: Coche[] = [];

  @Output() editar = new EventEmitter<Coche>();
  @Output() vender = new EventEmitter<string | number | null>();

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.coches) {

      this.coches = changes.coches.currentValue.map((x: Coche) => ({ ...x }));
    }
  }

  ngOnInit(): void {
  }

  infoClick(infoCoche: Coche): void {
    this.editar.emit(infoCoche);
  }

  venderCoche(coche: Coche): void {
    this.vender.emit(coche.id);
  }
}
