import { Response, Request } from "express";
import pool from "../database";
import { join } from "path";
import { v4 } from "uuid";

//para enviar email's
import * as nodemailer from "nodemailer";
import emailbody from "../email/emailbody";

import { promises as fs } from "fs";

import multer from "multer";
import path from "path";

class EmailController {
  public async sendEmail(req: Request, res: Response): Promise<void> {
    try {
      var data = req.body;
      const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
          user: "pedrovc11@hotmail.com",
          pass: "pedro123",
        },
      });
      console.log(transporter);

      const mailOptions = {
        from: "pedrovc11@hotmail.com",
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

  public async cotizacionSend(req: Request, res: Response): Promise<void> {
    try {
      var data = req.body;
      const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
          user: "pedrovc11@hotmail.com",
          pass: "pedro123",
        },
      });
      console.log(transporter);

      const mailOptions = {
        from: "pedrovc11@hotmail.com",
        to: data.email,
        subject: "Nueva cotizacion",
        html: emailbody.HtmlEmail(data.direccion, data.distrito, data.Orden),
        attachments: [
          {
            filename: "credentials.csv",
            path: "C:/Users/pedro/Downloads/credentials.csv",
            contentType: "application/csv",
          },
        ],
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

  public async UploadExcel(req: Request, res: Response): Promise<void> {
    //Enviar mensaje
    try {
      const storage = multer.diskStorage({
        destination: path.join(__dirname, "/public/uploads"),
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      });

      const uploadImage = multer({
        storage,
        limits: { fileSize: 1000000 },
      }).single("file");

      uploadImage(req, res, (err: any) => {
        if (err) {
          err.message = "The file is so heavy for my service";
          return res.send(err);
        }
        console.log(req.file);
        res.send({ data: "uploaded" });
      });

      var data = req.params.email;
      const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
          user: "marvetos@outlook.com",
          pass: "@correo@marveto",
        },
      });

      const mailOptions = {
<<<<<<< HEAD
        from: "pedrovc11@hotmail.com",
=======
        from: "marvetos@outlook.com",
>>>>>>> ultimo
        to: "consultas@marvetos.com",
        subject: "Nueva cotizacion",
        html: emailbody.cotizacion(req.params.email),
        attachments: [
          {
            filename: req.file.filename,
            path: req.file.path,
            contentType:
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          },
        ],
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
      console.log("ENTRO ERRO");
      res.json({ error });
    }
  }
}

export const emailController = new EmailController();
