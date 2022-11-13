import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Given Footer component', () => {
    describe('When we render the component', () => {
        test('Then it should display "CODERS"', () => {
            render(<Footer />);
            const element = screen.getByText(/CODERS/i);
            expect(element).toBeInTheDocument();
        });
    });
});
