import { Router } from "express"
import articleRoutes from "./article.routes";
import categoryRoutes from "./category.routes";
import commentRoutes from "./comment.routes";
import userRoutes from "./user.routes";

class AppRoutes {
    router: Router

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.use("/api/articles", articleRoutes);
        this.router.use("/api/categories", categoryRoutes);
        this.router.use("/api/comments", commentRoutes);
        this.router.use("/api/users", userRoutes)
    }
}

export default new AppRoutes().router;