import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonajesI } from 'src/app/interface/personajes.interface';
import { PeticionesService } from 'src/app/services/peticiones.service';

import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';


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
    'species',
    'info',
    'accion'
  ]

  currentID!:number;

  personaIndividual:any = []




  @ViewChild(MatPaginator,{static:true}) paginator!:MatPaginator;
  @ViewChild(MatSort, {static:true}) sort!: MatSort;

  constructor(private _peticion:PeticionesService,
    private route:ActivatedRoute, 
    private _router:Router) { }


  ngOnInit(): void {
    this._peticion.getPersonajes()
    .subscribe({
      next: (data) => {
          const {info,results}:any = data;
          this.personajes = [...this.personajes, ...results]
          this.dataSource = new MatTableDataSource(this.personajes)
          this.dataSource.sort = this.sort
          this.dataSource.paginator = this.paginator
        }
    })

  }


  applyFilter(event:any){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  detallePersonaje(id:number){
    this._peticion.getDetalles(id).subscribe({
      next: data => {
        this.personaIndividual = data
      }
    })
  }

  agregarPersonaje(){
    this._router.navigate(['dashboard/crud'])
  }





}
