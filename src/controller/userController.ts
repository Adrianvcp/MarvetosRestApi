import { Response, Request } from "express";
import pool from "../database";
import * as CryptoJS from "crypto-js";

class UserController {
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

  public async login(req: Request, res: Response): Promise<void> {
    try {
      console.log(req.body.email);
      await pool.query(
        "select * from user u where u.email = ? and u.pass=?",
        [req.body.email, req.body.pass],
        (err, result, field) => {
          if (!err) {
            if (result.length != 0) {
              console.log("Usuario logeado");
              res.json(result);
            } else {
              console.log("Usuario no registrado en el sistema");
              res.json(result);
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
