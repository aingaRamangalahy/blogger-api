import { IWrite } from "../../../core/interfaces/action-interfaces";
import { IRead } from "../../../core/interfaces/action-interfaces";
import { Model } from "mongoose";

export abstract class BaseRepository<T> implements IRead<T>, IWrite<T> {
    constructor(private model: Model<T>) {}

    async find(payload?: any): Promise<T[]> {
        return await this.model.find(payload);
    }

    async findOne(payload: any, additionalField?: string): Promise<T> {
        return await this.model
            .findOne(payload)
            .select(`${additionalField ? "+" + additionalField : ""}`);
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

    async countDocuments() {
        return await this.model.countDocuments();
    }

    async paginate(req, populate: string) {
        let query;

        //Copy req
        const reqQuery = { ...req };

        //Fields to exclude
        const removeFields = ["select", "sort", "page", "limit"];

        //Delete remeveFields from reqQuery
        removeFields.forEach((element) => delete reqQuery[element]);

        // create query string to replace filter keywords
        let queryString = JSON.stringify(reqQuery);

        // Create operator
        queryString = queryString.replace(
            /\b(gt|gte|lt|lte|in)/g,
            (match) => `$${match}`
        );

        /*Build query*/
        // Find ressources
        query = this.model.find(JSON.parse(queryString));

        //Select Fields
        if (req.select) {
            const fields = req.select.split(",").join(" ");
            query = query.select(fields);
        }

        //Sort
        if (req.sort) {
            const sortBy = req.sort.split(",").join(" ");
            query = query.sort(sortBy);
        } else {
            query = query.sort("-createdAt");
        }

        // Paginate
        const page = +req.page || 1;
        const limit = +req.limit || 10;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const total = await this.countDocuments();

        query = query.skip(startIndex).limit(limit);

        if (populate) {
            populate = populate.split(",").join(" ");
            query = query.populate(populate);
        }

        /** execute query */
        const results = await query;

        //Paginate results
        const pagination: any = {};

        if (endIndex < total) {
            pagination.next = {
                page: page + 1,
                limit,
            };
        }

        if (startIndex > 0) {
            pagination.prev = {
                page: page - 1,
                limit,
            };
        }

        /**add advanced results to res object */
        return {
            success: true,
            count: results.length,
            data: results,
            pagination,
        };
    }
}
