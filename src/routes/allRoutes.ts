import { Router } from "express";
import allController from "../controller/allController";

class AllRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", allController.list);
    this.router.get("/:id", allController.getOneBuy);
  }
}

const allRoute = new AllRoutes();
export default allRoute.router;
