import { cookieReducer } from './reducer.cookies';
import { actionTypes } from './action.types';
import { Cookie } from '../types/cookie';

describe('Given the function cookieReducer', () => {
    const cookieMock: Cookie = {
        id: 1,
        brand: 'cuetara',
        kind: 'cuetaraisima',
        price: 34,
        description: 'cuetareando',
        selected: true,
        img: 'string de fotos de galletas',
    };

    let action: { type: string; payload: unknown };
    let state: Array<Cookie>;

    describe('When the action is load', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.load,
                payload: [cookieMock],
            };
            state = [];
        });
        test('Then the returned state should be the action payload', () => {
            const result = cookieReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action is add', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.add,
                payload: cookieMock,
            };
            state = [];
        });
        test('Then the returned state should include the action payload', () => {
            const result = cookieReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe('When the action is update', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...cookieMock, title: 'Update milk' },
            };
            state = [cookieMock];
        });
        test('Then the returned state should include the action payload', () => {
            const result = cookieReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe('When the action is update and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...cookieMock, id: '2', title: 'Update cookie' },
            };
            state = [cookieMock];
        });
        test('Then the returned state should be the original state', () => {
            const result = cookieReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is delete', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.delete,
                payload: cookieMock,
            };
            state = [cookieMock];
        });
        test('Then the returned state should not include the action payload', () => {
            const result = cookieReducer(state, action);
            expect(result).toEqual([]);
        });
    });

    describe('When the action is delete and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.delete,
                payload: { ...cookieMock, id: '2' },
            };
            state = [cookieMock];
        });
        test('Then the returned state should should be the original state', () => {
            const result = cookieReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is any other', () => {
        beforeEach(() => {
            action = {
                type: '',
                payload: null,
            };
            state = [cookieMock];
        });
        test('Then the returned state should be the original state', () => {
            const result = cookieReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
