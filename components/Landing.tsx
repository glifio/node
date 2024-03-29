import {
  AppTile,
  ButtonV2,
  FullWidthButtons,
  LandingPageColumns,
  LandingPageContent,
  SmartLink,
  ButtonV2Link
} from '@glif/react-components'

import NodePage from './NodePage'
import Documentation from './Documentation'
import { ButtonsHiddenOnMobile } from './Helpers'
import Link from 'next/link'

export function Landing() {
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
            check it out. You can find the list of available RPC requests{' '}
            <Link href='/filecoin-rpc'>here</Link> and{' '}
            <Link href='/eth-rpc'>here</Link>. Please note that a publicly
            available hosted endpoint guarantees{' '}
            <b>only 2000 of the latest blocks.</b>
          </p>
          <p>
            If this version does not suit your needs or you want to get a
            dedicated node, feel free to fill this form:{' '}
            <SmartLink href='https://forms.gle/9GiWdgem25urvys68'>
              https://forms.gle/9GiWdgem25urvys68
            </SmartLink>
          </p>
          <ButtonsHiddenOnMobile>
            <ButtonV2
              large
              onClick={() =>
                window.scroll({ top: window.innerHeight, behavior: 'smooth' })
              }
            >
              Check out the documenation
            </ButtonV2>
            <ButtonV2
              large
              onClick={() => {
                const el = document.getElementById('endpoints')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Check out available endpoints
            </ButtonV2>
          </ButtonsHiddenOnMobile>
          <FullWidthButtons>
            <ButtonV2Link large href='/eth-rpc'>
              Ethereum JSON RPC Support
            </ButtonV2Link>
            <ButtonV2Link large href='/filecoin-rpc'>
              Filecoin JSON RPC Support
            </ButtonV2Link>
          </FullWidthButtons>
        </LandingPageContent>
      </LandingPageColumns>
    </NodePage>
  )
}
