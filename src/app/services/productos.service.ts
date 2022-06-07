import { Injectable } from '@angular/core';
import { Productos } from '../models/productos.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8081/v1/orquestador-shop/';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Productos[]> {
    return this.http.get<Productos[]>(baseUrl+'list-productos');
  }

  createProducto(data: any): Observable<any>{
    return this.http.post(baseUrl+'create-productos', data);
  }

  update(idProducto: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${idProducto}`, data);
  }

  delete(idProducto: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${idProducto}`);
  }

  findByNombre(nombre: any): Observable<Productos[]> {
    return this.http.get<Productos[]>(`${baseUrl}?nombre=${nombre}`);
  }


}
