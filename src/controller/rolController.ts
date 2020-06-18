import { Request, Response } from "express";
import pool from "../database";

class RolController {
  //CRUD
  public async create(req: Request, res: Response): Promise<void> {
    try {
      await pool.query("INSERT INTO rol SET ?", [req.body]);
      res.json({
        Resultado:
          "Se inserto de manera correcta la categoria " + [req.body.name],
      });
    } catch (error) {
      res.json({
        Resultado: "No se pudo agregar el rol por el siguiente error: " + error,
      });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    await pool.query("DELETE FROM rol WHERE rol.idCategoria =  ?", [
      req.params.id,
    ]);
    res.json({ Resultado: "Rol eliminado de manera satisfactoria." });
  }

  public async listar(req: Request, res: Response): Promise<void> {
    await pool.query("SELECT * FROM rol", (err, result, field) => {
      if (!err) {
        res.json(result);
      }
    });
  }

  public async put(req: Request, res: Response): Promise<void> {
    await pool.query("UPDATE rol SET ? where rol.idRol= ?", [
      req.body,
      req.params.id,
    ]);
    res.json({ Resultado: "Datos actualizados " });
  }
}

const rolController = new RolController();
export default rolController;
