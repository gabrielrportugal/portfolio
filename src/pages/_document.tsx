import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import { chakraTheme } from '@/utils'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body>
        <ColorModeScript initialColorMode={chakraTheme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
