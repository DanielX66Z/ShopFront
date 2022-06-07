import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddClienteComponent } from './components/add-cliente/add-cliente.component';
import { AddProductosComponent } from './components/add-productos/add-productos.component';
import { ListClientesComponent } from './components/list-clientes/list-clientes.component';
import { ListProductosComponent } from './components/list-productos/list-productos.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule  } from '@angular/material/table';
import { ListOrdenesComponent } from './components/list-ordenes/list-ordenes.component';
import { AddOrdenesComponent } from './components/add-ordenes/add-ordenes.component';

@NgModule({
  declarations: [
    AppComponent,
    AddClienteComponent,
    AddProductosComponent,
    ListClientesComponent,
    ListProductosComponent,

    ListOrdenesComponent,
     AddOrdenesComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule,
    MatTableModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
