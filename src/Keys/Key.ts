export class Key {
  private value: string
  constructor(value: string) {
    this.value = value
  }

  matches = (event: KeyboardEvent): boolean => event.key === this.value

  static a = new Key('a')
  static b = new Key('b')
}