import { Router } from "express";
import { indexController } from "../controller/indexController";

class IndexRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }
  config(): void {
    this.router.get("/", indexController.list);
    this.router.post("/", indexController.create);
    this.router.delete("/:id", indexController.delete);
    this.router.put("/:id", indexController.put);
  }
}

const indexRoute = new IndexRoutes();
export default indexRoute.router;
