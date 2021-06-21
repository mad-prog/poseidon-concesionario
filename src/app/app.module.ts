import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CochesTableListComponent } from './coches-table-list/coches-table-list.component';
import { SwitchSiNoComponent } from './switch-si-no/switch-si-no.component';
import { CochesCardListComponent } from './coches-card-list/coches-card-list.component';
import { CochesListComponent } from './coches-list/coches-list.component';
import { CochesFilterComponent } from './coches-filter/coches-filter.component';
import { HighLightDirective } from './high-light.directive';
import { HoverSpanDirective } from './hover-span.directive';
import { CocheDisponibleStatusDirective } from './coche-disponible-status.directive';
import { MiSelectDirective } from './mi-select.directive';
import { FormHtmlComponent } from './forms/form-html/form-html.component';
import { FormCochesReactive1Component } from './forms/form-coches-reactive1/form-coches-reactive1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormCochesReactive2Component } from './forms/form-coches-reactive2/form-coches-reactive2.component';
import { CocheDetailComponent } from './coche-detail/coche-detail.component';
import { CochesModelService } from './services/coches-model.service';

@NgModule({
  declarations: [
    AppComponent,
    CochesTableListComponent,
    SwitchSiNoComponent,
    CochesCardListComponent,
    CochesListComponent,
    CochesFilterComponent,
    HighLightDirective,
    HoverSpanDirective,
    CocheDisponibleStatusDirective,
    MiSelectDirective,
    FormHtmlComponent,
    FormCochesReactive1Component,
    FormCochesReactive2Component,
    CocheDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
