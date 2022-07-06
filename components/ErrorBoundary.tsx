import { Component } from 'react'
import { ErrorView, OneColumnCentered } from '@glif/react-components'
import { logger } from '../logger'
import NodePage from './NodePage'
import { ReactNodeLike } from 'prop-types'

type ErrorState = {
  hasError: boolean
}

type ErrorProps = {
  children: ReactNodeLike
}

// This component catches all uncaught react and syncronous JS errors
// and forwards the user to an error page + sends us the error report
class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  state: ErrorState = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    logger.error(
      'ErrorBoundary',
      error instanceof Error ? error.message : JSON.stringify(error),
      errorInfo
    )
  }

  render() {
    if ((this.state as ErrorState).hasError) {
      return (
        <NodePage>
          <OneColumnCentered>
            <ErrorView
              title='Glif is currently down'
              description="We've been notified of the outage and expect to be back up and running again shortly."
            />
          </OneColumnCentered>
        </NodePage>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
