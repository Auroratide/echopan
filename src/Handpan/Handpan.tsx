import * as React from 'react'
import * as Styles from './styles'
import { Tongue } from './Tongue'
import { Notes } from './Note'
import { Keys, Key } from '../Keys'

interface Props {
  keys: Keys
}

export const Handpan = ({ keys }: Props) => <Styles.Pan>
  <Tongue angle={0} distance={0.56} rotation={0.25} scale={0.6} note={Notes.A4} shortcut={Key.zero} keys={keys} />
  <Tongue angle={0} distance={0.82} rotation={0.75} scale={0.667} note={Notes.Fs4} shortcut={Key.nine} keys={keys} />
  <Tongue angle={0.125} distance={0.72} note={Notes.E4} shortcut={Key.eight} keys={keys} />
  <Tongue angle={0.25} distance={0.72} note={Notes.Cs4} shortcut={Key.seven} keys={keys} />
  <Tongue angle={0.375} distance={0.72} note={Notes.A3} shortcut={Key.six} keys={keys} />
  <Tongue angle={0.5} distance={0.72} note={Notes.Fs3} shortcut={Key.four} keys={keys} />
  <Tongue angle={0.625} distance={0.72} note={Notes.G3} shortcut={Key.three} keys={keys} />
  <Tongue angle={0.75} distance={0.72} note={Notes.B3} shortcut={Key.two} keys={keys} />
  <Tongue angle={0.875} distance={0.72} note={Notes.D4} shortcut={Key.one} keys={keys} />
  <Tongue angle={0.5} distance={0} note={Notes.B2} shortcut={Key.five} keys={keys} />
</Styles.Pan>
