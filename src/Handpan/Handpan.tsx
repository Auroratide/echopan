import * as React from 'react'
import * as Styles from './styles'
import { Tongue } from './Tongue'
import { Notes } from './Note'

export const Handpan = () => <Styles.Pan>
  <Tongue angle={0} distance={0.72} note={Notes.Fs4} />
  <Tongue angle={0.125} distance={0.72} note={Notes.E4} />
  <Tongue angle={0.25} distance={0.72} note={Notes.Cs4} />
  <Tongue angle={0.375} distance={0.72} note={Notes.A3} />
  <Tongue angle={0.5} distance={0.72} note={Notes.Fs3} />
  <Tongue angle={0.625} distance={0.72} note={Notes.G3} />
  <Tongue angle={0.75} distance={0.72} note={Notes.B3} />
  <Tongue angle={0.875} distance={0.72} note={Notes.D4} />
  <Tongue angle={0.5} distance={0} note={Notes.B2} />
</Styles.Pan>
