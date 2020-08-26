import { Router } from "express";
import cotizacionController  from "../controller/cotizacionController";

class CotizacionRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/:id", cotizacionController.listar); // listar todas las categorias
    this.router.post("/", cotizacionController.create); //insertando categoria
    this.router.delete("/:id", cotizacionController.delete);
    this.router.put("/:id", cotizacionController.put);
  }
}

const cotizacionRoutes = new CotizacionRoutes();
export default cotizacionRoutes.router;
