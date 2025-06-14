import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './app';

describe('App', () => {
  it('renders welcome message', () => {
    render(<App />);
    expect(screen.getByText(/Welcome to Our Site/i)).toBeInTheDocument();
  });
});
