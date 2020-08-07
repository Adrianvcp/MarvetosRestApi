import { Response, Request } from "express";
import pool from "../database"; // BD se importa

class UnidadController {

//CRUD ESTADO
  public async create(req: Request, res: Response): Promise<void> {
    await pool.query("INSERT INTO unidad set ?", [req.body]);
    res.json({ text: "Dato guardado" });
  }

  public async delete(req: Request, res: Response): Promise<void> {
    await pool.query("delete from unidad where unidad.idUnidad=?", [req.params.id]);
    res.json({ text: "delete:" + req.params.id });
  }

  public async put(req: Request, res: Response): Promise<void> {
    await pool.query("update unidad set ? where unidad.idUnidad = ?", [
      req.body,
      req.params.id,
    ]);
    res.json({ text: "Estado modificado" });
  }

  
  public async list(req: Request, res: Response): Promise<void> {
    const data = await pool.query(
      "select * from unidad",
      (err, result, field) => {
        if (!err) {
          res.json(result);
        }
      }
    );
  }
}
const unidadController = new UnidadController();
export default unidadController; 