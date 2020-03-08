import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Tongue } from '.'
import { MockNote } from '../Note'

describe('Tongue', () => {
  it('plays sound when clicked', () => {
    const note = new MockNote('C4')
    const wrapper = render(<Tongue angle={0} distance={0} note={note} />)

    fireEvent.click(wrapper.getByTitle('C4'))

    expect(note.timesPlayed).toEqual(1)
  })
})