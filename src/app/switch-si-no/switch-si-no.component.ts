import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-si-no',
  templateUrl: './switch-si-no.component.html',
  styleUrls: ['./switch-si-no.component.scss']
})
export class SwitchSiNoComponent implements OnInit {

  @Input() valor?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
