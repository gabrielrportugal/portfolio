import { Box } from '@chakra-ui/react';
import {Header, Drawer} from '../';
import { Footer } from '../footer';

interface RootLayoutProps {
    children: React.ReactNode 
}

export default function RootLayout({ children }:RootLayoutProps) {
  return (
    <Box minHeight="100vh" minWidth="100vw">
      <Header />
      <Box as="main" pt="60px">
        <Drawer />
        {children}
      </Box>
      <Footer />
    </Box>
  );
};