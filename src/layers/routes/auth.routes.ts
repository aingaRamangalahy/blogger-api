import { Router } from "express";
import AuthenticationController from "../controllers/auth.controller";

class AuthenticationRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        // POST
        this.router.post("/signin", AuthenticationController.signin);
        this.router.post("/signup", AuthenticationController.signup);
        this.router.post("/signout", AuthenticationController.signout);
    }
}

export default new AuthenticationRouter().router;
