import styled from 'styled-components'
import { FullWidthButtons, devices } from '@glif/react-components'

export const ButtonsHiddenOnMobile = styled(FullWidthButtons)`
  display: none;
  @media (min-width: ${devices.tablet}) {
    display: flex;
  }
`

export const ButtonBadgeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const TitleWithSubtitle = styled.div`
  margin-bottom: 1.75em;
  > h2 {
    margin-bottom: 0.25em;
  }
`
