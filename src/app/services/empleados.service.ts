import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http:HttpClient) { }
private API_EMPELADOS='https://jritsqmet.github.io/web-api/crash.json'

getEmpelado():Observable<any>{
  return this.http.get(this.API_EMPELADOS)
}
getEmpleadoUnico(id:any):Observable<any>{
  return this.http.get(`${this.API_EMPELADOS}/${id}`)
}

}
