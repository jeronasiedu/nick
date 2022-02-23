import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import '@fontsource/nunito-sans'
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
const theme = extendTheme({
  fonts: {
    body: 'nunito-sans, sans-serif',
    heading: 'nunito-sans, sans-serif',
    text: 'nunito-sans, sans-serif',
  },
  colors: {
    primary: '#5464ed',
    secondary: '#133570',
  },
  styles: {
    global: {
      body: {
        bg: '#000',
        color: '#fff',
      },
      p: {
        color: '#fff',
      },
    },
  },
})
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode="dark" />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
)
