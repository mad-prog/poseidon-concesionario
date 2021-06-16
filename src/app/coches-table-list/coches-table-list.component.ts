import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Coche } from '../models/coche';

@Component({
  selector: 'app-coches-table-list',
  templateUrl: './coches-table-list.component.html',
  styleUrls: ['./coches-table-list.component.scss']
})
export class CochesTableListComponent implements OnInit, OnChanges {

  @Input() coches: Coche[] = [];

  @Output() show = new EventEmitter<Coche>();
  @Output() vender = new EventEmitter<string | number | null>();

  constructor() {   
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.coches) {
      this.coches = changes.coches.currentValue.map((x: Coche) => ({ ...x }));
    }
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
