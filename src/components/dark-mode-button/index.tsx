import { Button, useColorMode } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  
  return(
    <Button onClick={toggleColorMode}>
      {colorMode === 'light' ? <SunIcon /> : <MoonIcon /> }
    </Button>
  )
}