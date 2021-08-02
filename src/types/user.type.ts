import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document{
    name: string;
    email: string;
    role: string;
    password: string;
    photo: string;
    about: string;
    createdAt: Date;
    updatedAt?: Date;
}