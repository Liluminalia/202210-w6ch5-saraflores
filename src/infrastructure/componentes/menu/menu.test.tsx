import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Menu } from './menu';

describe('Given Menu component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Sales"', () => {
            render(
                <>
                    <Router>
                        <Menu />
                    </Router>
                </>
            );
            const element = screen.getByText(/Sales/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should display "Milks"', () => {
            render(
                <>
                    <Router>
                        <Menu />
                    </Router>
                </>
            );
            const element = screen.getByText(/Milks/i);
            expect(element).toBeInTheDocument();
        });
    });
});
