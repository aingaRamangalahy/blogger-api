import { IWrite } from "../../../core/interfaces/action-interfaces";
import { IRead } from "../../../core/interfaces/action-interfaces";
import { Model } from "mongoose";

export abstract class BaseRepository<T> implements IRead<T>, IWrite<T> {
    constructor(private model: Model<T>) {}

    async find(payload?: any): Promise<T[]> {
        return await this.model.find(payload);
    }

    async findOne(payload: any, additionalField?: string): Promise<T> {
        return await this.model.findOne(payload).select(`${additionalField ? "+" + additionalField : ""}`);
    }

    async findById(id: string): Promise<T> {
        return await this.model.findById(id);
    }

    async create(payload: T): Promise<T> {
        return await this.model.create(payload);
    }

    async update(id: string, payload: T): Promise<T> {
        return await this.model.findByIdAndUpdate(id, payload, {
            new: true,
            runValidators: true,
        });
    }

    async delete(id: string): Promise<T> {
        return await this.model.findByIdAndDelete(id);
    }
}
