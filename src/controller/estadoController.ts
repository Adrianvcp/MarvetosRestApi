import { Response, Request } from "express";
import pool from "../database"; // BD se importa

class EstadoController {

//CRUD ESTADO
  public async create(req: Request, res: Response): Promise<void> {
    await pool.query("INSERT INTO estado set ?", [req.body]);
    res.json({ text: "Dato guardado" });
  }

  public async delete(req: Request, res: Response): Promise<void> {
    await pool.query("delete from estado where estado.idEstado=?", [req.params.id]);
    res.json({ text: "delete:" + req.params.id });
  }

  public async put(req: Request, res: Response): Promise<void> {
    await pool.query("update estado set ? where estado.idEstado = ?", [
      req.body,
      req.params.id,
    ]);
    res.json({ text: "Estado modificado" });
  }

  
  public async list(req: Request, res: Response): Promise<void> {
    const data = await pool.query(
      "select * from estado",
      (err, result, field) => {
        if (!err) {
          res.json(result);
        }
      }
    );
  }
}
const estadoController = new EstadoController();
export default estadoController; 