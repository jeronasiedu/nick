import { Container } from '@chakra-ui/react'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl">
        <Home />
        <About />
      </Container>
    </>
  )
}

export default App
