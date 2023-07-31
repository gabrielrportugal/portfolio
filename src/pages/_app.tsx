
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import {chakraTheme} from '@/utils';
import RootLayout from '@/components/root-layout';
import { SidebarDrawerProvider } from '@/contexts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={chakraTheme}  >
      <SidebarDrawerProvider>
        <RootLayout>
          <Component  {...pageProps} />
        </RootLayout>
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp;