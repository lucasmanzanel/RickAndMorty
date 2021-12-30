import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';
import { DetallePersonajeComponent } from './detalle-personaje/detalle-personaje.component';
import {NavbarComponent} from '../../components/navbar/navbar.component'

@NgModule({
  declarations: [
    NavbarComponent,
    DashboardComponent,
    ListaPersonajesComponent,
    DetallePersonajeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
