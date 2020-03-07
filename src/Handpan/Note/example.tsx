import * as React from 'react'
import { render } from '@testing-library/react'
import { Note } from '.'

describe('Note', () => {
  it('renders', () => {
    expect(() => render(<Note />)).not.toThrow()
  })
})