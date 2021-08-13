import { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../../core/utils";
import { asyncHandler } from "./asyncHandler";

import * as jwt from "jsonwebtoken";

import User from "../../core/models/user.model";
import { ExtendedRequest, IUser } from "../../core/interfaces/model-interfaces";
import { JWT_SECRET } from "../../core/environment";

class Auth {
    /**
     * middleware to protect routes
     * a query should have an authorization token to access protected routes
     */
    protect = asyncHandler(
        async (req: ExtendedRequest, res: Response, next: NextFunction) => {
            let token;
            if (
                req.headers.authorization &&
                req.headers.authorization.startsWith("Bearer")
            ) {
                // set token from Bearer token
                token = req.headers.authorization.split(" ")[1];
            }

            if (!token) {
                return next(
                    new ErrorResponse(
                        "Not authorized to access this route",
                        401
                    )
                );
            }

            try {
                const decoded = jwt.verify(token, JWT_SECRET);
                // add user information to request object
                req.user = await User.findById(decoded._id);
                next();
            } catch (error) {
                return next(new ErrorResponse("Invalid token", 401));
            }
        }
    );

    /**
     * middleware to protext routes with roles
     * user should have the specified role to access the route
     */
    authorize = (...roles) => {
        return (req: ExtendedRequest, res: Response, next: NextFunction) => {
            if (!roles.includes(req.user.role)) {
                return next(
                    new ErrorResponse(
                        `User role ${req.user.role} has no access to this route`,
                        403
                    )
                );
            }
            next();
        };
    };
}

const auth = new Auth();

export { auth };
