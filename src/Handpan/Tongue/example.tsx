import * as React from 'react'
import { render } from '@testing-library/react'
import { Tongue } from '.'

describe('Tongue', () => {
  it('renders', () => {
    expect(() => render(<Tongue angle={0} distance={0} />)).not.toThrow()
  })
})