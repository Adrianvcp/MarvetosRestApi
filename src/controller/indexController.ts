import { Response, Request } from "express";
import pool from "../database"; // BD se importa

class IndexController {
  //CRUD
  public async create(req: Request, res: Response): Promise<void> {
    console.log(req.body);
    await pool.query("INSERT INTO games set ?", [req.body]);
    res.json({ text: "Datp guardado" });
  }

  public async delete(req: Request, res: Response): Promise<void> {
    await pool.query("delete from games where games.id=?", [req.params.id]);
    res.json({ text: "delete:" + req.params.id });
  }

  public async put(req: Request, res: Response): Promise<void> {
    console.log(req.body);
    console.log(req.params);
    await pool.query("update games set ? where games.id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json({ text: "Datos modificados" });
  }

  public async list(req: Request, res: Response): Promise<void> {
    const data = await pool.query(
      "select * from games",
      (err, result, field) => {
        if (!err) {
          res.json(result);
        }
      }
    );
  }
}

export const indexController = new IndexController();
