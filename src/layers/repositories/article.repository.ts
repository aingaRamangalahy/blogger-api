
import { IArticle } from "../../core/interfaces/model-interfaces";
import { BaseRepository } from "./base/base.repository";

export class ArticleRepository extends BaseRepository<IArticle> {

    addArticle = (article: IArticle) => {
        return this.create(article)
    }

    getArticles = (query?: any) => {
        return this.find(query)
    }

    getOneArticle = (options: any) => {
        return this.findOne(options)
    }

    getArticleById = (id: string) => {
        return this.findById(id);
    }

    updateArticle = (id: string, article: IArticle) => {
        return this.update(id, article)
    }

    deleteArticle = (id: string) => {
        return this.delete(id)
    }

    paginateArticles = (reqQuery, populate) => {
        return this.paginate(reqQuery, populate)
    }

}