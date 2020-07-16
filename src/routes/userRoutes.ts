import { Router } from "express";
import userController from "../controller/userController";

class UserRouter {
  public router: Router = Router();
  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", userController.getAllUsers);
    this.router.post("/", userController.create);
    this.router.delete("/:id", userController.delete);
    this.router.put("/:id", userController.update);
    this.router.post("/login", userController.login);
    this.router.post("/email", userController.esEmailRepetido);
  }
}

const userRouter = new UserRouter();
export default userRouter.router;
