import { Router } from "express";
import marcaController from "../controller/marcaController";

class MarcaRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }
  config(): void {
    this.router.get("/buscar/producto/categoria/prod/:car/:cat", marcaController.busquedaCategoria);
    this.router.get("/buscar/producto/categoria/prod/sub/:car/:cat/:sub", marcaController.busquedaxCateSub);
    this.router.get("/buscar/producto/categoria/subcategoria/filtro/:idcat/:idsub",marcaController.listFiltroSubcat);
    this.router.get("/buscar/producto/categoria/subcategoria/filtro/producto/:marca/:idcat/:idsub",marcaController.listFiltroMarcaSubcat);
    
    this.router.get("/buscar/producto/categoria/:car", marcaController.busqueda);
    this.router.get("/filtro/marca/:marca/:ids", marcaController.listFiltroMarca);
    this.router.get("/filtro/:id", marcaController.listFiltro);
    this.router.get("/", marcaController.list);
    this.router.post("/", marcaController.create);
    this.router.delete("/:id", marcaController.delete);
    this.router.put("/:id", marcaController.put);
   
   
  }
}

const marcaRoute = new MarcaRoutes();
export default marcaRoute.router;
