import { Key } from './Key'

export class Keys {
  private document: Document
  constructor(document: Document) {
    this.document = document
  }

  on = (key: Key, cb: () => void): void => {
    this.document.addEventListener('keydown', event => {
      if(key.matches(event))
        cb()
    })
  }
}