import {Router} from "express";
import {detallecarritoController} from "../controller/detalleCarritoController";  
class DetalleCarritoRoutes{
public router: Router = Router();
constructor(){
    this.config();
}
    config():void{
        this.router.post("/", detallecarritoController.create);
        this.router.get("/", detallecarritoController.list);
        this.router.put("/:id", detallecarritoController.put);
        //this.router.delete("/:id", detallecarritoController.delete);
    }

}

const detallecarritoRoutes = new DetalleCarritoRoutes();
export default detallecarritoRoutes.router;