import { Response, Request, NextFunction } from "express";
import { asyncHandler } from "../core/middlewares";
import { ErrorResponse } from "../core/utils";
import { ExtendedRequest } from "../interfaces/model-interfaces";

import Comment from "../core/models/comment.model";

class CommentController {
    constructor() {}

    getComments = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const comments = await Comment.find();

            res.status(200).json({
                success: true,
                data: comments,
            });
        }
    );

    getComment = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const comment = await Comment.findById(req.params.id);

            res.status(200).json({
                success: true,
                data: comment,
            });
        }
    );

    createComment = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const comment = await Comment.create(req.body);

            res.status(200).json({
                success: true,
                data: comment,
            });
        }
    );

    updateComment = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const comment = await Comment.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                    runValidators: true,
                }
            );

            res.status(200).json({
                success: true,
                data: comment,
            });
        }
    );

    deleteComment = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            await Comment.findByIdAndDelete(req.params.id);

            res.status(200).json({
                success: true,
                data: {},
            });
        }
    );
}

export default new CommentController();
