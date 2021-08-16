import { IUserDocument } from "../../core/interfaces/model-interfaces";
import { BaseRepository } from "./base/base.repository";

export class UserRepository extends BaseRepository<IUserDocument> {

    addUser = (user: any) => {
        return this.create(user)
    }

    getUsers = () => {
        return this.find()
    }

    getOneUser = (options: any, additionalField?: string) => {
        return this.findOne(options, additionalField)
    }

    getUserById = (id: string) => {
        return this.findById(id);
    }

    updateUser = (id: string, user: IUserDocument) => {
        return this.update(id, user)
    }

    deleteUser = (id: string) => {
        return this.delete(id)
    }

}