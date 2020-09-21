import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the App component', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Our app's code goes here./i);
  expect(linkElement).toBeInTheDocument();
});
