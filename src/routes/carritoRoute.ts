import { Router } from "express";
import carritoController from "../controller/carritoController";

class CarrritoRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }
  config(): void {
    this.router.get("/", carritoController.getAllUsers);
    this.router.post("/", carritoController.create);
    this.router.put("/:id", carritoController.update);
    this.router.delete("/:id", carritoController.delete);
  }
}

const carritoRoute = new CarrritoRoutes();
export default carritoRoute.router;
