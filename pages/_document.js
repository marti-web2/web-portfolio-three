import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

const rootStyle = {
 fontSize: '10px',
}

const bodyStyle = {
  fontSize: '1.8rem'
}

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" style={rootStyle}>
        <Head>
        <link
  href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
  rel="stylesheet" />

</Head>
        <body style={bodyStyle}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
