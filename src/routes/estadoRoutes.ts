import { Router } from "express";
import conductorController from "../controller/conductorController";

class EstadoRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }
  config(): void {
    this.router.get("/", conductorController.list);
    this.router.post("/", conductorController.create);
    this.router.delete("/:id", conductorController.delete);
    this.router.put("/:id", conductorController.put);
  }
}

const estadoRoute = new EstadoRoutes();
export default estadoRoute.router;
