import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../../infrastructure/store/store';
import { MilkDetails } from './detail.milk';

describe('Given details component', () => {
    describe('When we render the component', () => {
        test('Then it should display "PVP"', () => {
            render(
                <>
                    <Router>
                        <Provider store={appStore}>
                            <MilkDetails />
                        </Provider>
                    </Router>
                </>
            );
            const element = screen.getByText(/PVP/i);
            expect(element).toBeInTheDocument();
        });
    });
});
