import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  chakra,
} from '@chakra-ui/react'
import { ImArrowRight2 } from 'react-icons/all'
import { Link as ScrollLink } from 'react-scroll'
const Home = () => {
  return (
    <Flex
      my="2rem"
      alignItems="center"
      direction={['column', 'column', 'row']}
      id="home"
    >
      <VStack
        alignItems={['center', 'center', 'flex-start']}
        flex="0.5"
        w="full"
      >
        <Heading size="lg" textAlign={['center', 'center', 'left']}>
          We offer creative solutions for growing your business
        </Heading>
        <Text textAlign={['center', 'left']}>
          We are a creative firm helping your business grow
        </Text>

        <chakra.button
          as={ScrollLink}
          to="contact"
          spy={true}
          smooth={true}
          cursor="pointer"
          fontSize="lg"
          bg="white"
          color="#000"
          px={'1rem'}
          py="0.5rem"
          fontFamily="inherit"
          rounded="sm"
          w="50%"
          d="flex"
          alignItems="center"
          justifyContent="space-around"
          _hover={{
            bg: '#ffffffcf',
          }}
          _focus={{
            border: '2px solid blue.600',
          }}
        >
          <span>Talk to us now</span>
          <ImArrowRight2 />
        </chakra.button>
      </VStack>
      <Box flex="0.5">
        <Image
          src="/images/home.png"
          alt="Home page"
          boxSize={'100%'}
          objectFit="cover"
        />
      </Box>
    </Flex>
  )
}

export default Home
