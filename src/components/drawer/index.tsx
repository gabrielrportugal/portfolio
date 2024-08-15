import { useSidebarDrawer } from '@/contexts/sidebar-context'
import {
  Box,
  DrawerBody,
  Drawer as DrawerComp,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  Icon,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import { DarkModeButton } from '../dark-mode-button'
import { FaDev } from 'react-icons/fa'
import { headerMenuItens } from '@/utils'
import { ContactList } from '../contact-list'

export const Drawer = () => {
  const { isOpen, onClose } = useSidebarDrawer()
  const titleColor = useColorModeValue('primary.500', 'primary.50')

  const bg = useColorModeValue('white.50', 'black.50')

  return (
    <DrawerComp placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent backgroundColor={bg}>
        <DrawerHeader
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          borderBottomWidth="1px"
        >
          <Icon as={FaDev} color={titleColor} boxSize={[6, 8, 10]} />
          <DarkModeButton />
        </DrawerHeader>

        <DrawerBody
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            {headerMenuItens.map((menuItem) => (
              <Link
                key={menuItem.href}
                href={menuItem.href}
                color={titleColor}
                _hover={{ opacity: 0.8 }}
                mb="20px"
              >
                <Text fontSize="xl" textTransform="uppercase">
                  {menuItem.title}
                </Text>
              </Link>
            ))}
          </Box>

          <ContactList />
        </DrawerBody>
      </DrawerContent>
    </DrawerComp>
  )
}
