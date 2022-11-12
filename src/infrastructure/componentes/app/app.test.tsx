import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './app';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';

test('renders link', () => {
    render(
        <Provider store={appStore}>
            <App />
        </Provider>
    );
    const linkElement = screen.getByText(/probando/i);
    expect(linkElement).toBeInTheDocument();
});
