import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/services/productos.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})
export class ListProductosComponent implements OnInit {

  columnas: string[] = ['idProducto', 'nombre', 'descripcion','precio','existencia'];

  dataSource:any;
  productos?: Productos[];
  currentTutorial: Productos = {};
  currentIndex = -1;
  nombreProducto = '';

  constructor(private productosService: ProductosService) { }
  ngOnInit(): void {
    this.obtenerProductos();
  }
  obtenerProductos(): void {
    this.productosService.getAll()
      .subscribe({
        next: (data) => {

          this.productos = data;
          this.dataSource = new MatTableDataSource<Productos>(data);
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.obtenerProductos();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  searchProductoByNombre(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;
    this.productosService.findByNombre(this.nombreProducto)
      .subscribe({
        next: (data) => {
          this.productos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
