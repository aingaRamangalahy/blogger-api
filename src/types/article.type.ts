import * as mongoose from "mongoose";
export interface IArticle extends mongoose.Document {
    title: string;
    description: string;
    author: string;
    coverImage: string;
    content: string;
    category: string;
    comments: string;
    reactions: {
        clapps: number;
    };
    isCommentEnable: boolean;
    isReactionEnable: boolean;
    createdAt: Date;
    updatedAt?: Date;
}
