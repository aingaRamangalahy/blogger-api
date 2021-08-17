import { Response, Request, NextFunction } from "express";
import { asyncHandler } from "../middlewares";
import { ErrorResponse } from "../../core/utils";
import { ExtendedRequest } from "../../core/interfaces/model-interfaces";

import Container from "typedi";
import ArticleService from "../services/article.service";

class ArticleController {
    private readonly articleService: ArticleService =
        Container.get(ArticleService);
    constructor() {}

    getArticles = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const response = await this.articleService.getPaginatedArticles(req.query)
            res.status(200).json(response);
        }
    );

    getArticle = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const response = await this.articleService.getArticleById(
                req.params.id
            );
            res.status(200).json(response);
        }
    );

    createArticle = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const response = await this.articleService.createArticle(req.body);
            res.status(200).json(response);
        }
    );

    updateArticle = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const response = await this.articleService.updateArticle(
                req.params.id,
                req.body
            );
            res.status(200).json(response);
        }
    );

    deleteArticle = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            let response = await this.articleService.deleteArticle(
                req.params.id
            );
            res.status(200).json(response);
        }
    );
}

export default new ArticleController();
