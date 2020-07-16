import { Response, Request } from "express";
import pool from "../database"; // BD se importa

class AllController {

//CRUD ESTADO  
  public async list(req: Request, res: Response): Promise<void> {
    const data = await pool.query(
      "SELECT * FROM orden INNER JOIN detallecarrito ON orden.idOrden = detallecarrito.idOrden INNER JOIN producto ON producto.idProducto = detallecarrito.idProducto INNER JOIN categoria ON categoria.idCategoria = producto.idCategoria INNER JOIN unidad ON unidad.idUnidad = producto.idUnidad INNER JOIN estado ON estado.idEstado = orden.idEstado INNER JOIN user ON user.idUser = orden.idUser INNER JOIN rol ON rol.idRol = user.idRol INNER JOIN formapago ON formapago.idPago = orden.idPago INNER JOIN ubicacion ON ubicacion.idUbicacion = orden.idUbicacion INNER JOIN diadescuento ON diadescuento.idDiaDescuento = ubicacion.idDiaDescuento",
      (err, result, field) => {
        if (!err) {
          res.json(result);
        }
      }
    );
  }

  public async getOneBuy(req: Request, res: Response): Promise<void>{
        const data = await pool.query(
          "SELECT unidad.name as unidades,orden.bDescuento as descuento,ubicacion.Precio as precioDelivery, ubicacion.Distrito as distrito, orden.direccion, orden.comentario, ubicacion.distrito,vendedor.Nombres as nombresVendedor, vendedor.Apellidos as apellidosVendedor, vendedor.telefono as celularVendedor, formaPago.name as metodoPago, producto.name as nombreProducto, detallecarrito.subTotal, detallecarrito.cantProducto, orden.PrecioTotal, orden.idOrden, orden.fechaOrden, orden.PrecioTotal, orden.idPago  FROM orden INNER JOIN detallecarrito ON orden.idOrden = detallecarrito.idOrden INNER JOIN producto ON producto.idProducto = detallecarrito.idProducto INNER JOIN categoria ON categoria.idCategoria = producto.idCategoria INNER JOIN unidad ON unidad.idUnidad = producto.idUnidad INNER JOIN estado ON estado.idEstado = orden.idEstado INNER JOIN user ON user.idUser = orden.idUser INNER JOIN rol ON rol.idRol = user.idRol INNER JOIN formapago ON formapago.idPago = orden.idPago INNER JOIN ubicacion ON ubicacion.idUbicacion = orden.idUbicacion INNER JOIN diadescuento ON diadescuento.idDiaDescuento = ubicacion.idDiaDescuento INNER JOIN vendedor ON vendedor.idVendedor = orden.idVendedor WHERE orden.idOrden = ?",[req.params.id],
          (err, result, field) => {
                if(!err){
                    res.json(result);
                }
            }
        );
    }

 

}
const allController = new AllController();
export default allController; 