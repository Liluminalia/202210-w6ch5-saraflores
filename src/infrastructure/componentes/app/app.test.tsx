import { render, screen } from '@testing-library/react';
import { App } from './app';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';
import { MemoryRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Given App component', () => {
    describe('When we render the component', () => {
        test('Then it should display the title', () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <App />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/Sara Flores/i);
            expect(element).toBeInTheDocument();
        });
    });
});
