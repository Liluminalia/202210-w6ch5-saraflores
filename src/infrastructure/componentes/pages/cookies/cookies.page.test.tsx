import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../store/store';
import CookiesPage from './cookies.page';

describe('Given Cookies page', () => {
    describe('When we render the page', () => {
        test('Then it should display "Cookies"', () => {
            render(
                <>
                    <Router>
                        <Provider store={appStore}>
                            <CookiesPage />
                        </Provider>
                    </Router>
                </>
            );
            const element = screen.getByText(/Cookies/i);
            expect(element).toBeInTheDocument();
        });
    });
});
