import { Box } from '@chakra-ui/react'

import { ContactList } from '../contact-list';

export const Footer = () => { 
  return (
    <Box 
      as="footer" 
      display="flex"  
      justifyContent="center"
      alignItems="center"
      height={[18, 20, 26]}
      gap="4"
    >
      <ContactList />
    </Box>
  )
}