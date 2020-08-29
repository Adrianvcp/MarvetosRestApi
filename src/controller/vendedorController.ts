import { Response, Request } from "express";
import pool from "../database"; // BD se importa

class VendedorController {
  //CRUD
  public async create(req: Request, res: Response): Promise<void> {
    console.log(req.body);
    await pool.query("INSERT INTO vendedor set ?", [req.body]);
    res.json({ text: "Vendedor guardado" });
  }

  public async delete(req: Request, res: Response): Promise<void> {
    await pool.query("delete from vendedor where vendedor.idVendedor=?", [
      req.params.id,
    ]);
    res.json({ text: "delete:" + req.params.id });
  }

  public async put(req: Request, res: Response): Promise<void> {
    console.log(req.body);
    console.log(req.params);
    await pool.query("update vendedor set ? where vendedor.idVendedor = ?", [
      req.body,
      req.params.id,
    ]);
    res.json({ text: "Datos modificados" });
  }

  public async list(req: Request, res: Response): Promise<void> {
    const data = await pool.query(
      "select * from vendedor",
      (err, result, field) => {
        if (!err) {
          res.json(result);
        }
      }
    );
  }
}

const vendedorController = new VendedorController();
export default vendedorController;
