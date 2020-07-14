import { Router } from "express";
import { emailController } from "../controller/emailController";

class SendEmailRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.post("/", emailController.sendEmail); // enviar correo
  }
}

const sendemailRoutes = new SendEmailRoutes();
export default sendemailRoutes.router;
