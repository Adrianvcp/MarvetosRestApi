import {Response, Request} from "express";
import pool from "../database";

class ProductoController{
    //Crud de producto
    //crear un producto
    public async create(req: Request, res: Response): Promise<void>{
        console.log(req.body);
        await pool.query("INSERT INTO producto set ?", [req.body]);
        res.json({text: "El producto " +[req.body.name] + " fue agregado"}
        );
    }

    //listar los productos
    public async list(req: Request, res: Response): Promise<void>{
        const data = await pool.query(
            "select *from producto",
            (err, result, field) => {
                if(!err){
                    res.json(result);
                }
            }
        );
    }

    //actualizar los productos
    public async put(req: Request, res: Response): Promise<void>{
        
        await pool.query("update producto set ? where producto.idProducto = ?",
        [req.body,
        req.params.id,
        ]);
        res.json({text: "El producto " + [req.body.name] + " fue actualizado",
        });
    }
}

export const productoController = new ProductoController();