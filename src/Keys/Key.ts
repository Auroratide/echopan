export class Key {
  private value: string
  constructor(value: string) {
    this.value = value
  }

  matches = (event: KeyboardEvent): boolean => event.key === this.value

  static a = new Key('a')
  static b = new Key('b')
  static c = new Key('c')
  static d = new Key('d')
  static e = new Key('e')
  static f = new Key('f')
  static g = new Key('g')
  static h = new Key('h')
  static i = new Key('i')
  static j = new Key('j')
  static k = new Key('k')
  static l = new Key('l')
  static m = new Key('m')
  static n = new Key('n')
  static o = new Key('o')
  static p = new Key('p')
  static q = new Key('q')
  static r = new Key('r')
  static s = new Key('s')
  static t = new Key('t')
  static u = new Key('u')
  static v = new Key('v')
  static w = new Key('w')
  static x = new Key('x')
  static y = new Key('y')
  static z = new Key('z')

  static one = new Key('1')
  static two = new Key('2')
  static three = new Key('3')
  static four = new Key('4')
  static five = new Key('5')
  static six = new Key('6')
  static seven = new Key('7')
  static eight = new Key('8')
  static nine = new Key('9')
  static zero = new Key('0')
}