import { Response, Request } from "express";
import pool from "../database"; // BD se importa

class UbicacionController {
  //CRUD UBICACION
  public async create(req: Request, res: Response): Promise<void> {
    await pool.query("INSERT INTO ubicacion set ?", [req.body]);
    res.json({ text: "Dato guardado" });
  }

  public async delete(req: Request, res: Response): Promise<void> {
    await pool.query("delete from ubicacion where ubicacion.idUbicacion=?", [
      req.params.id,
    ]);
    res.json({ text: "delete:" + req.params.id });
  }

  public async put(req: Request, res: Response): Promise<void> {
    await pool.query("update ubicacion set ? where ubicacion.idUbicacion = ?", [
      req.body,
      req.params.id,
    ]);
    res.json({ text: "Ubicacion modificado" });
  }

  public async list(req: Request, res: Response): Promise<void> {
    const data = await pool.query(
      "select * from ubicacion ",
      (err, result, field) => {
        if (!err) {
          res.json(result);
        }
      }
    );
  }

  public async listDiscount(req: Request, res: Response): Promise<void> {
    const data = await pool.query(
      "SELECT * FROM ubicacion INNER JOIN diadescuento on ubicacion.idDiaDescuento = diadescuento.idDiaDescuento",
      (err, result, field) => {
        if (!err) {
          res.json(result);
        }
      }
    );
  }
}
const ubicacionController = new UbicacionController();
export default ubicacionController;
