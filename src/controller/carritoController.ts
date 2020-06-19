import { Response, Request } from "express";
import pool from "../database";

class CarritoController {
  //metodos - CRUD
  public async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      await pool.query("SELECT * FROM carrito", (err, result, field) => {
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
      await pool.query("INSERT INTO carrito SET ? ", [req.body]);
      res.json({
        Resultado: "Se agrego " + [req.body] + " de manera satisfactoria",
      });
    } catch (error) {
      res.json({ Resultado: "Error" + error });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      await pool.query("DELETE FROM carrito WHERE carrito.idCarrito =?", [
        req.params.id,
      ]);
      res.json({ Resultado: "Se elimino el usuario " + req.params.id });
    } catch (error) {
      res.json({ Resultado: "Error" + error });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      await pool.query("UPDATE carrito SET ? WHERE carrito.idCarrito =?", [
        req.body,
        req.params.id,
      ]);
      res.json({ Resultado: "Datos Actualizados" });
    } catch (error) {
      res.json({ Resultado: "Eror:" + error });
    }
  }
  //---
}

const carritoController = new CarritoController();
export default carritoController;
