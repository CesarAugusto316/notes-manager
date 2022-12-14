import React from 'react';
import { App } from '../src/App';
import { render, screen, } from '@testing-library/react';


describe('<App/>', () => {

  it('should have cesar as heading', () => {
    render(<App />);

    const heading = screen.getByRole('heading', { name: /césar/i });
    screen.debug();

    expect(heading).toBeInTheDocument();
  });
});
