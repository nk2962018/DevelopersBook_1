import { render, screen } from '@testing-library/react';
import DevelopersBook from '../componenets/DevelopersBook';

describe('Developer Book works fine when', () => {

  it('it renders title with proper text' , () => {
  render(<DevelopersBook/>);
  const title = screen.getByTestId('title')
  expect(title.textContent).toBe('Developers Book')

  });

  it('it displays all the 5 books' , () => {
    render(<DevelopersBook/>);
    const books = screen.getAllByTestId('book')
    expect(books).toHaveLength(5)
  });
  
});
