import { Router } from "express";
import ordenController from "../controller/ordenController";

class OrdenRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }
  config(): void {
    this.router.get("/:id", ordenController.listD);

    this.router.get("/gID/giveme", ordenController.lastIdOrden);
    this.router.get("/vendedor/:id", ordenController.getOrdersxSeller);
    this.router.post("/", ordenController.create);
    this.router.delete("/:id", ordenController.delete);
    //-----------------------------------------------
    this.router.put("/:id", ordenController.put);

    //this.router.get("/cond/:id", ordenController.Buscar);
    //------------------------------------------------
    /*esta es la actualizacio n del vi e rnes */
  }
}

const ordenRoute = new OrdenRoutes();
export default ordenRoute.router;
