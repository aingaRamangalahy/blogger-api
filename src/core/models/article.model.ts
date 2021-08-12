import * as mongoose from "mongoose";
import { IArticle } from "../../core/interfaces/model-interfaces"

let Schema = mongoose.Schema;

let ArticleSchema = new Schema<IArticle>(
    {
        title: {
            type: String,
            required: [true, "Please add article title"],
        },
        description: {
            type: String,
            required: [true, "Please add article description"],
        },
        author: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "User",
            required: true,
        },
        coverImage: {
            type: String,
            required: false,
            default: "no-cover.jpg",
        },
        content: {
            type: String,
            required: [true, "Please add article content"],
        },
        category: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Category",
        },
        comments: {
            type: [mongoose.SchemaTypes.ObjectId],
            ref: "Comment",
        },
        reactions: {
            clapps: Number,
        },
        isCommentEnable: {
            type: Boolean,
            defalut: true,
        },
        isReactionEnable: {
            type: Boolean,
            defalut: true,
        },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, required: false },
    },
    { _id: true }
);

export default mongoose.model<IArticle>("Article", ArticleSchema);
