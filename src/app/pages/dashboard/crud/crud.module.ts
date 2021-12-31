import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    CrudComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    MaterialModule
  ]
})
export class CrudModule { }
