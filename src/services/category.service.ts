import { ICategory } from "../core/interfaces/model-interfaces";
import { CategoryRepository } from "../repositories/category.repository";
import Category from "../core/models/category.model";
import { Service } from "typedi";

@Service()
export default class CategoryService {
    private readonly categoryRepository: CategoryRepository

    constructor() {
        this.categoryRepository = new CategoryRepository(Category)
    }

    createCategory = async (categoryPayload: ICategory) => {
        try {
            let category = await this.categoryRepository.addCategory(categoryPayload)
            return {
                success: true,
                data: category,
            };
        } catch (error) {
            /**thorw errors to let erroHandler handle them */
            throw error;
        }
    };

    getAllCategories = async () => {
        try {
            let categories = await this.categoryRepository.getCategories()
            return {
                success: true,
                data: categories,
            };
        } catch (error) {
            throw error;
        }
    };

    getCategoryById = async (id: string) => {
        try {
            let category = await this.categoryRepository.getCategoryById(id)
            return {
                success: true,
                data: category,
            };
        } catch (error) {
            throw error;
        }
    };

    updateCategory = async (id: string, categoryPayload: ICategory) => {
        try {
            let category = await this.categoryRepository.updateCategory(id, categoryPayload)

            return {
                success: true,
                data: category,
            };
        } catch (error) {
            throw error;
        }
    };

    deleteCategory = async (id: string) => {
        try {
            await this.categoryRepository.deleteCategory(id)
            return {
                success: true,
                data: `Category removed successfully`,
            };
        } catch (error) {
            throw error;
        }
    };

}
