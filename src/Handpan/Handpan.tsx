import * as React from 'react'
import * as Styles from './styles'
import { Note } from './Note'

export const Handpan = () => <Styles.Pan>
  <Note angle={0} distance={0.72} />
  <Note angle={0.125} distance={0.72} />
  <Note angle={0.25} distance={0.72} />
  <Note angle={0.375} distance={0.72} />
  <Note angle={0.5} distance={0.72} />
  <Note angle={0.625} distance={0.72} />
  <Note angle={0.75} distance={0.72} />
  <Note angle={0.875} distance={0.72} />
  <Note angle={0.5} distance={0} />
</Styles.Pan>
