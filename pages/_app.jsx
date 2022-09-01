import '@glif/base-css'
import App from 'next/app'
import Head from 'next/head'
import {
  EnvironmentProvider,
  theme,
  ThemeProvider,
  ErrorBoundary
} from '@glif/react-components'

const title = 'GLIF Nodes'
const description = 'Hosted Filecoin Nodes'
const keywords = 'Filecoin,Lotus,API,Web,Storage,Blockchain,Crypto,FIL'
const image = '/bg-node.jpg'
const url = 'https://node.glif.link'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name='description' content={description} />
          <meta name='keywords' content={keywords} />

          <meta property='og:title' content={title} />
          <meta property='og:site_name' content={title} />
          <meta property='og:description' content={description} />
          <meta property='og:image' content={image} />
          <meta property='og:url' content={url} />

          <meta name='twitter:title' content={title} />
          <meta name='twitter:description' content={description} />
          <meta name='twitter:image' content={image} />
          <meta name='twitter:image:alt' content={description} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:creator' content='@glifio' key='twhandle' />

          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/static/favicon-16x16.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/static/favicon-32x32.png'
          />
        </Head>
        <EnvironmentProvider
          homeUrl={process.env.NEXT_PUBLIC_HOME_URL}
          blogUrl={process.env.NEXT_PUBLIC_BLOG_URL}
          walletUrl={process.env.NEXT_PUBLIC_WALLET_URL}
          safeUrl={process.env.NEXT_PUBLIC_SAFE_URL}
          explorerUrl={process.env.NEXT_PUBLIC_EXPLORER_URL}
          verifierUrl={process.env.NEXT_PUBLIC_VERIFIER_URL}
          nodeStatusApiUrl='https://api.uptimerobot.com/v2/getMonitors'
          isProd={false}
          sentryDsn={process.env.NEXT_PUBLIC_SENTRY_DSN}
          sentryEnv={process.env.NEXT_PUBLIC_SENTRY_ENV}
        >
          <ThemeProvider theme={theme}>
            <ErrorBoundary>
              <Component {...pageProps} />
            </ErrorBoundary>
          </ThemeProvider>
        </EnvironmentProvider>
      </>
    )
  }
}

export default MyApp
