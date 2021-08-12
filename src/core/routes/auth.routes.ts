import { Router } from 'express';
import AuthenticationController from "../../controllers/auth.controller";

class AuthenticationRouter {

    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        // POST
        this.router.post('/login', AuthenticationController.login)
        this.router.post("/register", AuthenticationController.register)
        this.router.post("/logout", AuthenticationController.logout)
    }
}

export default new AuthenticationRouter().router