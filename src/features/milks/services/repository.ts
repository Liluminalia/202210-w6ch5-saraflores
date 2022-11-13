export interface RepositoryMilks<T> {
    getAllMilks: () => Promise<Array<T>>;
    getMilk?: (id: number) => Promise<T>;
    createMilk: (item: Partial<T>) => Promise<T>;
    updateMilk: (item: Partial<T>) => Promise<T>;
    deleteMilk: (id: number) => Promise<void>;
}
