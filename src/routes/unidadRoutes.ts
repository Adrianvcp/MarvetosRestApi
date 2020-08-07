import { Router } from "express";
import unidadController from "../controller/unidadController"

class UnidadRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", unidadController.list); // listar todas las categorias
    this.router.post("/", unidadController.create); //insertando categoria
    this.router.delete("/:id", unidadController.delete);
    this.router.put("/:id", unidadController.put);
  }
}

const unidadRoutes = new UnidadRoutes();
export default unidadRoutes.router;
