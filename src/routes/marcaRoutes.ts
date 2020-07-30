import { Router } from "express";
import marcaController from "../controller/marcaController";

class MarcaRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }
  config(): void {
    this.router.get("/filtro/:id", marcaController.listFiltro);
    this.router.get("/", marcaController.list);
    this.router.post("/", marcaController.create);
    this.router.delete("/:id", marcaController.delete);
    this.router.put("/:id", marcaController.put);
   
  }
}

const marcaRoute = new MarcaRoutes();
export default marcaRoute.router;
