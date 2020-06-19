import { Router } from "express";
import formaPagoController from "../controller/formaPagoController";

class FormaPagoRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }
  config(): void {
    this.router.get("/", formaPagoController.list);
    this.router.post("/", formaPagoController.create);
    this.router.delete("/:id", formaPagoController.delete);
    this.router.put("/:id", formaPagoController.put);
  }
}

const formaPagoRoute = new FormaPagoRoutes();
export default formaPagoRoute.router;
