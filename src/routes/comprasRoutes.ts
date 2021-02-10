import {Router} from 'express';
import comprasController from '../controller/comprasController';

class ComprasRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void {
        this.router.get('/', comprasController.list);
        this.router.get('/detalle/:id', comprasController.getOne);
        this.router.post('/', comprasController.create);
        this.router.put('/:id', comprasController.put);
        this.router.delete('/:id', comprasController.delete);
    }
}

const comprasRoutes = new ComprasRoutes();
export default comprasRoutes.router;