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
  const titleColor = useColorModeValue('primary.500', 'primary.50');
 
  return (
    <Box 
      display="flex" 
      justifyContent="center"
      alignItems="center"
      gap="4"
    >
        <Link 
          href="https://twitter.com/gabriel_ptbr" 
          color={titleColor} 
          _hover={{ opacity: 0.8 }}
          target='_blank'
        >
          <Icon 
            as={FaSquareTwitter} 
            color={titleColor}
            boxSize={[6 , 8 , 10]}
          />
        </Link>

        <Link 
          href="https://github.com/gabrielrportugal" 
          color={titleColor} 
          _hover={{ opacity: 0.8 }}
          target='_blank'
        >
          <Icon 
            as={FaGithubSquare} 
            color={titleColor}
            boxSize={[6 , 8 , 10]}
          />
        </Link>

        <Link 
          href="https://www.youtube.com/channel/UCYUWumvbdmcJnSvufHUql_A" 
          color={titleColor} 
          _hover={{ opacity: 0.8 }}
          target='_blank'
        >
          <Icon 
            as={FaYoutubeSquare} 
            color={titleColor}
            boxSize={[6 , 8 , 10]}
          />
        </Link>

        <Link 
          href="https://www.linkedin.com/in/gabrielrportugal" 
          color={titleColor} 
          _hover={{ opacity: 0.8 }}
          target='_blank'
        >
          <Icon 
            as={FaLinkedin} 
            color={titleColor}
            boxSize={[6 , 8 , 10]}
          />
        </Link>
    </Box>
  )
}