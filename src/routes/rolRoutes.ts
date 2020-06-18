import { Router } from "express";
import rolController from "../controller/rolController";

class RolRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", rolController.listar); // listar todas las categorias
    this.router.post("/", rolController.create); //insertando categoria
    this.router.delete("/:id", rolController.delete);
    this.router.put("/:id", rolController.put);
  }
}

const rolRoutes = new RolRoutes();
export default rolRoutes.router;
