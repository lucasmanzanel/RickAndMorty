import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonajesI } from 'src/app/interface/personajes.interface';
import { PeticionesService } from 'src/app/services/peticiones.service';

import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {

  personajes:PersonajesI[] = []
  dataSource!:MatTableDataSource<PersonajesI>
  displayedColumns: string[] = [
    'id',
    'nombre',
    'imagen',
    'gender',
    'status',
    'species'
  ]


  info:any = {
    next:null
  }


  @ViewChild(MatPaginator,{static:true}) paginator!:MatPaginator;
  @ViewChild(MatSort, {static:true}) sort!: MatSort;

  constructor(private _peticion:PeticionesService) { }


  ngOnInit(): void {
    this._peticion.getPersonajes()
    .subscribe({
      next: (data) => {
          const {info,results}:any = data;
          this.personajes = [...this.personajes, ...results]
          this.dataSource = new MatTableDataSource(this.personajes)
          this.info = info
          this.dataSource.paginator = this.paginator
        }
    })
  }




}
