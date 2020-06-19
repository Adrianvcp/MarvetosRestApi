import { Response, Request } from "express";
import pool from "../database"; // BD se importa

class FormaPagoController {

//CRUD FORMAPAGO
  public async create(req: Request, res: Response): Promise<void> {
    await pool.query("INSERT INTO formapago set ?", [req.body]);
    res.json({ text: "Dato guardado" });
  }

  public async delete(req: Request, res: Response): Promise<void> {
    await pool.query("delete from formapago where formapago.idPago=?", [req.params.id]);
    res.json({ text: "delete:" + req.params.id });
  }

  public async put(req: Request, res: Response): Promise<void> {
    await pool.query("update formapago set ? where formapago.idPago = ?", [
      req.body,
      req.params.id,
    ]);
    res.json({ text: "Estado modificado" });
  }
  
  public async list(req: Request, res: Response): Promise<void> {
    const data = await pool.query(
      "select * from formapago",
      (err, result, field) => {
        if (!err) {
          res.json(result);
        }
      }
    );
  }
}
const formaPagoController = new FormaPagoController();
export default formaPagoController; 