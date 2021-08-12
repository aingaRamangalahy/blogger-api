import { Router } from 'express';
import CommentController from '../../controllers/comment.controller';

class CommentRouter {

    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        // GET
        this.router.get('/:id', CommentController.getComment)
        this.router.get('', CommentController.getComments)

        // POST
        this.router.post('', CommentController.createComment)

        // DELETE
        this.router.delete('/:id', CommentController.deleteComment)

        // PUT
        this.router.put('/:id', CommentController.updateComment)
    }
}

export default  new CommentRouter().router;