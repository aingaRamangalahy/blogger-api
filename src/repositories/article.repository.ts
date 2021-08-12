
import { IArticle } from "../interfaces/model-interfaces";
import { BaseRepository } from "./base/base.repository";

export class ArticleRepository extends BaseRepository<IArticle> {

    addArticle = (article: IArticle) => {
        return this.create(article)
    }

    getArticles = () => {
        return this.find()
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

}