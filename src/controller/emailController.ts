import { Response, Request } from "express";
import pool from "../database";

//para enviar email's
import * as nodemailer from "nodemailer";
import emailbody from "../email/emailbody";

class EmailController {
  public async sendEmail(req: Request, res: Response): Promise<void> {
    try {
      var data = req.body;
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "pedro.velacc@gmail.com",
          pass: "72941202#@#@Acm",
        },
      });
      console.log(transporter);

      const mailOptions = {
        from: data.email,
        to: ["pedro.velacc@gmail.com"],
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
    } catch (error) {
      res.json({ error });
    }
  }

  public async ticket(req: Request, res: Response): Promise<void> {
    var data = req.body;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "pedro.velacc@gmail.com",
        pass: "72941202Acm",
      },
    });
    var emails = [
      "pedro.velacc@gmail.com",
      "pedro.velacc1@hotmail.com",
      "u201416198@upc.edu.pe",
    ];
    const mailOptions = {
      from: "pedro.velacc@gmail.com",
      to: emails, //emails que recibiran el correo
      subject: "Orden #" + data.orderId,
      html: emailbody.Ticket(data.email, data.problema, data.orderId),
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
