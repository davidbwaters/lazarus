import { render, screen } from '@testing-library/react';
import Counter from './Counter';

test('renders API counter', () => {
  render(<Counter />);
  const header = screen.getByText(/API Requests/i);
  expect(header).toBeInTheDocument();
});
