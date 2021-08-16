import { Response, Request, NextFunction } from "express";
import { asyncHandler } from "../middlewares";
import { ErrorResponse } from "../../core/utils";
import {
    ExtendedRequest,
    IUserDocument,
} from "../../core/interfaces/model-interfaces";

import User from "../models/user.model";
import AuthService from "../services/auth.service";
import Container from "typedi";

class AuthenticationController {
    private readonly authService: AuthService = Container.get(AuthService)
    constructor() {}

    signin = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {            
            const user = await this.authService.singin(req.body);
            this.sendTokenResponse(user, res);
        }
    );

    signup = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {            
            const user = await this.authService.signup(req.body)
            this.sendTokenResponse(user, res);
        }
    );

    signout = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const response = await this.authService.signout(req.body.id)
            res.status(200).json(response);
        }
    );

    sendTokenResponse = (user: IUserDocument, res: Response) => {
        // generate token
        const token = user.generateToken();

        const body = {
            _id: user._id,
            role: user.role,
            email: user.email,
            name: user.name,
        };

        res.status(200).json({
            success: true,
            body,
            token,
        });
    };
}

export default new AuthenticationController();
