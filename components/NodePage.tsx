import { Page, PageProps, NodeIconHeaderFooter } from '@glif/react-components'

export default function NodePage({ children, ...rest }: PageProps) {
  return (
    <Page appIcon={<NodeIconHeaderFooter />} {...rest}>
      {children}
    </Page>
  )
}

NodePage.propTypes = {
  ...Page.propTypes
}
