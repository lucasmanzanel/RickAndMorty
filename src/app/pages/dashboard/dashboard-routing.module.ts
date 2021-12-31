import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'crud',loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule)}
  //{path:`detallePersonaje`,loadChildren: () => import('./detalle-personaje/detalle-personaje.module').then (m => m.DetallePersonajeModule)},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
