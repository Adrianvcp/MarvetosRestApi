import {Request, Response} from 'express';
import pool from '../database';

class ComprasController {

    public async list(req: Request, res: Response): Promise<void> {
    const data = await pool.query(
      "select * from compras",
      (err, result, field) => {
        if (!err) {
          res.json(result);
        }
        }
       );
    }

    public async create(req: Request, res: Response): Promise<void> {
    await pool.query("INSERT INTO compras set ?", [req.body]);
    res.json({ text: "Compra guardada" });
    }

    public async put(req: Request, res: Response): Promise<void> {
    await pool.query("update compras set ? where peronas.id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json({ text: "Compra modificada" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
    await pool.query("delete from compras where compras.id = ?", [
      req.params.id,
    ]);
    res.json({ text: "delete:" + req.params.id });
  }
    
    public async getOne(req: Request, res: Response): Promise<any> {
      const data = await pool.query(
      "select * from compras where compras.id = ?",
      [req.params.id],

      (err, result, field) => {
        if (!err) {
          res.json(result);
        }
      }
    );
    }
}

const comprasController = new ComprasController();
export default comprasController;