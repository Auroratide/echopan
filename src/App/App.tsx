import * as React from 'react'
import { Handpan } from '../Handpan'
import { Staff } from '../Staff'
import * as Styles from './styles'
import { Keys } from '../Keys'

const keys = new Keys(document)

export const App = () => <main>
  <Styles.Container>
    <Styles.HandpanContainer>
      <Handpan keys={keys} />
    </Styles.HandpanContainer>
    <Staff />
  </Styles.Container>
</main>
