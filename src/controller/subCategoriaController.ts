import { Response, Request } from "express";
import pool from "../database";
class SubCategoriaController {
  public async create(req: Request, res: Response): Promise<void> {
    await pool.query("INSERT INTO subcategoria set ?", [req.body]);
    res.json({ text: "Dato guardado" });
  }

  public async delete(req: Request, res: Response): Promise<void> {
    await pool.query(
      "delete from subcategoria where subcategoria.idSubCategoria=?",
      [req.params.id]
    );
    res.json({ text: "delete:" + req.params.id });
  }

  public async put(req: Request, res: Response): Promise<void> {
    await pool.query(
      "update subcategoria set ? where subcategoria.idSubCategoria = ?",
      [req.body, req.params.id]
    );
    res.json({ text: "marca modificado" });
  }

  public async list(req: Request, res: Response): Promise<void> {
    const data = await pool.query(
      "select * from subcategoria",
      (err, result, field) => {
        if (!err) {
          res.json(result);
        }
      }
    );
  }
}
const subCategoriaController = new SubCategoriaController();
export default subCategoriaController;
