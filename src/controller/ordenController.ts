import { Response, Request } from "express";
import pool from "../database"; // BD se importa

class OrdenController {

//CRUD ORDEN

  public async create(req: Request, res: Response): Promise<void> {
    await pool.query("INSERT INTO orden set ?", [req.body]);
    res.json({ text: "Orden guardada" });
  }

  public async delete(req: Request, res: Response): Promise<void> {
    await pool.query("delete from orden where orden.idOrden = ?", [req.params.id]);
    res.json({ text: "delete:" + req.params.id });
  }

  public async put(req: Request, res: Response): Promise<void> {
    await pool.query("update orden set ? where orden.idOrden = ?", [
      req.body,
      req.params.id,
    ]);
    res.json({ text: "Orden modificado" });
  }
  
  public async list(req: Request, res: Response): Promise<void> {
    const data = await pool.query(
      "select * from Orden",
      (err, result, field) => {
        if (!err) {
          res.json(result);
        }
      }
    );
  }

  public async lastIdOrden(req: Request, res: Response): Promise<void> {
    const data = await pool.query(
      "select max(idOrden) from Orden",
      (err, result, field) => {
        if (!err) {
          res.json(result);
        }
      }
    );
  }


}
const ordenController = new OrdenController();
export default ordenController;