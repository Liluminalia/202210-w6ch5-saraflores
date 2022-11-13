import { renderHook, waitFor } from '@testing-library/react';
import { useMilks } from './usemilks';
import { Milk, ProtoMilk } from '../types/milk';
import { MilkRepository } from '../services/milk.repository';
import { Provider } from 'react-redux';
import { appStore } from '../../../infrastructure/store/store';

jest.mock('../services/milk.repository');

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
            milks: Array<Milk>;
            handleAdd: (newMilk: ProtoMilk) => void;
            handleDelete: (milk: Milk) => void;
            handleUpdate: (updateMilk: Partial<Milk>) => void;
        };
    };

    beforeEach(() => {
        MilkRepository.prototype.getAllMilks = jest
            .fn()
            .mockResolvedValue([mock2]);
        MilkRepository.prototype.createMilk = jest
            .fn()
            .mockResolvedValue(mock2);
        MilkRepository.prototype.deleteMilk = jest
            .fn()
            .mockResolvedValue(mock2);
        MilkRepository.prototype.updateMilk = jest
            .fn()
            .mockResolvedValue(mock1);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );

        // eslint-disable-next-line testing-library/no-render-in-setup
        ({ result } = renderHook(() => useMilks(), { wrapper }));
    });

    test('if we use HandleAdd should add a new item to the array of milks', async () => {
        await waitFor(() => {
            result.current.handleAdd(mock2);
            expect(result.current.milks.at(-1)).toEqual(mock2);
        });
    });
    test('if we use HandleUpdate should change an item from the array of milks', async () => {
        await waitFor(() => {
            result.current.handleUpdate(mock1);
            expect(result.current.milks).toContain(mock2);
        });
    });
    test('if we use HandleDelete should delete an item from the array of milks', async () => {
        await waitFor(() => {
            result.current.handleDelete(mock2);
            expect(result.current.milks).toEqual([]);
        });
    });
});
