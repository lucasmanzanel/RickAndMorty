import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonajesI } from '../interface/personajes.interface';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  path = 'https://rickandmortyapi.com/api/character'

  constructor(private _http:HttpClient) { }

  getPersonajes():Observable<any>{
    return this._http.get(this.path)
  }

  buscarPersonaje(query='',page=1){
    return this._http.get<PersonajesI[]>(`${this.path}/?name=${query}&page=${page}`)
  }

  getDetalles(id:number){
    return this._http.get<PersonajesI>(`${this.path}/${id}`)
  }



}
