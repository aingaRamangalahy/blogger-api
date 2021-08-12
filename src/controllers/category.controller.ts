import { Response, Request, NextFunction } from "express";
import { asyncHandler } from "../core/middlewares";
import { ErrorResponse } from "../core/utils";
import { ExtendedRequest } from "../interfaces/model-interfaces";

import Category from "../core/models/category.model";

class CategoryController {
    constructor() {}

    getCategories = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const categories = await Category.find();

            res.status(200).json({
                success: true,
                data: categories,
            });
        }
    );

    getCategory = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const category = await Category.findById(req.params.id);

            res.status(200).json({
                success: true,
                data: category,
            });
        }
    );

    createCategory = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const category = await Category.create(req.body);

            res.status(200).json({
                success: true,
                data: category,
            });
        }
    );

    updateCategory = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const category = await Category.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                    runValidators: true,
                }
            );

            res.status(200).json({
                success: true,
                data: category,
            });
        }
    );

    deleteCategory = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            await Category.findByIdAndDelete(req.params.id);

            res.status(200).json({
                success: true,
                data: {},
            });
        }
    );
}

export default new CategoryController();
