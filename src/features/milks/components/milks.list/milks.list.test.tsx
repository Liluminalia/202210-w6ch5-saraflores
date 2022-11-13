import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../../infrastructure/store/store';
import { Milk } from '../../types/milk';
import { MilksList } from './milks.list';

describe('Given MilksList component', () => {
    describe('When we render the component', () => {
        test('Then it should display Milks List', () => {
            const mockList: Milk[] = [
                {
                    id: 2,
                    brand: 'froilan',
                    kind: 'string',
                    price: 3,
                    description: 'string',
                    selected: true,
                    img: 'string',
                },
            ];
            render(
                <Router>
                    <Provider store={appStore}>
                        <MilksList item={mockList} />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/Milks List/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should display the brand of any in the list', () => {
            const mockList: Milk[] = [
                {
                    id: 2,
                    brand: 'froilan',
                    kind: 'string',
                    price: 3,
                    description: 'string',
                    selected: true,
                    img: 'string',
                },
            ];

            render(
                <Router>
                    <Provider store={appStore}>
                        <MilksList item={mockList} />
                    </Provider>
                </Router>
            );
            const element = screen.getByAltText(/froilan/i);
            expect(element).toBeInTheDocument();
        });
    });
});
