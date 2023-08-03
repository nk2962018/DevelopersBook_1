import { render, screen } from '@testing-library/react';
import DevelopersBook from './DevelopersBook';

describe('Developer Book works fine when', () => {

  it('it renders title with proper text' , () => {
  render(<DevelopersBook/>);
  const title = screen.getByTestId('title')
  expect(title.textContent).toBe('Developers Book')

  });
  
});
