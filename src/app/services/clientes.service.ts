import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clientes } from '../models/clientes.model';

const baseUrl = 'http://localhost:8081/v1/orquestador-shop/';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(baseUrl+'list-clientes');
  }

  createCliente(data: any): Observable<any>{
    return this.http.post(baseUrl+'create-cliente', data);
  }

  update(idCliente: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${idCliente}`, data);
  }

  delete(idCliente: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${idCliente}`);
  }

  findByNombre(nombre: any): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(`${baseUrl}?nombre=${nombre}`);
  }

}
