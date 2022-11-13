import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import SalesPage from './sales.page';

describe('Given Sales page', () => {
    describe('When we render the page', () => {
        test('Then it should display "sales page"', () => {
            render(
                <>
                    <Router>
                        <SalesPage />
                    </Router>
                </>
            );
            const element = screen.getByText(/sales page/i);
            expect(element).toBeInTheDocument();
        });
    });
});
