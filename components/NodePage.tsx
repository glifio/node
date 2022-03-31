import { Page, PageProps, NodeIconHeaderFooter } from '@glif/react-components'

export default function NodePage({ children, ...rest }: PageProps) {
  return (
    <Page
      appIcon={<NodeIconHeaderFooter />}
      appHeaderLinks={[
        {
          title: 'Blog',
          url: 'https://glif.io/blog'
        },
        {
          title: 'Code',
          url: 'https://github.com/glifio'
        },
        {
          title: 'Nodes',
          url: 'https://lotus.filecoin.io/docs/developers/hosted-lotus'
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
