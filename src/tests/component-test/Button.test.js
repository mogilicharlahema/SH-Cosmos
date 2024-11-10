import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../components/Button';

test('renders button with label', () => {
    render(<Button label="Click me" />);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
});

test('handles click event', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    const buttonElement = screen.getByText(/Click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
});
