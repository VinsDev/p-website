import { NextPage } from 'next'
import { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Document from 'next/document'

const Doc: NextPage = ()=>{
  return (
    <Html lang="en" style={{scrollBehavior:'smooth'}}>
      <Head>
      <meta name="application-name" content="Vincent Dominic" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Vincent's Portfolio" />
      <meta name="description" content="Software Engineer and Full-Stack Developer with expertise in building high-performance applications that serve 100K+ users. Specializing in React, Next.js, Flutter, and Node.js." />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/images/icons/icon-144x144.png" />
      <meta name="msapplication-TileColor" content="#2B5797" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />

      <link rel="apple-touch-icon" href="/images/icons/icon-512x512.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/images/icons/icon-512x512.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/icon-512x512.png" />
      <link rel="apple-touch-icon" sizes="167x167" href="/images/icons/icon-512x512.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/icon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/icons/icon-96x96.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />

        <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

Doc.getInitialProps =async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage
  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          sheet.collectStyles(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: [initialProps.styles, sheet.getStyleElement()],
    }
  } finally {
    sheet.seal()
  }
  
}

export default Doc;
