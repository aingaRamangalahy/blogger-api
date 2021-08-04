import { Response, Request, NextFunction } from "express";
import { asyncHandler } from "../middlewares";
import { ErrorResponse } from "../utils";
import { ExtendedRequest, IUserDocument } from "../types";

import User from "../models/user.model"

class AuthenticationController {
    constructor() {}

    login = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            const { email, password } = req.body;

            if (!email || !password) {
                return next(new ErrorResponse("Invalid email or password", 400))
            }

            const user = await User.findOne({email}).select("+password");

            if (!user) {
                return next(new ErrorResponse(`User with email: ${email} not found`, 401));
            }

            // check if password match
            const isMatched = await user.matchPassword(password);

            if (!isMatched) {
                return next(new ErrorResponse("Wrong password", 401))
            }

            this.sendTokenResponse(user, res);
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
