import { Note } from './Note'

export class KnownAudioNote implements Note {
  private source: string
  private audio: HTMLAudioElement
  constructor(source: string) {
    this.source = source
    this.audio = new Audio(`/audio/${source}.mp3`)
  }

  play = () => {
    this.audio.play()
  }

  name = () => this.source
}