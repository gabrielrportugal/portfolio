import { Box, useColorModeValue } from '@chakra-ui/react'

import { ContactList } from '../contact-list';

export const Footer = () => {
  const bg = useColorModeValue('seconday.50', 'secondary.900');
 
  return (
    <Box 
      as="footer" 
      display="flex" 
      w="100%" 
      justifyContent="center"
      alignItems="center"
      height={[12, 16, 20]}
      bg={bg}
      gap="4"
    >
      <ContactList />
    </Box>
  )
}