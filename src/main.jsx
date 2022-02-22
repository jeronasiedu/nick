import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import '@fontsource/nunito-sans'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
const theme = extendTheme({
  fonts: {
    body: 'nunito-sans, sans-serif',
    heading: 'nunito-sans, sans-serif',
    text: 'nunito-sans, sans-serif',
  },
})
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
)
