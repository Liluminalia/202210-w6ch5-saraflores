import { MilkModel } from './milk';

describe('Given the class MilkModel', () => {
    describe('When we instantiate it', () => {
        const milk = new MilkModel('', '', 0, '', '');
        test('Then we should have an object of the class', () => {
            expect(milk).toBeInstanceOf(MilkModel);
        });
    });
});
