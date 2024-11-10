import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../components/Card';


// Mock for the click handler
const mockClickHandler = jest.fn();
const mockButton = <button onClick={mockClickHandler}>GET</button>;


test('render card with button', () => {
  render(<Card button={mockButton} />);
  const cardElement = screen.getByText(/Add-ons/i);
  expect(cardElement).toBeInTheDocument();
});


test('displays the correct validity text', () => {
  render(<Card button={mockButton} />);
  expect(screen.getByText(/Validity:/)).toBeInTheDocument();
  expect(screen.getByText(/Up to your current plan/)).toBeInTheDocument();
});

test('checks for price text in the card', async () => {
  render(<Card button={mockButton} />);

  const Rs1000 = await screen.findByText(/Rs. 1000/i);
  expect(Rs1000).toBeInTheDocument();

  const l5000 = await screen.findByText(/5000 \/ Life time/i);
  expect(l5000).toBeInTheDocument();

  const Rs2000 = await screen.findByText(/Rs. 2000/i);
  expect(Rs2000).toBeInTheDocument();

  const lftenth = await screen.findByText(/10000 \/ Life time/i);
  expect(lftenth).toBeInTheDocument();

  const Rs3500 = await screen.findByText(/Rs. 3500/i);
  expect(Rs3500).toBeInTheDocument();
});
