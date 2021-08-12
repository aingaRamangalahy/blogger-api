import * as mongoose from "mongoose";
import { ICategory } from "../../interfaces/model-interfaces";

let Schema = mongoose.Schema;

let CategorySchema = new Schema<ICategory>(
    {
        name: {
            type: String,
            required: [true, "Please add category name"],
        },
        description: {
            type: String,
            required: [true, "Please add category description"],
        },
        coverImage: {
            type: String,
            default: "no-cover.jpg",
        },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, required: false },
    },
    { _id: true }
);

export default mongoose.model<ICategory>("Category", CategorySchema);
