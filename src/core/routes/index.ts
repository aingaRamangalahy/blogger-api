import { Router } from "express"
import articleRoutes from "./article.routes";
import categoryRoutes from "./category.routes";
import commentRoutes from "./comment.routes";
import userRoutes from "./user.routes";
import AuthenticationRoutes from "./auth.routes";

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
        this.router.use("/api/users", userRoutes);
        this.router.use("/api/auth", AuthenticationRoutes)
    }
}

export default new AppRoutes().router;