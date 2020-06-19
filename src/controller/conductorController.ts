import { Response, Request } from "express";
import pool from "../database"; // BD se importa

class ConductorController {

//CRUD ESTADO

  public async create(req: Request, res: Response): Promise<void> {
    await pool.query("INSERT INTO conductor set ?", [req.body]);
    res.json({ text: "Conductor guardado" });
  }

  public async delete(req: Request, res: Response): Promise<void> {
    await pool.query("delete from conductor where conductor.idConduct = ?", [req.params.id]);
    res.json({ text: "delete:" + req.params.id });
  }

  public async put(req: Request, res: Response): Promise<void> {
    await pool.query("update conductor set ? where conductor.idConduct = ?", [
      req.body,
      req.params.id,
    ]);
    res.json({ text: "Estado modificado" });
  }
  
  public async list(req: Request, res: Response): Promise<void> {
    const data = await pool.query(
      "select * from conductor",
      (err, result, field) => {
        if (!err) {
          res.json(result);
        }
      }
    );
  }


}
const conductorController = new ConductorController();
export default conductorController;