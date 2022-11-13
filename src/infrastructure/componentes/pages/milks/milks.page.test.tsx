import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import MilksPage from './milks.page';

describe('Given Milks page', () => {
    describe('When we render the page', () => {
        test('Then it should display "Milks"', () => {
            render(
                <>
                    <Router>
                        <MilksPage />
                    </Router>
                </>
            );
            const element = screen.getByText(/Milks/i);
            expect(element).toBeInTheDocument();
        });
    });
});
