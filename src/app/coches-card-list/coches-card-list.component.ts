import { Component, Input, OnInit } from '@angular/core';
import { Coche } from '../models/coche';

@Component({
  selector: 'app-coches-card-list',
  templateUrl: './coches-card-list.component.html',
  styleUrls: ['./coches-card-list.component.scss']
})
export class CochesCardListComponent implements OnInit {

  @Input() coches: Coche[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
