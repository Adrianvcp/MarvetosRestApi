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
        this.router.put("/:id", productoController.put);
    }
}

const productoRoutes = new ProductoRoutes();
export default productoRoutes.router;