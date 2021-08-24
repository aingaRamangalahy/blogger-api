export interface IArticle  {
    title: string;
    description: string;
    author: string;
    coverImage: string;
    content: string;
    category: string;
    reactions: {
        clapps: number;
    };
    isCommentEnable: boolean;
    isReactionEnable: boolean;
    createdAt: Date;
    updatedAt?: Date;
}
