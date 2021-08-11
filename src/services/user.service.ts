import { Model } from "mongoose";
import { asyncHandler } from "../middlewares";
import { IUser, IUserDocument } from "../types";

export default class UserService {
    userModel: Model<IUserDocument>;

    constructor(userModel: Model<IUserDocument>) {
        this.userModel = userModel;
    }

    createUser = async (userPayload: IUser) => {
        try {
            let user = await this.userModel.create(userPayload);
            return {
                success: true,
                data: user,
            };
        } catch (error) {
            /**thorw errors to let erroHandler handle them */
            throw error;
        }
    };

    getAllUsers = async () => {
        try {
            let users = await this.userModel.find();
            return {
                success: true,
                data: users,
            };
        } catch (error) {
            throw error;
        }
    };

    getOneUser = async (id: string) => {
        try {
            let user = await this.userModel.findById(id);
            return {
                success: true,
                data: user,
            };
        } catch (error) {
            throw error;
        }
    };

    updateUser = async (id: string, userPayload: IUser) => {
        try {
            let user = await this.userModel.findByIdAndUpdate(id, userPayload, {
                runValidators: true,
                new: true,
            });

            return {
                success: true,
                data: user,
            };
        } catch (error) {
            throw error;
        }
    };

    deleteUser = async (id: string) => {
        try {
            await this.userModel.findByIdAndDelete(id);
            return {
                success: true,
                data: `User removed successfully`,
            };
        } catch (error) {
            throw error;
        }
    };
}
