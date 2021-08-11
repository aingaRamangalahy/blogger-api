import { Response, Request, NextFunction } from "express";
import { asyncHandler } from "../middlewares";
import { ErrorResponse } from "../utils";
import { ExtendedRequest } from "../types";

import User from "../models/user.model";
import UserService from "../services/user.service";

class UserController {
    userService: UserService;
    constructor() {
        this.userService = new UserService(User);
    }

    getUsers = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const users = await this.userService.getAllUsers()
            res.status(200).json(users);
        }
    );

    getUser = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const user = await this.userService.getOneUser(req.params.id);
            res.status(200).json(user);
        }
    );

    createUser = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            let user = await this.userService.createUser(req.body)
            res.status(200).json(user);
        }
    );

    updateUser = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const user = await this.userService.updateUser(req.params.id, req.body)
            res.status(200).json(user);
        }
    );

    deleteUser = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            let result = await this.userService.deleteUser(req.params.id)
            res.status(200).json(result);
        }
    );
}

export default new UserController();
