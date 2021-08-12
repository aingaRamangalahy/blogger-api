import { Router } from 'express';
import UserController from '../../controllers/user.controller';

class UserRouter {

    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        // GET
        this.router.get('/:id', UserController.getUser)
        this.router.get('', UserController.getUsers)

        // POST
        this.router.post('', UserController.createUser)

        // DELETE
        this.router.delete('/:id', UserController.deleteUser)

        // PUT
        this.router.put('/:id', UserController.updateUser)
    }
}

export default  new UserRouter().router;