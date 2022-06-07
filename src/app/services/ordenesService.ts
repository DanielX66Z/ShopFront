import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ordenes } from "../models/ordenes";

const baseUrl = 'http://localhost:8081/v1/orquestador-shop/';
@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Ordenes[]> {
    return this.http.get<Ordenes[]>(baseUrl+'list-ordenes');
  }

  createOrden(data: any): Observable<any>{
    return this.http.post(baseUrl+'create-orden', data);
  }


  delete(idCliente: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${idCliente}`);
  }



}
