import { Router } from "express";
import conductorController from "../controller/conductorController";

class ConductorRoutes {
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

const conductorRoute = new ConductorRoutes();
export default conductorRoute.router;
