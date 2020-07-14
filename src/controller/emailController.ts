import { Response, Request } from "express";
import pool from "../database";

//para enviar email's
import * as nodemailer from "nodemailer";
import emailbody from "../email/emailbody";

class EmailController {
  public async sendEmail(req: Request, res: Response): Promise<void> {
    var data = req.body;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "pedro.velacc@gmail.com",
        pass: "72941202Acm",
      },
    });
    const mailOptions = {
      from: "pedro.velacc@gmail.com",
      to: data.email,
      subject: "Tu orden ha sido recibida exitosamente.",
      html: emailbody.HtmlEmail(data.direccion, data.distrito, data.Orden),
    };
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
        res.json({ text: "Enviar Mensaje" });
      }
    });
  }
}

export const emailController = new EmailController();
