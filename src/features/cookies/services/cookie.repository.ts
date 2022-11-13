import { Cookie } from '../types/cookie';
import { Repository } from './repository';

export class CookieRepository implements Repository<Cookie> {
    url: string;
    constructor(url = '') {
        this.url =
            'https://202211w6ch1saramireyapatricia-production.up.railway.app/cookies';
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    getAllCookies(): Promise<Array<Cookie>> {
        return fetch(this.url)
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => {
                return `${error}`;
            });
    }

    createCookie(cookie: Partial<Cookie>): Promise<Cookie> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(cookie),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => {
                return `${error}`;
            });
    }

    deleteCookie(id: number): Promise<void> {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) throw this.createError(response);
            })
            .catch((error) => {
                return `${error}` as unknown as void;
            });
    }

    updateCookie(partialCookie: Partial<Cookie>): Promise<Cookie> {
        return fetch(`${this.url}/${partialCookie.id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialCookie),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => {
                return `${error}`;
            });
    }
}
