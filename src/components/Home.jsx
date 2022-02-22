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
const Home = () => {
  return (
    <Flex mt="3" alignItems="center" direction={['column', 'column', 'row']}>
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
