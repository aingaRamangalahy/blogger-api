import { Request } from "express"
import { IUser } from ".";
export interface ExtendedRequest extends Request {
    user?: IUser;
}