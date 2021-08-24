export interface IComment {
    user: string;
    content: string;
    article: string;
    isAnwerTo: string;
    createdAt: Date;
    updatedAt?: Date;
}
