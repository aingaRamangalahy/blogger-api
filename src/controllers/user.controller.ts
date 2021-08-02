import { Response, Request, NextFunction } from "express";
import { asyncHandler } from "../middlewares";
import { ErrorResponse } from "../utils";
import { ExtendedRequest } from "../types";

import User from "../models/user.model";

class UserController {
    constructor() {}

    getUsers = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const users = await User.find();

            res.status(200).json({
                success: true,
                data: users,
            });
        }
    );

    getUser = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const user = await User.findById(req.params.id);

            res.status(200).json({
                success: true,
                data: user,
            });
        }
    );

    createUser = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            let user = await User.create(req.body);

            res.status(200).json({
                success: true,
                data: user,
            });
        }
    );

    updateUser = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true,
            });

            res.status(200).json({
                success: true,
                data: user,
            });
        }
    );

    deleteUser = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            await User.findByIdAndDelete(req.params.id);

            res.status(200).json({
                success: true,
                data: {},
            });
        }
    );
}

export default new UserController();
