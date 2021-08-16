
import { ArticleRepository } from "../repositories/article.repository";
import Article from "../models/article.model";
import { Service } from "typedi";
import { IArticle } from "../../core/interfaces/model-interfaces";

@Service()
export default class ArticleService {
    private readonly articleRepository: ArticleRepository

    constructor() {
        this.articleRepository = new ArticleRepository(Article)
    }

    createArticle = async (articlePayload: IArticle) => {
        try {
            let article = await this.articleRepository.addArticle(articlePayload)
            return {
                success: true,
                data: article,
            };
        } catch (error) {
            throw error;
        }
    };

    getAllArticles = async () => {
        try {
            let articles = await this.articleRepository.getArticles()
            return {
                success: true,
                data: articles,
            };
        } catch (error) {
            throw error;
        }
    };

    getArticleById = async (id: string) => {
        try {
            let article = await this.articleRepository.getArticleById(id)
            return {
                success: true,
                data: article,
            };
        } catch (error) {
            throw error;
        }
    };

    updateArticle = async (id: string, articlePayload: IArticle) => {
        try {
            let article = await this.articleRepository.updateArticle(id, articlePayload)

            return {
                success: true,
                data: article,
            };
        } catch (error) {
            throw error;
        }
    };

    deleteArticle = async (id: string) => {
        try {
            await this.articleRepository.deleteArticle(id)
            return {
                success: true,
                data: `Article removed successfully`,
            };
        } catch (error) {
            throw error;
        }
    };

}
