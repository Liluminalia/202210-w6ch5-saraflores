import { CookieModel } from '../types/cookie';
import { CookieRepository } from './cookie.repository';

describe('Given CookieRepository Service', () => {
    describe('When we instantiate it', () => {
        let service: CookieRepository;
        beforeEach(() => {
            service = new CookieRepository();
        });
        test('Then if i use service.error(), it should return an error', () => {
            const error = service.createError(
                new Response('Error', {
                    status: 400,
                    statusText: 'error',
                })
            );

            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(error).toEqual(result);
        });
        test(`Then if I use service.getAllCookies() 
            it should return a Promise of an Array of cookie`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getAllCookies();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test(`Then when something is not ok, if I use service.getAllCookies() it should throw an error`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            const expectedResult = await service.getAllCookies();
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });
        test(`Then if I use service.createMilk()
                it should return a Promise of the created milk`, async () => {
            const mockCookie = new CookieModel('', '', 0, '', '');
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockCookie),
            });
            const result = await service.createCookie(mockCookie);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockCookie);
        });
        test(`Then when something is not ok, if I use service.createCookie() it should throw an error`, async () => {
            const mockCookie = new CookieModel('', '', 0, '', '');

            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            const expectedResult = await service.createCookie(mockCookie);
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });

        test('Then if I use service.deleteCookie() it should return a Promise of an Array of cookie', async () => {
            const cookieMock = {
                id: 2,
                brand: 'string',
                kind: '',
                price: 5,
                description: 'string',
                selected: true,
                img: 'string',
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(cookieMock),
            });
            const result = await service.deleteCookie(cookieMock.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBeUndefined();
        });
        test(`Then when something is not ok, if I use service.deleteCookie() it should throw an error`, async () => {
            const cookieMock = {
                id: 2,
                brand: 'string',
                kind: '',
                price: 5,
                description: 'string',
                selected: true,
                img: 'string',
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            const expectedResult = await service.deleteCookie(cookieMock.id);
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });

        test('Then if I use service.updateCookie() it should return a Promise of an Array of cookie', async () => {
            const cookieMock = new CookieModel('', '', 0, '', '');
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([cookieMock]),
            });
            const result = await service.updateCookie({ price: 5 });
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([cookieMock]);
        });
        test(`Then when something is not ok, if I use service.updateCookie() it should throw an error`, async () => {
            const partialMock = {
                price: 4,
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            const expectedResult = await service.updateCookie(partialMock);
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });
    });
});
