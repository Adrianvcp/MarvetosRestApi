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
      "select * from detallecarrito",
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

  //seleccionar por detalleVenta
  public async listCarrito(req: Request, res: Response): Promise<void> {
    const data = await pool.query(
      "SELECT * FROM detallecarrito where detallecarrito.idOrden=?",
      [req.params.id],
      (err, result, field) => {
        if (!err) {
          res.json(result);
        }
      }
    );
  }

  //seleccion de detalleCarrito con sus productos
  public async BuscarDetalle(req: Request, res: Response): Promise<any> {
    const data = await pool.query(
      "SELECT detallecarrito.idOrden, producto.name as Productos,detallecarrito.cantProducto,detallecarrito.TNote as nota, unidad.name as unidades FROM `detallecarrito` INNER JOIN producto ON producto.idProducto = detallecarrito.idProducto INNER JOIN unidad ON unidad.idUnidad = producto.idUnidad where detallecarrito.idOrden=?",
      [req.params.id],
      (err, result, field) => {
        if (!err) {
          res.json(result);
        }
      }
    );
  }

  //eliminar producto
  /*public async delete(req: Request, res: Response): Promise<void>{
        await pool.query("delete from detallecarrito where detallecarrito.idDetalleCarrito = ?",
        [req.params.id]);
        res.json({text:"El detalleCarrito fue eliminado"
        });
    }*/

  public async getDescuento(req: Request, res: Response): Promise<void> {
    await pool.query(
      "SELECT * FROM diadescuento INNER JOIN ubicacion ON diadescuento.idDiaDescuento=ubicacion.idDiaDescuento",
      (err, result, field) => {
        if (!err) {
          res.json(result);
        }
      }
    );
  }
}

export const detallecarritoController = new DetalleCarritoController();
