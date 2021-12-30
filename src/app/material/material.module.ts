import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'; 
import {MatListModule} from '@angular/material/list'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatTableModule} from '@angular/material/table'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule
  ],
  exports:[
    MatCardModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class MaterialModule { }
