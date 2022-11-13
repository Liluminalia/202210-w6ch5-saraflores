import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { useMilks } from '../../hook/usemilks';
import { appStore } from '../../../../infrastructure/store/store';
import { Milk } from '../../types/milk';
import { MilkItem } from './milk.item';

jest.mock('../../hook/usemilks');

describe('Given MilkItem component', () => {
    describe('When we render the component', () => {
        test('Then it should display the brand of a milk', () => {
            const mockMilk: Milk = {
                id: 2,
                brand: 'froilan',
                kind: 'string',
                price: 3,
                description: 'string',
                selected: true,
                img: 'string',
            };
            (useMilks as jest.Mock).mockReturnValue({
                milks: [mockMilk],
            });

            render(
                <Router>
                    <Provider store={appStore}>
                        <MilkItem item={mockMilk} />
                    </Provider>
                </Router>
            );
            const element = screen.getByAltText('hola froilan string');
            expect(element).toBeInTheDocument();
        });
    });
});
