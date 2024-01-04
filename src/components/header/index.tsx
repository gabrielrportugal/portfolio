import { Button, useColorMode, Box, Heading, useColorModeValue, Flex, Icon, useBreakpointValue } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { FaDev } from 'react-icons/fa'

import { HamburgerIcon } from '@chakra-ui/icons';

import { useSidebarDrawer } from '@/contexts'
import { DarkModeButton } from '../dark-mode-button'
import { headerMenuItens } from '@/utils';

export const Header = () => {
  const { onOpen } = useSidebarDrawer();

  const bg = useColorModeValue('white.50', 'black.50');

  const titleColor = useColorModeValue('primary.500', 'primary.50');

  const isDesktopVersion = useBreakpointValue({ base: false, lg: true }); 

  return (
    <Box 
      as="header"
      display="flex" 
      w="100%" 
      bg={bg}
      justifyContent="center"
      height="6rem"
      position="fixed"
      boxShadow='sm'
      zIndex={3}
    >
      <Box
        display="flex" 
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxWidth="7xl"
        margin={["0 2rem", "0 4rem", "0 6rem",  "0 auto"]}
      >
        <Link href="/" color={titleColor} _hover={{ opacity: 0.8 }}>
          <Icon 
            as={FaDev} 
            color={titleColor}
            boxSize={[6 , 8 , 10]}
          />
        </Link>

        {isDesktopVersion && (
          <Flex
            alignItems="center"
            justifyContent="center"
            gap='8'
          >
            {headerMenuItens.map((menuItem) => (
              <Link key={menuItem.href} href={menuItem.href} color={titleColor} _hover={{ opacity: 0.8 }} >
                <Heading
                  fontSize="xl"
                  textTransform="uppercase"
                >
                  {menuItem.title}
                </Heading>
              </Link>
            ))}
            
            <DarkModeButton />
          </Flex>
        )}

        {!isDesktopVersion && (
          <Button onClick={onOpen}>
            <HamburgerIcon color={titleColor} boxSize={[4,  6]}   />
          </Button>
        )}
      </Box>
    </Box>
  )
}