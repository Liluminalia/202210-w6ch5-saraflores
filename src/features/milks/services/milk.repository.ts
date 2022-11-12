import { Milk } from '../types/milk';
import { Repository } from './repository';

export class MilkRepository implements Repository<Milk> {
    url: string;
    constructor(url = '') {
        this.url = url ? url : (process.env.REACT_APP_URL_MILKS as string);
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    getAll(): Promise<Array<Milk>> {
        return fetch(this.url).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }

    create(milk: Partial<Milk>): Promise<Milk> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(milk),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }

    delete(id: number): Promise<void> {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
        }).then((response) => {
            if (!response.ok) throw this.createError(response);
        });
    }

    update(partialMilk: Partial<Milk>): Promise<Milk> {
        return fetch(`${this.url}/${partialMilk.id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialMilk),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }
}
