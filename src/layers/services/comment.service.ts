
import { CommentRepository } from "../repositories/comment.repository";
import Comment from "../models/comment.model";
import { Service } from "typedi";
import { IComment } from "../../core/interfaces/model-interfaces";

@Service()
export default class CommentService {
    private readonly commentRepository: CommentRepository

    constructor() {
        this.commentRepository = new CommentRepository(Comment)
    }

    createComment = async (commentPayload: IComment) => {
        try {
            let comment = await this.commentRepository.addComment(commentPayload)
            return {
                success: true,
                data: comment,
            };
        } catch (error) {
            /**thorw errors to let erroHandler handle them */
            throw error;
        }
    };

    getAllComments = async () => {
        try {
            let comments = await this.commentRepository.getComments()
            return {
                success: true,
                data: comments,
            };
        } catch (error) {
            throw error;
        }
    };

    getCommentById = async (id: string) => {
        try {
            let comment = await this.commentRepository.getCommentById(id)
            return {
                success: true,
                data: comment,
            };
        } catch (error) {
            throw error;
        }
    };

    getCommentsPerArticle = async (articleId: string) => {
        try {
            let comments = await this.commentRepository.getComments({ article: articleId });

            return {
                success: true,
                data: comments,
            };
            
        } catch (error) {
            throw error;
        }
    }

    updateComment = async (id: string, commentPayload: IComment) => {
        try {
            let comment = await this.commentRepository.updateComment(id, commentPayload)

            return {
                success: true,
                data: comment,
            };
        } catch (error) {
            throw error;
        }
    };

    deleteComment = async (id: string) => {
        try {
            await this.commentRepository.deleteComment(id)
            return {
                success: true,
                data: `Comment removed successfully`,
            };
        } catch (error) {
            throw error;
        }
    };

}
