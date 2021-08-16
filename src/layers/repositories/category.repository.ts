
import { ICategory } from "../../core/interfaces/model-interfaces";
import { BaseRepository } from "./base/base.repository";

export class CategoryRepository extends BaseRepository<ICategory> {

    addCategory = (category: ICategory) => {
        return this.create(category)
    }

    getCategories = () => {
        return this.find()
    }

    getOneCategory = (options: any) => {
        return this.findOne(options)
    }

    getCategoryById = (id: string) => {
        return this.findById(id);
    }

    updateCategory = (id: string, category: ICategory) => {
        return this.update(id, category)
    }

    deleteCategory = (id: string) => {
        return this.delete(id)
    }

}