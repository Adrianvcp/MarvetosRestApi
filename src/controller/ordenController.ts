import { Response, Request } from "express";
import pool from "../database"; // BD se importa

class OrdenController {
  //CRUD ORDEN

  public async create(req: Request, res: Response): Promise<void> {
    await pool.query("INSERT INTO orden set ?", [req.body]);
    res.json({ text: "Orden guardada" });
  }

  public async delete(req: Request, res: Response): Promise<void> {
    await pool.query("delete from orden where orden.idOrden = ?", [
      req.params.id,
    ]);
    res.json({ text: "delete:" + req.params.id });
  }

  public async put(req: Request, res: Response): Promise<void> {
    await pool.query("update orden set ? where orden.idOrden = ?", [
      req.body,
      req.params.id,
    ]);
    res.json({ text: "Orden modificado" });
  }

  // public async put(req: Request, res: Response): Promise<void> {
  //   await pool.query("update orden set ? where orden.idOrden = ?", [
  //     req.body,
  //     req.params.id,
  //   ]);
  //   res.json({ text: "Orden modificado" });
  // }

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

  public async getOrdersxSeller(req: Request, res: Response): Promise<void>{
        const data = await pool.query(
          "SELECT orden.idConductor,estado.Estado as estado, user.Nombres as nombresComprador, user.Apellidos as apellidosComprador, user.NombreEmpresa as nombreEmpresa, orden.direccion, orden.comentario, ubicacion.distrito,vendedor.Nombres as nombresVendedor, vendedor.Apellidos as apellidosVendedor, vendedor.telefono as celularVendedor, formaPago.name as metodoPago, orden.PrecioTotal, orden.idOrden, orden.fechaOrden, orden.PrecioTotal, orden.idPago  FROM orden INNER JOIN estado ON estado.idEstado = orden.idEstado INNER JOIN user ON user.idUser = orden.idUser INNER JOIN rol ON rol.idRol = user.idRol INNER JOIN formapago ON formapago.idPago = orden.idPago INNER JOIN ubicacion ON ubicacion.idUbicacion = orden.idUbicacion INNER JOIN diadescuento ON diadescuento.idDiaDescuento = ubicacion.idDiaDescuento INNER JOIN vendedor ON vendedor.idVendedor = orden.idVendedor WHERE orden.idVendedor = ?",
          [req.params.id],
          
          (err, result, field) => {
                if(!err){
                    res.json(result);
                }
            }
        );
    }


}
const ordenController = new OrdenController();
export default ordenController;
