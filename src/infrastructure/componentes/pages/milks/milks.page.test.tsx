import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../store/store';
import MilksPage from './milks.page';

describe('Given Milks page', () => {
    describe('When we render the page', () => {
        test('Then it should display "Milks"', () => {
            render(
                <>
                    <Router>
                        <Provider store={appStore}>
                            <MilksPage />
                        </Provider>
                    </Router>
                </>
            );
            const element = screen.getByText(/Milks/i);
            expect(element).toBeInTheDocument();
        });
    });
});
