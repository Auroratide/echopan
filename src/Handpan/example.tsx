import * as React from 'react'
import { render } from '@testing-library/react'
import { Handpan } from '.'

describe('Handpan', () => {
  it('renders', () => {
    expect(() => render(<Handpan />)).not.toThrow()
  })
})