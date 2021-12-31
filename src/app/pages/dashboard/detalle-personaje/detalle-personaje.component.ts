import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonajesI } from 'src/app/interface/personajes.interface';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.css']
})
export class DetallePersonajeComponent implements OnInit {

  personaje!: Observable<PersonajesI>

  currentPersonaje:any = null

  constructor(private peticion:PeticionesService,
    private route:ActivatedRoute, router:Router) { }

  ngOnInit(): void {
    console.log(this.getPersonaje(3))
  }

  getPersonaje(id:any):void{
    this.peticion.getDetalles(id)
    .subscribe(
      {next:data => {
        this.currentPersonaje = data
        console.log(data)
      }}
    )
  }
}
