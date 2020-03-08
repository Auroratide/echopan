import * as React from 'react'
import * as Styles from './styles'
import { Note } from '../Note'

interface Props {
  angle: number    // [0, 1] clockwise
  distance: number // [0, 1]
  note: Note
}

export const Tongue = ({ angle, distance, note }: Props) => <Styles.Shape style={{
  left: `${0.5 - distance / 2 * Math.cos(angle * Math.PI * 2 + Math.PI / 2)}em`,
  top: `${0.5 - distance / 2 * Math.sin(angle * Math.PI * 2 + Math.PI / 2)}em`,
  transform: `translate(-50%, -50%) rotate(${360 * angle}deg)`
}} onClick={note.play} title={note.name()} />