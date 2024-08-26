import { Box, Stack, useColorModeValue } from '@chakra-ui/react'
import { Header, Drawer } from '../'
import { Footer } from '../footer'
import Head from 'next/head'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const bg = useColorModeValue('white.50', 'black.50')

  return (
    <Box className="main-box" minHeight="100vh" minWidth="100vw" bg={bg}>
      <Head>
        <title>Gabriel Portugal</title>
      </Head>
      <Header />
      <Stack
        as="main"
        paddingTop="8rem"
        w="100%"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          flexDirection="column"
          maxWidth="7xl"
          margin={['0 2rem', '0 4rem', '0 6rem', '0 8rem']}
        >
          <Drawer />
          {children}
        </Stack>
        <Footer />
      </Stack>
    </Box>
  )
}
