import { MockNote } from '.'

describe('MockNote', () => {
  it('records the number of plays', () => {
    const note = new MockNote('C4')
    expect(note.timesPlayed).toEqual(0)

    note.play()
    expect(note.timesPlayed).toEqual(1)

    note.play()
    expect(note.timesPlayed).toEqual(2)
  })

  it('emits its name', () => {
    const note = new MockNote('C4')
    expect(note.name()).toEqual('C4')
  })
})