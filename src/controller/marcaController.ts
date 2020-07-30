import {Response, Request} from "express";
import pool from "../database";

class MarcaController {
    public async create(req: Request, res: Response): Promise<void> {
        await pool.query("INSERT INTO marca set ?", [req.body]);
        res.json({ text: "Dato guardado" });
      }
    
      public async delete(req: Request, res: Response): Promise<void> {
        await pool.query("delete from marca where marca.idMarca=?", [req.params.id]);
        res.json({ text: "delete:" + req.params.id });
      }
    
      public async put(req: Request, res: Response): Promise<void> {
        await pool.query("update marca set ? where marca.idMarca = ?", [
          req.body,
          req.params.id,
        ]);
        res.json({ text: "marca modificado" });
      }
    
      
      public async list(req: Request, res: Response): Promise<void> {
        const data = await pool.query(
          "select * from marca",
          (err, result, field) => {
            if (!err) {
              res.json(result);
            }
          }
        );
      }

}
const marcaController = new MarcaController();
export default marcaController;