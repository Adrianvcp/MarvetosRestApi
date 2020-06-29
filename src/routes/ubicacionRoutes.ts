import { Router } from "express";
import ubicacionController from "../controller/ubicacionController";

class UbicacionRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", ubicacionController.list);
    this.router.get("/descuento", ubicacionController.listDiscount);
    this.router.post("/", ubicacionController.create);
    this.router.delete("/:id", ubicacionController.delete);
    this.router.put("/:id", ubicacionController.put);
  }
}

const ubicacionRoute = new UbicacionRoutes();
export default ubicacionRoute.router;
