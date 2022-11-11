import { milkReducer } from './reducer.milks';
import { actionTypes } from './action.types';
import { Milk } from '../types/milk';

describe('Given the function milkReducer', () => {
    const milkMock: Milk = {
        id: 1,
        brand: 'puleva',
        kind: 'pulevisima',
        price: 34,
        description: 'puleveando',
        selected: true,
        img: 'string',
    };

    let action: { type: string; payload: unknown };
    let state: Array<Milk>;

    describe('When the action is load', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.load,
                payload: [milkMock],
            };
            state = [];
        });
        test('Then the returned state should be the action payload', () => {
            const result = milkReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action is add', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.add,
                payload: milkMock,
            };
            state = [];
        });
        test('Then the returned state should include the action payload', () => {
            const result = milkReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe('When the action is update', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...milkMock, title: 'Update milk' },
            };
            state = [milkMock];
        });
        test('Then the returned state should include the action payload', () => {
            const result = milkReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe('When the action is update and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...milkMock, id: '2', title: 'Update milk' },
            };
            state = [milkMock];
        });
        test('Then the returned state should be the original state', () => {
            const result = milkReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is delete', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.delete,
                payload: milkMock,
            };
            state = [milkMock];
        });
        test('Then the returned state should not include the action payload', () => {
            const result = milkReducer(state, action);
            expect(result).toEqual([]);
        });
    });

    describe('When the action is delete and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.delete,
                payload: { ...milkMock, id: '2' },
            };
            state = [milkMock];
        });
        test('Then the returned state should should be the original state', () => {
            const result = milkReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is any other', () => {
        beforeEach(() => {
            action = {
                type: '',
                payload: null,
            };
            state = [milkMock];
        });
        test('Then the returned state should be the original state', () => {
            const result = milkReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
