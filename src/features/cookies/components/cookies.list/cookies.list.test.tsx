import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../../infrastructure/store/store';
import { Cookie } from '../../types/cookie';
import { CookiesList } from './cookies.list';

describe('Given CookiesList component', () => {
    describe('When we render the component', () => {
        test('Then it should display Cookies List', () => {
            const mockList: Cookie[] = [
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
                        <CookiesList item={mockList} />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/Cookies List/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should display the brand of any in the list', () => {
            const mockList: Cookie[] = [
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
                        <CookiesList item={mockList} />
                    </Provider>
                </Router>
            );
            const element = screen.getByAltText(/froilan/i);
            expect(element).toBeInTheDocument();
        });
    });
});
