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
  //------------------------------------------
  public async put(req: Request, res: Response): Promise<void> {
    await pool.query("update orden set ? where orden.idOrden = ?", [
      req.body,
      req.params.id,
    ]);
    res.json({ text: "El estado fue asctualizado" });
  }

  //------------------------------------------------------------

  public async Buscar(req: Request, res: Response): Promise<any> {
    const data = await pool.query(
      "select * from detCond where detCond.idOrden = ?",
      [req.params.id],

      (err, result, field) => {
        if (!err) {
          res.json(result);
        }
      }
    );
  }
  //------------------------------------------------
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

  public async ultimoID(req: Request, res: Response): Promise<void> {
    console.log("asdasd");
  }
  public async lastIdOrden(req: Request, res: Response): Promise<void> {
    console.log("asdasd");
    const data = await pool.query(
      "select max(idOrden) from Orden",
      (err, result, field) => {
        if (!err) {
          console.log("DATAAAAAA");
          console.log(result);
          res.json(result);
        }
      }
    );
  }

  public async listD(req: Request, res: Response): Promise<void> {
    const data = await pool.query(
      //"SELECT orden.idOrden, ubicacion.Distrito as lugar, formapago.name as metodoPago, orden.Direccion,orden.Comentario, orden.fechaOrden, orden.PrecioTotal,estado.Estado as nombreEstado, concat(user.Apellidos,' ',user.Nombres) as nombreCliente fROM orden INNER JOIN formapago ON formapago.idPago = orden.idPago INNER JOIN ubicacion ON ubicacion.idUbicacion = orden.idUbicacion INNER JOIN estado ON estado.idEstado = orden.idEstado INNER JOIN user ON user.idUser = user.idUser",
      //"SELECT orden.idOrden, ubicacion.Distrito as lugar, formapago.name as metodoPago, orden.Direccion,orden.Comentario, orden.fechaOrden, orden.PrecioTotal,estado.Estado as nombreEstado FROM orden INNER JOIN formapago ON formapago.idPago = orden.idPago INNER JOIN ubicacion ON ubicacion.idUbicacion = orden.idUbicacion INNER JOIN estado ON estado.idEstado = orden.idEstado",
      "SELECT concat(conductor.Apellidos,' ', conductor.Nombres) as Conductor, concat(vendedor.Apellidos,' ', vendedor.Nombres) as Vendedor,concat(user.Apellidos,' ',user.Nombres) as Cliente,orden.idOrden, ubicacion.Distrito as lugar, formapago.name as metodoPago, orden.Direccion,orden.Comentario,orden.fechaEntrega,orden.fechaOrden, orden.PrecioTotal,estado.Estado as nombreEstado,orden.comentarioConductor FROM orden INNER JOIN estado ON estado.idEstado = orden.idEstado INNER JOIN user ON user.idUser = orden.idUser INNER JOIN rol ON rol.idRol = user.idRol INNER JOIN formapago ON formapago.idPago = orden.idPago INNER JOIN ubicacion ON ubicacion.idUbicacion = orden.idUbicacion INNER JOIN diadescuento ON diadescuento.idDiaDescuento = ubicacion.idDiaDescuento INNER JOIN vendedor ON vendedor.idVendedor = orden.idVendedor INNER JOIN conductor ON conductor.idConductor = orden.idConductor WHERE orden.idConductor = ? ORDER BY orden.idOrden DESC",
      //"select * from prueba12" ,
      [req.params.id],
      (err, result, field) => {
        if (!err) {
          res.json(result);
        }
      }
    );
  }

  public async getOrdersxSeller(req: Request, res: Response): Promise<void> {
    console.log("asdoiahfui");
    const data = await pool.query(
      "SELECT orden.idConductor,estado.Estado as estado, user.Nombres as nombresComprador, user.Apellidos as apellidosComprador, user.NombreEmpresa as nombreEmpresa, orden.direccion, orden.comentario, ubicacion.distrito,vendedor.Nombres as nombresVendedor, vendedor.Apellidos as apellidosVendedor, vendedor.telefono as celularVendedor, formaPago.name as metodoPago, orden.PrecioTotal, orden.idOrden, orden.fechaOrden, orden.PrecioTotal, orden.idPago  FROM orden INNER JOIN estado ON estado.idEstado = orden.idEstado INNER JOIN user ON user.idUser = orden.idUser INNER JOIN rol ON rol.idRol = user.idRol INNER JOIN formapago ON formapago.idPago = orden.idPago INNER JOIN ubicacion ON ubicacion.idUbicacion = orden.idUbicacion INNER JOIN diadescuento ON diadescuento.idDiaDescuento = ubicacion.idDiaDescuento INNER JOIN vendedor ON vendedor.idVendedor = orden.idVendedor WHERE orden.idVendedor = ?",
      [req.params.id],

      (err, result, field) => {
        if (!err) {
          res.json(result);
        }
      }
    );
  }

  public async getOrdersxUser(req: Request, res: Response): Promise<void> {
    //pasados a "orden"
    const data = await pool.query(
      "SELECT estado.idEstado, estado.Estado, orden.idConductor,estado.Estado as estado, user.Nombres as nombresComprador, user.Apellidos as apellidosComprador, user.NombreEmpresa as nombreEmpresa, orden.direccion, orden.comentario, ubicacion.distrito,vendedor.Nombres as nombresVendedor, vendedor.Apellidos as apellidosVendedor, vendedor.telefono as celularVendedor, formaPago.name as metodoPago, orden.PrecioTotal, orden.idOrden, orden.fechaOrden, orden.PrecioTotal, orden.idPago  FROM orden INNER JOIN estado ON estado.idEstado = orden.idEstado INNER JOIN user ON user.idUser = orden.idUser INNER JOIN rol ON rol.idRol = user.idRol INNER JOIN formapago ON formapago.idPago = orden.idPago INNER JOIN ubicacion ON ubicacion.idUbicacion = orden.idUbicacion INNER JOIN diadescuento ON diadescuento.idDiaDescuento = ubicacion.idDiaDescuento INNER JOIN vendedor ON vendedor.idVendedor = orden.idVendedor WHERE orden.idUser = ?",
      [req.params.id],

      (err, result, field) => {
        if (!err) {
          res.json(result);
        }
      }
    );
  }
}
const ordenController = new OrdenController();
export default ordenController;
