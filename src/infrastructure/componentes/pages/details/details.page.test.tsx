import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import DetailsPage from './details.page';

describe('Given Details page', () => {
    describe('When we render the page', () => {
        test('Then it should display "PVP"', () => {
            render(
                <>
                    <Router>
                        <DetailsPage />
                    </Router>
                </>
            );
            const element = screen.getByText(/PVP/i);
            expect(element).toBeInTheDocument();
        });
    });
});
