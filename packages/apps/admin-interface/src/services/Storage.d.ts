interface IStorage {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
}
export default abstract class Storage<T extends string> {
    private readonly storage;
    constructor(getStorage?: () => IStorage);
    protected get(key: T): string | null;
    protected set(key: T, value: string): void;
    protected clearItem(key: T): void;
    protected clearItems(keys: T[]): void;
}
export {};
