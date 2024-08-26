import { ColorModeScript } from '@chakra-ui/react'
import { Analytics } from '@vercel/analytics/react'
import { Html, Head, Main, NextScript } from 'next/document'
import { chakraTheme } from '@/utils'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Analytics />
      <Head />
      <body>
        <ColorModeScript
          initialColorMode={chakraTheme.config.initialColorMode}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
