import { Response, Request } from "express";
import pool from "../database";

class DetalleCarritoController {
  //Crud de producto
  //crear un detalleCarrito
  public async create(req: Request, res: Response): Promise<void> {
    console.log(req.body);
    await pool.query("INSERT INTO detallecarrito set ?", [req.body]);
    res.json({ text: "El detalle carrisdasdto agregado" });
  }

  //listar los detalle del carrito
  public async list(req: Request, res: Response): Promise<void> {
    const data = await pool.query(
      "select *from detallecarrito",
      (err, result, field) => {
        if (!err) {
          res.json(result);
        }
      }
    );
  }
  //actualizar los productos
  public async put(req: Request, res: Response): Promise<void> {
    await pool.query(
      "update detallecarrito set ? where detallecarrito.idDetalleCarrito = ?",
      [req.body, req.params.id]
    );
    res.json({ text: "Detalle carrito actualizado " });
  }
  //eliminar producto
  /*public async delete(req: Request, res: Response): Promise<void>{
        await pool.query("delete from detallecarrito where detallecarrito.idDetalleCarrito = ?",
        [req.params.id]);
        res.json({text:"El detalleCarrito fue eliminado"
        });
    }*/
}

export const detallecarritoController = new DetalleCarritoController();
