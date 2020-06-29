import { Router } from "express";
import ordenController from "../controller/ordenController";

class OrdenRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }
  config(): void {
    this.router.get("/", ordenController.list);
    this.router.get("/gid", ordenController.lastIdOrden);
    this.router.post("/", ordenController.create);
    this.router.delete("/:id", ordenController.delete);
    this.router.put("/:id", ordenController.put);
    /*esta es la actualizacion del viernes */
  }
}

const ordenRoute = new OrdenRoutes();
export default ordenRoute.router;
