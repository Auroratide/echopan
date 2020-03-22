import * as React from 'react'
import { render } from '@testing-library/react'
import { Staff } from '.'

describe('Staff', () => {
  it('renders', () => {
    expect(() => render(<Staff />)).not.toThrow()
  })
})