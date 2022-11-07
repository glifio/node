import styled from 'styled-components'
import { FullWidthButtons, Spaces, devices } from '@glif/react-components'

export const DocumentationButton = styled(FullWidthButtons)`
  display: none;

  ${(props) => props.withBadge && `margin-top: ${Spaces.MEDIUM};`}

  @media (min-width: ${devices.tablet}) {
    display: flex;
  }
`

export const TitleWithSubtitle = styled.div`
  margin-bottom: 1.75em;
  > h2 {
    margin-bottom: 0.25em;
  }
`
