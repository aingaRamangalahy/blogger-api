import Container, { Inject, Service } from "typedi";
import { IUser, IUserDocument } from "../interfaces/model-interfaces";
import User from "../core/models/user.model";
import { Model } from "mongoose";
import { UserRepository } from "../repositories/user.repository";

@Service()
export default class UserService {
    private readonly userRepository: UserRepository;
    
    constructor() {
        this.userRepository = new UserRepository(User)
    }

    createUser = async (userPayload: IUserDocument) => {
        try {
            let user = await this.userRepository.addUser(userPayload);
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
            let users = await this.userRepository.getUsers();
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
            let user = await this.userRepository.getUserById(id);
            return {
                success: true,
                data: user,
            };
        } catch (error) {
            throw error;
        }
    };

    updateUser = async (id: string, userPayload: IUserDocument) => {
        try {
            let user = await this.userRepository.updateUser(id, userPayload);

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
            await this.userRepository.deleteUser(id);
            return {
                success: true,
                data: `User removed successfully`,
            };
        } catch (error) {
            throw error;
        }
    };
}
