import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClienteComponent } from './components/add-cliente/add-cliente.component';
import { AddProductosComponent } from './components/add-productos/add-productos.component';
import { ListClientesComponent } from './components/list-clientes/list-clientes.component';
import { ListOrdenesComponent } from './components/list-ordenes/list-ordenes.component';
import { ListProductosComponent } from './components/list-productos/list-productos.component';


const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'clientes', component: ListClientesComponent },
  { path: 'add-cliente', component: AddClienteComponent },
  { path: 'productos', component: ListProductosComponent },
  { path: 'add-producto', component: AddProductosComponent },
  { path: 'ordenes', component: ListOrdenesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
