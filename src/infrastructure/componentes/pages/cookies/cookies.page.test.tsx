import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import CookiesPage from './cookies.page';

describe('Given Cookies page', () => {
    describe('When we render the page', () => {
        test('Then it should display "Cookies"', () => {
            render(
                <>
                    <Router>
                        <CookiesPage />
                    </Router>
                </>
            );
            const element = screen.getByText(/Cookies/i);
            expect(element).toBeInTheDocument();
        });
    });
});
