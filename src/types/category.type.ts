import * as mongoose from "mongoose";

export interface ICategory extends mongoose.Document {
    name: string;
    description: string;
    coverImage: string;
    createdAt: Date;
    updatedAt?: Date;
}
