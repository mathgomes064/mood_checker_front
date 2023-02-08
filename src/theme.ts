import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: 'Labo',
    heading: 'Montserrat',
    mono: 'Menlo, monospace'
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

export { theme }
