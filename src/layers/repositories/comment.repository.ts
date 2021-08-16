
import { IComment } from "../../core/interfaces/model-interfaces";
import { BaseRepository } from "./base/base.repository";

export class CommentRepository extends BaseRepository<IComment> {

    addComment = (comment: IComment) => {
        return this.create(comment)
    }

    getComments = () => {
        return this.find()
    }

    getOneComment = (options: any) => {
        return this.findOne(options)
    }

    getCommentById = (id: string) => {
        return this.findById(id);
    }

    updateComment = (id: string, comment: IComment) => {
        return this.update(id, comment)
    }

    deleteComment = (id: string) => {
        return this.delete(id)
    }

}