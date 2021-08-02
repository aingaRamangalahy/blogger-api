import { Response, Request, NextFunction } from "express";
import { asyncHandler } from "../middlewares";
import { ErrorResponse } from "../utils";
import { ExtendedRequest } from "../types";

import User from "../models/user.model"

class AuthenticationController {
    constructor() {}

    login = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {

        }
    )

    register = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {

        }
    )

    logout = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {

        }
    )
    
}

export default new AuthenticationController();
