import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Ordenes } from 'src/app/models/ordenes';
import { OrdenesService } from 'src/app/services/ordenesService';

@Component({
  selector: 'app-list-ordenes',
  templateUrl: './list-ordenes.component.html',
  styleUrls: ['./list-ordenes.component.css']
})
export class ListOrdenesComponent implements OnInit {

  columnas: string[] = ['idOrdenes', 'productos', 'clientes','cantidad','total'];

  dataSource:any;
  cliente?: Ordenes[];

  currentIndex = -1;
  nombreProducto = '';

  constructor(private ordenesService: OrdenesService) { }
  ngOnInit(): void {
    this.obtenerOrdenes();
  }


  obtenerOrdenes(): void {
    this.ordenesService.getAll()
      .subscribe({
        next: (data) => {

          this.cliente = data;
          this.dataSource = new MatTableDataSource<Ordenes>(data);
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.obtenerOrdenes();
    this.currentIndex = -1;
  }



}
