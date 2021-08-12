export interface IWrite<T> {
    create(payload: T): Promise<T>;
    update(id: string, payload: T): Promise<T>;
    delete(id: string): Promise<T>;
}