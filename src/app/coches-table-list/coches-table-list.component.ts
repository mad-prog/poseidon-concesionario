import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Coche } from '../models/coche';

@Component({
  selector: 'app-coches-table-list',
  templateUrl: './coches-table-list.component.html',
  styleUrls: ['./coches-table-list.component.scss']
})
export class CochesTableListComponent implements OnInit {

  @Input() coches: Coche[] = [];
  @Output() show = new EventEmitter<Coche>();
  @Output() vender = new EventEmitter<string | number | null>();

  constructor() {

  }

  ngOnInit(): void {
  }

  infoClick(infoCoche: Coche): void {
    this.show.emit(infoCoche);
    infoCoche.marca = 'SEAT';
  }

  venderCoche(coche: Coche): void {
    this.vender.emit(coche.id);
  }
}
