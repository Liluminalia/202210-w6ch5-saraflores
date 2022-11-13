import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import HomePage from './home.page';

describe('Given Home page', () => {
    describe('When we render the page', () => {
        test('Then it should display "Home page"', () => {
            render(
                <>
                    <Router>
                        <HomePage />
                    </Router>
                </>
            );
            const element = screen.getByText(/Home page/i);
            expect(element).toBeInTheDocument();
        });
    });
});
