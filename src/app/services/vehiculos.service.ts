import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor(private http:HttpClient) { }
private API_VEHICULOS='http://localhost:3000/motocicletas'

getMotos():Observable<any>{
  return this.http.get(this.API_VEHICULOS)
}

getDatos(id:any):Observable<any>{
  return this.http.get(`${this.API_VEHICULOS}/${id}`)
}

getDatosVer(id:any):Observable<any>{
  return this.http.get(`${this.API_VEHICULOS}/${id}`)
}

//////////////////eliminar y editar//////////////

putMotosEdit(moto:any):Observable<any>{
  return this.http.put(`${this.API_VEHICULOS}/${moto.id}`, moto)
}

deleteMoto(id:any):Observable<any>{
  return this.http.delete(`${this.API_VEHICULOS}/${id}`)
}

postMoto(motos: JSON): Observable <any>{
  return this.http.post(this.API_VEHICULOS, motos)
}

}
