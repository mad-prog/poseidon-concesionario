import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CochesTableListComponent } from './coches-table-list/coches-table-list.component';
import { SwitchSiNoComponent } from './switch-si-no/switch-si-no.component';

@NgModule({
  declarations: [
    AppComponent,
    CochesTableListComponent,
    SwitchSiNoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
