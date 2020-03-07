import * as React from 'react'
import { render } from '@testing-library/react'
import { App } from '.'

describe('App', () => {
  it('renders', () => {
    expect(() => render(<App />)).not.toThrow()
  })
})