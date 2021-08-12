import { Router } from 'express';
import ArticleController from '../../controllers/article.contoller';

class ArticleRouter {

    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        // GET
        this.router.get('/:id', ArticleController.getArticle)
        this.router.get('', ArticleController.getArticles)

        // POST
        this.router.post('', ArticleController.createArticle)

        // DELETE
        this.router.delete('/:id', ArticleController.deleteArticle)

        // PUT
        this.router.put('/:id', ArticleController.updateArticle)
    }
}

export default  new ArticleRouter().router;