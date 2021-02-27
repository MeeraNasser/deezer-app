import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders nav bar and welcome page ..', () => {
  render(<App />);
  const helloText = screen.getByText(/Hello/);
  expect(helloText).toBeInTheDocument();
});
