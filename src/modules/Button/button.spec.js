import '@testing-library/jest-dom';

import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import Button from './button';

describe('Button', () => {
  afterEach(() => cleanup);

  it('should render button exist', () => {
    const { getByTestId } = render(<Button />);
    expect(getByTestId('button')).toBeDefined();
  })

  it('should do something on click', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<Button onClick={handleClick}/>);
    fireEvent.click(getByTestId('button'));
    expect(handleClick).toHaveBeenCalled();
  })

  it('should have the right label', () => {
    const { getByTestId } = render(<Button label="testing label"/>);
    expect(getByTestId('button')).toHaveTextContent("testing label");
  })

  it('should have the right attribute', () => {
    const { getByTestId } = render(<Button name="testing name"/>);
    fireEvent.click(getByTestId('button'));
    expect(getByTestId('button')).hasOwnProperty("name");
  })
})
