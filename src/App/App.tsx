import * as React from 'react'
import { Handpan } from '../Handpan'
import * as Styles from './styles'
import { Keys } from '../Keys'

const keys = new Keys(document)

export const App = () => <main>
  <Styles.Container>
    <Handpan keys={keys} />
  </Styles.Container>
</main>
