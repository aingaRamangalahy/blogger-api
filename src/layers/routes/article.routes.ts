import { Router } from "express";
import ArticleController from "../controllers/article.contoller";

import { auth } from "../middlewares";

class ArticleRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        // GET
        this.router.get("/:id", ArticleController.getArticle);
        this.router.get("", ArticleController.getArticles);

        // POST
        this.router.post(
            "",
            auth.protectRoute,
            auth.authorizedRoles("writer"),
            ArticleController.createArticle
        );

        // DELETE
        this.router.delete(
            "/:id",
            auth.protectRoute,
            auth.authorizedRoles("writer", "admin"),
            ArticleController.deleteArticle
        );

        // PUT
        this.router.put(
            "/:id",
            auth.protectRoute,
            auth.authorizedRoles("writer"),
            ArticleController.updateArticle
        );
    }
}

export default new ArticleRouter().router;
