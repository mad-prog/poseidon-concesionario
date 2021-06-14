import { Component } from '@angular/core';
import { Coche } from './models/coche';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'concesionario';

  showCoche(coche: Coche): void {
    console.log(coche);
    alert(coche.marca);
  }
}
