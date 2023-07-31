import { Box, useColorModeValue, Icon } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

import { 
  FaGithubSquare,
  FaYoutubeSquare,
  FaLinkedin
} from 'react-icons/fa'

import { 
  FaSquareTwitter
} from 'react-icons/fa6';


export const ContactList = () => {
  const bg = useColorModeValue('seconday.50', 'secondary.900');
  const titleColor = useColorModeValue('primary.500', 'primary.50');
 
  return (
    <Box 
      display="flex" 
      w="100%" 
      justifyContent="center"
      alignItems="center"
      bg={bg}
      gap="4"
    >
        <Link href="https://twitter.com/gabriel_ptbr" color={titleColor} _hover={{ opacity: 0.8 }}>
          <Icon 
            as={FaSquareTwitter} 
            color={titleColor}
            boxSize={[6 , 8 , 10]}
          />
        </Link>

        <Link href="https://github.com/gabrielrportugal" color={titleColor} _hover={{ opacity: 0.8 }}>
          <Icon 
            as={FaGithubSquare} 
            color={titleColor}
            boxSize={[6 , 8 , 10]}
          />
        </Link>

        <Link href="https://www.youtube.com/channel/UCYUWumvbdmcJnSvufHUql_A" color={titleColor} _hover={{ opacity: 0.8 }}>
          <Icon 
            as={FaYoutubeSquare} 
            color={titleColor}
            boxSize={[6 , 8 , 10]}
          />
        </Link>

        <Link href="https://www.linkedin.com/in/gabrielrportugal" color={titleColor} _hover={{ opacity: 0.8 }}>
          <Icon 
            as={FaLinkedin} 
            color={titleColor}
            boxSize={[6 , 8 , 10]}
          />
        </Link>
    </Box>
  )
}