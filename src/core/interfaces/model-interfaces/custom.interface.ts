import { Request } from "express"
import { IUserDocument } from "./user.interface";
export interface ExtendedRequest extends Request {
    user?: IUserDocument;
}