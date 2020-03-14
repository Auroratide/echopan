import * as React from 'react'
import * as Styles from './styles'
import { Note } from '../Note'
import { Key, Keys } from '../../Keys'

interface Props {
  angle: number    // [0, 1] clockwise
  distance: number // [0, 1]
  rotation: number // [0, 1]
  scale: number
  note: Note
  shortcut?: Key
  keys?: Keys
}

export const Tongue = ({ angle, distance, rotation, scale, note, shortcut, keys }: Props) => {
  if(shortcut && keys) {
    React.useEffect(() => {
      keys.on(shortcut, note.play)
    }, [])
  }

  return <Styles.Shape style={{
    left: `${0.5 - distance / 2 * Math.cos(angle * Math.PI * 2 + Math.PI / 2)}em`,
    top: `${0.5 - distance / 2 * Math.sin(angle * Math.PI * 2 + Math.PI / 2)}em`,
    transform: `translate(-50%, -50%) rotate(${360 * (angle + rotation)}deg) scale(${scale})`
  }} onClick={note.play} title={note.name()} />
}

Tongue.defaultProps = {
  rotation: 0,
  scale: 1
} as Partial<Props>