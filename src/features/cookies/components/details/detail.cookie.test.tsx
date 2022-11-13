import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { CookieDetails } from './detail.cookie';

describe('Given details component', () => {
    describe('When we render the component', () => {
        test('Then it should display "PVP"', () => {
            render(
                <>
                    <Router>
                        <CookieDetails />
                    </Router>
                </>
            );
            const element = screen.getByText(/PVP/i);
            expect(element).toBeInTheDocument();
        });
    });
});
