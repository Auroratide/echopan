import { Note } from './Note'

export class MockNote implements Note {
  private _name: string
  private _timesPlayed = 0
  constructor(name: string) {
    this._name = name
  }

  play = () => {
    ++this._timesPlayed
  }

  name = () => this._name

  get timesPlayed(): number {
    return this._timesPlayed
  }
}