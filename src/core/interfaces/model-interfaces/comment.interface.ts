export interface IComment {
    author: string;
    content: string;
    article: string;
    isAnwerTo: string;
    createdAt: Date;
    updatedAt?: Date;
}
