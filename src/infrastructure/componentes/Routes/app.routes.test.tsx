import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppRoutes } from './app.routes';

describe('Given AppRoutes component', () => {
    describe('When we render the component And the route is home', () => {
        render(
            <>
                <Router initialEntries={['/', '/home']} initialIndex={0}>
                    <AppRoutes />
                </Router>
            </>
        );
        test('Then it should display the HomePage', () => {
            const element = screen.getByText(/Home/i);
            expect(element).toBeInTheDocument();
        });
    });
});
