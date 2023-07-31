import { ThemeConfig, extendTheme } from '@chakra-ui/react'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}


const fonts = {
  fonts: {
    heading: roboto.style.fontFamily,
    body: roboto.style.fontFamily,
  }
};

const colors = {
  primary: {
    50: '#E4F0FE',
    100: '#BED8FC',
    200: '#94BEF9',
    300: '#6AABF7',
    400: '#4C9EF5',
    500: '#3985df',
    600: '#2D68B3',
    700: '#1F4A87',
    800: '#112C5B',
    900: '#040E30',
  },
  secondary: {
    50: '#F0F6F5',
    100: '#D4E2E0',
    200: '#B7CDCB',
    300: '#9BB8B6',
    400: '#7EA4A2',
    500: '#95B2B0',
    600: '#6B8785',
    700: '#4E736F',
    800: '#344D4B',
    900: '#1A2726',
  }
}

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}

export const chakraTheme = extendTheme({ fonts, colors, config, breakpoints })