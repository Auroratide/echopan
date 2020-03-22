import styled from 'styled-components'

export const Container = styled.div`
  border-left: 0.25em solid #000;
  font-size: 2em;
  width: 10em;
  position: relative;
  padding: 0;
`

export const Line = styled.div`
  border-top: 0.125em solid #000;
  width: 100%;
  margin-bottom: 0.5em;

  :last-child {
    margin-bottom: 0;
  }
`

export const Notes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

export const PlacedNote = styled.div`
  position: absolute;
  background: red;
  width: 0.75em;
  height: 0.75em;
  border-radius: 0.375em;
`