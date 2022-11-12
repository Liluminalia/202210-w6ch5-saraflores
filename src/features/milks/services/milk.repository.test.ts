import { MilkModel } from '../types/milk';
import { MilkRepository } from './milk.repository';

describe('Given MilkRepository Service', () => {
    describe('When we instantiate it', () => {
        let service: MilkRepository;
        beforeEach(() => {
            service = new MilkRepository();
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
        test(`Then if I use service.getAllMilks() 
            it should return a Promise of an Array of Milk`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getAllMilks();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test(`Then when something is not ok, if I use service.getAllMilks() it should throw an error`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            const expectedResult = await service.getAllMilks();
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });
        test(`Then if I use service.createMilk()
                it should return a Promise of the created milk`, async () => {
            const mockMilk = new MilkModel('', '', 0, '', '');
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockMilk),
            });
            const result = await service.createMilk(mockMilk);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockMilk);
        });
        test(`Then when something is not ok, if I use service.createMilk() it should throw an error`, async () => {
            const mockMilk = new MilkModel('', '', 0, '', '');

            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            const expectedResult = await service.createMilk(mockMilk);
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });

        test('Then if I use service.deleteMilk() it should return a Promise of an Array of milk', async () => {
            const milkMock = {
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
                json: jest.fn().mockResolvedValue(milkMock),
            });
            const result = await service.deleteMilk(milkMock.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBeUndefined();
        });
        test(`Then when something is not ok, if I use service.deleteMilk() it should throw an error`, async () => {
            const milkMock = {
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
            const expectedResult = await service.deleteMilk(milkMock.id);
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });

        test('Then if I use service.updateMilk() it should return a Promise of an Array of milk', async () => {
            const mockMilk = new MilkModel('', '', 0, '', '');
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([mockMilk]),
            });
            const result = await service.updateMilk({ price: 5 });
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([mockMilk]);
        });
        test(`Then when something is not ok, if I use service.updateMilk() it should throw an error`, async () => {
            const partialMock = {
                price: 4,
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            const expectedResult = await service.updateMilk(partialMock);
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });
    });
});
