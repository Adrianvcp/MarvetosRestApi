import {Response, Request} from "express";
import pool from "../database";

class CategoriaController{
    //Crud de categoria

    //crear una categoria
    public async create(req: Request, res: Response): Promise<void>{
        console.log(req.body);
        await pool.query("INSERT INTO categoria set ?", [req.body]);
        res.json({text: "La categoria " +  [req.body.name] + " fue agregado" });
    }

    
    //listar las categorias
    public async list(req: Request, res: Response): Promise<void>{
        const data = await pool.query(
            "select* from categoria",
            (err, result, field) =>{
                if(!err){
                    res.json(result);
                }
            }
        );
    }

    //actualizar las categorias
    public async put(req: Request, res: Response): Promise<void>{
        
        await pool.query("update categoria set ? where categoria.idCategoria = ?",
        [req.body,
        req.params.id,
        ]);
        res.json({text: "La categoria " + [req.body.name] + " fue actualizado",
        });
    }

    //eliminar categoria
    public async delete(req: Request, res: Response): Promise<void>{
        await pool.query("delete from categoria where categoria.idCategoria = ?",
        [req.params.id]);
        res.json({text:"La Categoria " + [req.body.name] + " fue eliminado"
        });
    }
}

export const categoriaController = new CategoriaController();