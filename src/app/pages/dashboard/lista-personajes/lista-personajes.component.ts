import { Component, OnInit } from '@angular/core';
import { PersonajesI } from 'src/app/interface/personajes.interface';
import { PeticionesService } from 'src/app/services/peticiones.service';


@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {

  personajes:PersonajesI[] = []
  info:any = {
    next:null
  }

  constructor(private _peticion:PeticionesService) { }

  private pageNum = 1;
  private query!:string;


  ngOnInit(): void {
    this.getPersonajes()

  }

  getPersonajes():void{
    this._peticion.buscarPersonaje(this.query,this.pageNum)
    .subscribe({
      next: (data) => {
        console.log(data)
        const {info,results}:any = data;
        this.personajes = [...this.personajes, ...results]
        this.info = info
        
      }
    })
  }

}
