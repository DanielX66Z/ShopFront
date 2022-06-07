import { Clientes } from "./clientes.model";
import { Productos } from "./productos.model";

export class Ordenes {

  idOrdenes?: any;
  productos?: Productos;
  clientes?: Clientes;

  cantidad?: number;
  total?: number;
}
