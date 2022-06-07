import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/models/clientes.model';
import { ClientesService } from 'src/app/services/clientes.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit {

  columnas: string[] = ['idCliente', 'nombre', 'direccion'];

  dataSource:any;
  cliente?: Clientes[];

  currentIndex = -1;
  nombreProducto = '';

  constructor(private clienteService: ClientesService) { }
  ngOnInit(): void {
    this.obtenerProductos();
  }
  obtenerProductos(): void {
    this.clienteService.getAll()
      .subscribe({
        next: (data) => {

          this.cliente = data;
          this.dataSource = new MatTableDataSource<Clientes>(data);
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.obtenerProductos();
    this.currentIndex = -1;
  }

  searchProductoByNombre(): void {
    this.currentIndex = -1;
    this.clienteService.findByNombre(this.nombreProducto)
      .subscribe({
        next: (data) => {
          this.cliente = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
