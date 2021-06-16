import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CochesTableListComponent } from './coches-table-list/coches-table-list.component';
import { SwitchSiNoComponent } from './switch-si-no/switch-si-no.component';
import { CochesCardListComponent } from './coches-card-list/coches-card-list.component';
import { CochesListComponent } from './coches-list/coches-list.component';
import { CochesFilterComponent } from './coches-filter/coches-filter.component';
import { HighLightDirective } from './high-light.directive';

@NgModule({
  declarations: [
    AppComponent,
    CochesTableListComponent,
    SwitchSiNoComponent,
    CochesCardListComponent,
    CochesListComponent,
    CochesFilterComponent,
    HighLightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
