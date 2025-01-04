import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the homepage link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Visit Penang/i);
  expect(linkElement).toBeInTheDocument();
});