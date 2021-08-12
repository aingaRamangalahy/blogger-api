export interface IRead<T> {
    find(payload?: any): Promise<T[]>;
    findOne(payload: any): Promise<T>;
    findById(id: string): Promise<T>;
}