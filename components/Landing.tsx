import styled from 'styled-components'
import {
  AppTile,
  ButtonV2,
  FullWidthButtons,
  LandingPageColumns,
  LandingPageContent,
  SmartLink,
  devices
} from '@glif/react-components'

import NodePage from './NodePage'
import Documentation from './Documentation'

const DocumentationButton = styled(FullWidthButtons)`
  display: none;
  @media (min-width: ${devices.tablet}) {
    display: flex;
  }
`

export default function Landing() {
  return (
    <NodePage preFooter={<Documentation />}>
      <LandingPageColumns>
        <AppTile
          title='Node'
          description=''
          imgSrc='/bg-node.jpg'
          imgSrcHover='/bg-node-hover.jpg'
          small={false}
          large
        />
        <LandingPageContent>
          <h2>Hello,</h2>
          <p>
            I am the Glif API Node - a publicly available hosted endpoint of
            Lotus (the most popular client for the Filecoin network). Feel free
            to make a POST request against this URL using the JSON-RPC model to
            check it out. You can find the list of available RPC requests at the
            bottom of this page. Please note that a publicly available hosted
            endpoint guarantees <b>only 2000 of the latest blocks.</b>
          </p>
          <p>
            If this version does not suit your needs or you want to get a
            dedicated node, feel free to fill this form:{' '}
            <SmartLink href='https://forms.gle/9GiWdgem25urvys68'>
              https://forms.gle/9GiWdgem25urvys68
            </SmartLink>
          </p>
          <p>
            If you have any questions, suggestions, feedback or any ideas how to
            improve our service, you are welcome to join our slack channel.
          </p>
          <DocumentationButton>
            <ButtonV2
              large
              onClick={() =>
                window.scroll({ top: window.innerHeight, behavior: 'smooth' })
              }
            >
              Check out the documenation
            </ButtonV2>
          </DocumentationButton>
        </LandingPageContent>
      </LandingPageColumns>
    </NodePage>
  )
}
