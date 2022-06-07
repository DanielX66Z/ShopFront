import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/services/productos.service';
import {MatDialog} from '@angular/material/dialog';
import { Clientes } from 'src/app/models/clientes.model';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {


  clientes: Clientes = {
    idCliente: '',
    nombre: '',
    direccion: ''
  };
  submitted = false;


  constructor(private clientesService : ClientesService) {
  }



  ngOnInit(): void {
  }

  saveNewCliente(){
    const data = {
      nombre: this.clientes.nombre,
      direccion: this.clientes.direccion

    };
    this.clientesService.createCliente(data).subscribe({
      next: (res) => {
        this.submitted = true;
      },
      error: (e) => console.log(e)

    })

  }


  newCliente(): void{
    this.submitted = false;
    this.clientes = {
      nombre: '',
      direccion: ''
    }
  }




}
