import { renderHook, waitFor } from '@testing-library/react';
import { MilkRepository } from '../services/milk.repository';
import { Milk, ProtoMilk } from '../types/milk';
import { useMilks } from './useMilks';

jest.mock('../services/milk.repository');

const milk1 = {
    id: 2,
    brand: 'string',
    kind: '',
    price: 5,
    description: 'string',
    selected: true,
    img: 'string',
};
const protoMilk = {
    price: 7,
};
const newMilk = {
    id: 5,
    brand: 'tururu',
    kind: 'pipipi',
    price: 5,
    description: 'string',
    selected: false,
    img: 'string',
};

describe('Given the hook', () => {
    let result: {
        current: {
            milks: Array<Milk>;
            handleAdd: (newMilk: ProtoMilk) => void;
            handleDelete: (milk: Milk) => void;
            handleUpdate: (updateMilk: Partial<Milk>) => void;
        };
    };

    beforeEach(() => {
        MilkRepository.prototype.getAllMilks = jest
            .fn()
            .mockResolvedValue([milk1]);
        MilkRepository.prototype.createMilk = jest
            .fn()
            .mockResolvedValue(newMilk);
        MilkRepository.prototype.updateMilk = jest
            .fn()
            .mockResolvedValue(protoMilk);
        MilkRepository.prototype.deleteMilk = jest
            .fn()
            .mockResolvedValue(milk1);
        // eslint-disable-next-line testing-library/no-render-in-setup
        ({ result } = renderHook(() => useMilks()));
    });
    describe('when we call it', () => {
        test('the milks should be an Array of milks', async () => {
            await waitFor(() => {
                expect(result.current.milks).toEqual([milk1]);
            });
        });

        test('the handleAdd function should add a new item at the end of the array of milks', async () => {
            await waitFor(() => {
                result.current.handleAdd(newMilk);
                expect(result.current.milks.at(-1)).toEqual(newMilk);
            });
        });
        //test comentado de momento
        // test('the handleUpdate function should update an item at the array of milks', async () => {
        //     await waitFor(() => {
        //         result.current.handleUpdate(protoMilk);
        //         expect(result.current.milks.filter()).toEqual(7);
        //     });
        // });
    });
});
