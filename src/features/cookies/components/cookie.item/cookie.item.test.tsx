import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { useCookies } from '../../hook/usecookies';
import { appStore } from '../../../../infrastructure/store/store';
import { Cookie } from '../../types/cookie';
import { CookieItem } from './cookie.item';

jest.mock('../../hook/usecookies');

describe('Given CookieItem component', () => {
    describe('When we render the component', () => {
        test('Then it should display the brand of a Cookie', () => {
            const mockCookie: Cookie = {
                id: 2,
                brand: 'froilan',
                kind: 'string',
                price: 3,
                description: 'string',
                selected: true,
                img: 'string',
            };
            (useCookies as jest.Mock).mockReturnValue({
                cookies: [mockCookie],
            });

            render(
                <Router>
                    <Provider store={appStore}>
                        <CookieItem item={mockCookie} />
                    </Provider>
                </Router>
            );
            const element = screen.getByAltText('hola froilan string');
            expect(element).toBeInTheDocument();
        });
    });
});
