import {Router} from "express";
import { categoriaController } from "../controller/categoriaController";

class CategoriaRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.post("/", categoriaController.create);
        this.router.get("/", categoriaController.list);
        this.router.put("/:id", categoriaController.put);
        this.router.delete("/:id", categoriaController.delete);
    }
}

const categoriaRoutes = new CategoriaRoutes();
export default categoriaRoutes.router;