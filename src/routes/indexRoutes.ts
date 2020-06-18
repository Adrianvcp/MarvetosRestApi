import { Router } from "express";
import { indexController } from "../controller/indexController";

class IndexRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }
  config(): void {
    this.router.get("/", indexController.list);
  }
}

const indexRoute = new IndexRoutes();
export default indexRoute.router;
