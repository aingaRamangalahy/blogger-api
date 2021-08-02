import { Response, Request, NextFunction } from "express";
import { asyncHandler } from "../middlewares";
import { ErrorResponse } from "../utils";
import { ExtendedRequest } from "../types";

import Article from "../models/article.model";

class ArticleController {
    constructor() {}

    getArticles = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const articles = await Article.find();

            res.status(200).json({
                success: true,
                data: articles,
            });
        }
    );

    getArticle = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const article = await Article.findById(req.params.id);

            res.status(200).json({
                success: true,
                data: article,
            });
        }
    );

    createArticle = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const article = await Article.create(req.body);

            res.status(200).json({
                success: true,
                data: article,
            });
        }
    );

    updateArticle = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const article = await Article.findByIdAndUpdate(
                req.params,
                req.body,
                {
                    new: true,
                    runValidators: true,
                }
            );

            res.status(200).json({
                success: true,
                data: article,
            });
        }
    );

    deleteArticle = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            await Article.findByIdAndDelete(req.params.id);
            
            res.status(200).json({
                success: true,
                data: {},
            });
        }
    );
}

export default new ArticleController();
