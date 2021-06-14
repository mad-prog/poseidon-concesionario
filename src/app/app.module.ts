import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CochesTableListComponent } from './coches-table-list/coches-table-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CochesTableListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
