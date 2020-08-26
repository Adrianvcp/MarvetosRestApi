import { Request, Response } from "express";
import pool from "../database";

class CotizacionController {
  //CRUD
  public async create(req: Request, res: Response): Promise<void> {
    try {
      await pool.query("INSERT INTO Cotizacion SET ?", [req.body]);
      res.json({
        Resultado:
          "Se inserto de manera correcta la Cotizacion " + [req.body.name],
      });
    } catch (error) {
      res.json({
        Resultado: "No se pudo agregar la Cotizacion por el siguiente error: " + error,
      });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    await pool.query("DELETE FROM Cotizacion WHERE Cotizacion.IDCotizacion =  ?", [
      req.params.id,
    ]);
    res.json({ Resultado: "cotizacion eliminado de manera satisfactoria." });
  }

 /*  public async listar(req: Request, res: Response): Promise<void> {
    await pool.query("SELECT * FROM Cotizacion", (err, result, field) => {
      if (!err) {
        res.json(result);
      }
    });
  } */

  public async listar(req: Request, res: Response): Promise<void> {
    const data = await pool.query(
      "SELECT * FROM Cotizacion WHERE Cotizacion.idUser = ? ORDER BY Cotizacion.idUser DESC",
      [req.params.id],
      (err, result, field) => {
        if (!err) {
          res.json(result);
        }
      }
    );
  }

  public async put(req: Request, res: Response): Promise<void> {
    await pool.query("UPDATE Cotizacion SET ? where Cotizacion.IDCotizacion= ?", [
      req.body,
      req.params.id,
    ]);
    res.json({ Resultado: "Datos actualizados " });
  }
}

const cotizacionController = new CotizacionController();
export default cotizacionController;
