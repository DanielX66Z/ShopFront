import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/services/productos.service';


@Component({
  selector: 'app-add-productos',
  templateUrl: './add-productos.component.html',
  styleUrls: ['./add-productos.component.css']
})
export class AddProductosComponent implements OnInit {

  productos: Productos = {
    idProducto: '',
    nombre: '',
    descripcion: '',
    existencia: 0,
    precio: 0.00
  };
  submitted = false;


  constructor(private productosService : ProductosService) {

  }

  ngOnInit(): void {
  }

  saveNewProductos(){
    const data = {
      nombre: this.productos.nombre,
      descripcion: this.productos.descripcion,
      existencia: this.productos.existencia,
      precio: this.productos.precio
    };
    this.productosService.createProducto(data).subscribe({
      next: (res) => {
        this.submitted = true;
      },
      error: (e) => console.log(e)

    })

  }


  newProducto(): void{
    this.submitted = false;
    this.productos = {
      nombre: '',
      descripcion: '',
      existencia: 0,
      precio: 0.0
    }
  }


}
