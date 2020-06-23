import {Router} from "express";
import {productoController} from "../controller/productoController";  

class ProductoRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.post("/", productoController.create);
        this.router.get("/", productoController.list);
        this.router.get("/lista", productoController.listThree);
        this.router.put("/:id", productoController.put);
        this.router.delete("/:id", productoController.delete);
        this.router.get("/:id", productoController.getOne);
        
    }
}

const productoRoutes = new ProductoRoutes();
export default productoRoutes.router;