import { Response, Request, NextFunction } from "express";
import { asyncHandler } from "../middlewares";
import { ErrorResponse } from "../../core/utils";
import { ExtendedRequest } from "../../core/interfaces/model-interfaces";

import Category from "../models/category.model";
import Container from "typedi";
import CategoryService from "../services/category.service";

class CategoryController {
    private readonly categoryService: CategoryService =
        Container.get(CategoryService);
    constructor() {}

    getCategories = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const response = await this.categoryService.getAllCategories();
            res.status(200).json(response);
        }
    );

    getCategory = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const response = await this.categoryService.getCategoryById(
                req.params.id
            );
            res.status(200).json(response);
        }
    );

    createCategory = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const response = await this.categoryService.createCategory(
                req.body
            );
            res.status(200).json(response);
        }
    );

    updateCategory = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const response = await this.categoryService.updateCategory(
                req.params.id,
                req.body
            );
            res.status(200).json(response);
        }
    );

    deleteCategory = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const response = await this.categoryService.deleteCategory(
                req.params.id
            );
            res.status(200).json(response);
        }
    );
}

export default new CategoryController();
