import { Router } from "express";
import CategoryController from "../controllers/category.controller";
import { auth } from "../middlewares";
import articleRoutes from "./article.routes";
class CategoryRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        // GET
        this.router.get("/:id", CategoryController.getCategory);
        this.router.get("", CategoryController.getCategories);

        // POST
        this.router.post(
            "",
            auth.protectRoute,
            auth.authorizedRoles("admin"),
            CategoryController.createCategory
        );

        // DELETE
        this.router.delete(
            "/:id",
            auth.protectRoute,
            auth.authorizedRoles("admin"),
            CategoryController.deleteCategory
        );

        // PUT
        this.router.put(
            "/:id",
            auth.protectRoute,
            auth.authorizedRoles("admin"),
            CategoryController.updateCategory
        );
    }
}

export default new CategoryRouter().router;
