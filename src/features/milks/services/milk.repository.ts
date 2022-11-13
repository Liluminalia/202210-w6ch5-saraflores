import { Milk } from '../types/milk';
import { RepositoryMilks } from './repository';

export class MilkRepository implements RepositoryMilks<Milk> {
    url: string;
    constructor(url = '') {
        this.url =
            'https://202211w6ch1saramireyapatricia-production.up.railway.app/milk';
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    getAllMilks(): Promise<Array<Milk>> {
        return fetch(this.url)
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => {
                return `${error}`;
            });
    }

    createMilk(milk: Partial<Milk>): Promise<Milk> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(milk),
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

    deleteMilk(id: number): Promise<void> {
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

    updateMilk(partialMilk: Partial<Milk>): Promise<Milk> {
        return fetch(`${this.url}/${partialMilk.id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialMilk),
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
