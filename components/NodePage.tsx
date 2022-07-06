import { Page, PageProps, NodeIconHeaderFooter } from '@glif/react-components'

export default function NodePage({ children, ...rest }: PageProps) {
  return (
    <Page
      appIcon={<NodeIconHeaderFooter />}
      appHeaderLinks={[
        {
          title: 'Wallet',
          url: process.env.NEXT_PUBLIC_WALLET_URL
        },
        {
          title: 'Safe',
          url: process.env.NEXT_PUBLIC_SAFE_URL
        },
        {
          title: 'Explorer',
          url: process.env.NEXT_PUBLIC_EXPLORER_URL
        },
        {
          title: 'Blog',
          url: process.env.NEXT_PUBLIC_BLOG_URL
        },
        {
          title: 'Code',
          url: 'https://github.com/glifio'
        },
        {
          title: 'Discord',
          url: 'https://discord.gg/B9ju5Eu4Rq'
        }
      ]}
      {...rest}
    >
      {children}
    </Page>
  )
}

NodePage.propTypes = {
  ...Page.propTypes
}
