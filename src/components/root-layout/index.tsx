import { Box, useColorModeValue } from '@chakra-ui/react';
import {Header, Drawer} from '../';
import { Footer } from '../footer';
import Head from 'next/head';

interface RootLayoutProps {
  children: React.ReactNode 
}

export default function RootLayout({ children }:RootLayoutProps) {
  const bg = useColorModeValue('white.50', 'black.50');

  return (
    <Box minHeight="100vh" minWidth="100vw" bg={bg}>
      <Head>
        <title>Gabriel Portugal</title>
      </Head>
      <Header />
      <Box 
        as="main" 
        paddingTop="6rem"
        w="100%" 
      >
        <Box
          maxWidth="7xl"
          margin={["0 2rem", "0 4rem", "0 6rem",  "0 auto"]}
        >
          <Drawer />
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};