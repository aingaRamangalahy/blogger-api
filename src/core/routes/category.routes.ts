import { Router } from 'express';
import CategoryController from '../../controllers/category.controller';

class CategoryRouter {

    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        // GET
        this.router.get('/:id', CategoryController.getCategory)
        this.router.get('', CategoryController.getCategories)

        // POST
        this.router.post('', CategoryController.createCategory)

        // DELETE
        this.router.delete('/:id', CategoryController.deleteCategory)

        // PUT
        this.router.put('/:id', CategoryController.updateCategory)
    }
}

export default  new CategoryRouter().router;