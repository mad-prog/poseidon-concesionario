import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-coches-filter',
  templateUrl: './coches-filter.component.html',
  styleUrls: ['./coches-filter.component.scss']
})
export class CochesFilterComponent implements OnInit {

  @Output() soloDisponibles = new EventEmitter();
  @Output() soloEnOferta = new EventEmitter();
  @Output() todos = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
