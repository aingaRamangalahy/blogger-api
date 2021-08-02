import * as mongoose from "mongoose";

export interface IComment extends mongoose.Document {
    author: string;
    content: string;
    article: string;
    isAnwerTo: string;
    createdAt: Date;
    updatedAt?: Date;
}
