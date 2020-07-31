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

      public async listFiltro(req: Request, res: Response): Promise<void> {
        const data = await pool.query(
            " select DISTINCT  marca.name as marca from producto inner join categoria on producto.idCategoria = categoria.idCategoria inner join marca on producto.idMarca = marca.idMarca inner join unidad on producto.idUnidad = unidad.idUnidad where producto.idCategoria=?",
            [req.params.id],
            (err, result, field) => {
            if (!err) {
              res.json(result);
            }
          }
        );
      }


      public async listFiltroMarca(req: Request, res: Response): Promise<void> {
        const data = await pool.query(
            "select producto.idProducto, producto.name as producto, producto.precio, producto.descripcion, producto.image, producto.stock, categoria.idCategoria, categoria.name as categoria, marca.name as marca  from marca inner join producto on producto.idMarca = marca.idMarca inner join categoria on categoria.idCategoria = producto.idCategoria where marca.name = ? and categoria.idCategoria = ?  ",
            [req.params.marca,req.params.ids],
            
            (err, result, field) => {
            if (!err) {
              res.json(result);
            }
          }
        );
      }

      public async busqueda(req: Request, res: Response): Promise<void> {
        const data = await pool.query(
          "select producto.idProducto, producto.name, producto.precio, producto.descripcion, producto.image, producto.stock, categoria.idCategoria, categoria.name as categoria, marca.name as marca  from marca inner join producto on producto.idMarca = marca.idMarca inner join categoria on categoria.idCategoria = producto.idCategoria where producto.name  like '%"  +req.params.car +"%' ",
         
            
            (err, result, field) => {
            if (!err) {
              res.json(result);
            }
          }
        );
      }


      public async busquedaCategoria(req: Request, res: Response): Promise<void> {
        const data = await pool.query(
          "select producto.idProducto, producto.name, producto.precio, producto.descripcion, producto.image, producto.stock, categoria.idCategoria, categoria.name as categoria, marca.name as marca  from marca inner join producto on producto.idMarca = marca.idMarca inner join categoria on categoria.idCategoria = producto.idCategoria where producto.name  like '%"  +req.params.car +"%' and producto.idCategoria = ? ",
          [req.params.cat],
         
            
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