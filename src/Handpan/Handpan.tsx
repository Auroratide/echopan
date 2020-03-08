import * as React from 'react'
import * as Styles from './styles'
import { Tongue } from './Tongue'

export const Handpan = () => <Styles.Pan>
  <Tongue angle={0} distance={0.72} />
  <Tongue angle={0.125} distance={0.72} />
  <Tongue angle={0.25} distance={0.72} />
  <Tongue angle={0.375} distance={0.72} />
  <Tongue angle={0.5} distance={0.72} />
  <Tongue angle={0.625} distance={0.72} />
  <Tongue angle={0.75} distance={0.72} />
  <Tongue angle={0.875} distance={0.72} />
  <Tongue angle={0.5} distance={0} />
</Styles.Pan>
