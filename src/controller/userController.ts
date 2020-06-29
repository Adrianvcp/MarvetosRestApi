import { Response, Request } from "express";
import pool from "../database";
import * as CryptoJS from "crypto-js";
import jsonwebtoken from "jsonwebtoken";
import { default as config } from "./config";

class UserController {
  tokenList = {};

  //metodos - CRUD
  public async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      await pool.query("SELECT * FROM User", (err, result, field) => {
        if (!err) {
          res.json(result);
        }
      });
    } catch (error) {
      res.json({ Error: error });
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      await pool.query("INSERT INTO user SET ? ", [req.body]);

      res.json({
        Resultado: "Se agrego " + [req.body] + " de manera satisfactoria",
      });
    } catch (error) {
      res.json({ Resultado: "Error" + error });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      await pool.query("DELETE FROM user WHERE user.idUser =?", [
        req.params.id,
      ]);
      res.json({ Resultado: "Se elimino el usuario " + req.params.id });
    } catch (error) {
      res.json({ Resultado: "Error" + error });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      await pool.query("UPDATE user SET ? WHERE user.idUser =?", [
        req.body,
        req.params.id,
      ]);
      res.json({ Resultado: "Datos Actualizados" });
    } catch (error) {
      res.json({ Resultado: "Eror:" + error });
    }
  }

  //TOKEN
  public async login(req: Request, res: Response): Promise<void> {
    try {
      console.log(req.body.email);

      const user = {
        email: req.body.email,
        pass: req.body.pass,
      };
      const infoUser = {
        nombre: "",
        apellido: "",
        nombrEmpresa: "",
      };
      console.log(user);

      await pool.query(
        "select * from user u where u.email = ? and u.pass=?",
        [user.email, user.pass],
        (err, result, field) => {
          if (!err) {
            if (result.length != 0) {
              console.log("Usuario logead o");
              console.log("TOKEN");
              infoUser.nombre = result[0].Nombres;
              infoUser.apellido = result[0].Apellidos;
              infoUser.nombrEmpresa = result[0].NombreEmopresa;
              console.log("INFO");
              console.log(infoUser);

              var token = jsonwebtoken.sign(infoUser, config.config.secret, {
                expiresIn: config.config.tokenLife,
              });
              var response = {
                status: "Usuario Logueado",
                code: 1,
                token: token,
              };

              res.json(response);
            } else {
              console.log("Usuario no registrado en el sistema");
              var respon = {
                status: "Usuario nor registrado en el sistema",
                code: 0,
              };
              res.json(respon);
            }
          }
        }
      );
    } catch (error) {
      res.json({ Resultado: "Erro" + error });
    }
  }

  //---
}

const userController = new UserController();
export default userController;
