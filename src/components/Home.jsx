import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { BsTelephoneForward } from 'react-icons/all'
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
        <Button
          w={['full', '70%']}
          variant="solid"
          colorScheme={'facebook'}
          as={ScrollLink}
          to="contact"
          spy={true}
          smooth={true}
          rounded="sm"
          rightIcon={<BsTelephoneForward />}
        >
          Let's talk
        </Button>
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
