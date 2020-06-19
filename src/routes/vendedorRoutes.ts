import { Router } from "express";
import vendedorController from "../controller/vendedorController";

class VendedorRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }
  config(): void {
    this.router.get("/", vendedorController.list);
    this.router.post("/", vendedorController.create);
    this.router.delete("/:id", vendedorController.delete);
    this.router.put("/:id", vendedorController.put);
  }
}

const vendedorRoute = new VendedorRoutes();
export default vendedorRoute.router;
