import { Keys, Key } from '.'

describe('Keys', () => {
  it('registers keys', () => {
    let aTriggered = false
    let bTriggered = false

    const keys = new Keys(document)
    keys.on(Key.a, () => aTriggered = true)
    keys.on(Key.b, () => bTriggered = true)

    document.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'a',
      code: 'KeyA'
    }))

    expect(aTriggered).toBe(true)
    expect(bTriggered).toBe(false)
  })
})