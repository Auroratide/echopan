import * as React from 'react'
import * as Styles from './styles'

const onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
  const r = (e.target as HTMLElement).getBoundingClientRect()
  console.log(e.clientX - r.left)
  console.log(e.clientY - r.top)
}

export const Staff = () => <Styles.Container onClick={onClick}>
  <Styles.Notes>
    <Styles.PlacedNote style={{ top: '-0.33em', left: '2em'}} />
  </Styles.Notes>
  <Styles.Line />
  <Styles.Line />
  <Styles.Line />
  <Styles.Line />
  <Styles.Line />
  <Styles.Line />
  <Styles.Line />
  <Styles.Line />
  <Styles.Line />
  <Styles.Line />
</Styles.Container>