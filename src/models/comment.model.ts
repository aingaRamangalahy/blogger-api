import * as mongoose from "mongoose";
import { IComment } from "../types"

let Schema = mongoose.Schema;

let CommentSchema = new Schema<IComment>(
    {
        author: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "User",
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        article: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Article",
            required: true,
        },
        isAnwerTo: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Comment",
            required: false,
        },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, required: false },
    },
    { _id: true }
);

export default mongoose.model<IComment>("Comment", CommentSchema);
