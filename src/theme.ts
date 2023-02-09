import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    body: 'Lato, sans-serif',
    heading: 'Montserrat, sans-serif',
    mono: 'Menlo, monospace'
  },
  colors: {
    primary: {
      100: '#1D5959',
      200: '#297350',
      300: '#78BF97',
      400: '#82BF45'
    },
    neutrals: {
      100: '#FFFCF9',
      200: '#EFF1ED',
      300: '#090C08'
    }
  },
  styles: {
    global: {
      '*': {
        boxSizing: 'border-box'
      },
      html: {
        height: '100%',
        width: '100%'
      },
      body: {
        height: '100%',
        width: '100%'
      },
      '#root': {
        height: '100%',
        width: '100%'
      }
    }
  }
})
