export interface RepositoryCookie<T> {
    getAllCookies: () => Promise<Array<T>>;
    getCookie?: (id: number) => Promise<T>;
    createCookie: (item: Partial<T>) => Promise<T>;
    updateCookie: (item: Partial<T>) => Promise<T>;
    deleteCookie: (id: number) => Promise<void>;
}
