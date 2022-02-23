import { Container } from '@chakra-ui/react'
import About from './components/About'
import Business from './components/Business'
import Home from './components/Home'
import Industries from './components/Industries'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Projects from './components/Projects'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
function App() {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl">
        <Home />
        <About />
        <Services />
        <Projects />
        <Business />
        <Industries />
        <Testimonial />
        {/* <Portfolio /> */}
      </Container>
    </>
  )
}

export default App
