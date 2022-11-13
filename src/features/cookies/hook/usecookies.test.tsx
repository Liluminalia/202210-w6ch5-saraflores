import { renderHook, waitFor } from '@testing-library/react';
import { useCookies } from './usecookies';
import { Cookie, ProtoCookie } from '../types/cookie';
import { CookieRepository } from '../services/cookie.repository';
import { Provider } from 'react-redux';
import { appStore } from '../../../infrastructure/store/store';

jest.mock('../services/cookie.repository');

const mock1 = {
    price: 3,
};
const mock2 = {
    id: 2,
    brand: 'froilan',
    kind: 'string',
    price: 3,
    description: 'string',
    selected: true,
    img: 'string',
};

describe('Given the hook', () => {
    let result: {
        current: {
            cookies: Array<Cookie>;
            handleAdd: (newCookie: ProtoCookie) => void;
            handleDelete: (cookie: Cookie) => void;
            handleUpdate: (updateCookie: Partial<Cookie>) => void;
        };
    };

    beforeEach(() => {
        CookieRepository.prototype.getAllCookies = jest
            .fn()
            .mockResolvedValue([mock2]);
        CookieRepository.prototype.createCookie = jest
            .fn()
            .mockResolvedValue(mock2);
        CookieRepository.prototype.deleteCookie = jest
            .fn()
            .mockResolvedValue(mock2);
        CookieRepository.prototype.updateCookie = jest
            .fn()
            .mockResolvedValue(mock1);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );

        // eslint-disable-next-line testing-library/no-render-in-setup
        ({ result } = renderHook(() => useCookies(), { wrapper }));
    });

    test('if we use HandleAdd should add a new item to the array of cookies', async () => {
        await waitFor(() => {
            result.current.handleAdd(mock2);
            expect(result.current.cookies.at(-1)).toEqual(mock2);
        });
    });
    test('if we use HandleUpdate should change an item from the array of cookies', async () => {
        await waitFor(() => {
            result.current.handleUpdate(mock1);
            expect(result.current.cookies).toContain(mock2);
        });
    });
    test('if we use HandleDelete should delete an item from the array of cookies', async () => {
        await waitFor(() => {
            result.current.handleDelete(mock2);
            expect(result.current.cookies).toEqual([]);
        });
    });
});
