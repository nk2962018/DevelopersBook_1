import { render, screen } from '@testing-library/react';
import DevelopersBook from '../componenets/DevelopersBook';

describe('Developer Book works fine when', () => {
  beforeEach(() => {
    render(<DevelopersBook/>)
  });

  it('it renders title with proper text' , () => {
  const title = screen.getByTestId('title')
  expect(title.textContent).toBe('Developers Book')

  });

  it('it displays all the 5 books' , () => {
    const books = screen.getAllByTestId('book')
    expect(books).toHaveLength(5)
  });
  
});
