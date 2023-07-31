import { Box } from '@chakra-ui/react'

import { ContactList } from '../contact-list';

export const Footer = () => { 
  return (
    <Box 
      as="footer" 
      display="flex"  
      justifyContent="center"
      alignItems="center"
      height={[12, 16, 20]}
      gap="4"
    >
      <ContactList />
    </Box>
  )
}