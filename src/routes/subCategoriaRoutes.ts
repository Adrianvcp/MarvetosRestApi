import { Router} from "express";
import subCategoriaController  from "../controller/subCategoriaController";

class SubCategoriaRouter{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get("/", subCategoriaController.list);
        this.router.post("/", subCategoriaController.create);
        this.router.delete("/:id", subCategoriaController.delete);
        this.router.put("/:id", subCategoriaController.put);
    }
}

const subCategoriaRouter = new SubCategoriaRouter();
export default subCategoriaRouter.router;