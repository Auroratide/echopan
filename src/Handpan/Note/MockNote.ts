import { Note } from './Note'

export class MockNote implements Note {
  private _name: string
  private _timesPlayed = 0
  constructor(name: string) {
    this._name = name
  }

  play = (): void => {
    ++this._timesPlayed
  }

  name = (): string => this._name

  get timesPlayed(): number {
    return this._timesPlayed
  }
}