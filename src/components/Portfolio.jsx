import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react'
import { BiChevronRight } from 'react-icons/all'
const Portfolio = () => {
  const [mobile] = useMediaQuery('(max-width:720px)')
  console.log(mobile)
  return (
    <Stack
      w="full"
      direction={['column', 'column', 'row']}
      my="3rem"
      spacing="0"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w={['100%', '80%', '45%']}
        bg="red"
        h="20rem"
        transform={!mobile ? 'translateX(0.5rem)' : ''}
        boxShadow={!mobile ? '4px 0 4px rgba(0,0,0,0.1)' : ''}
      >
        <Image src="/images/lady.jpg" boxSize="full" objectFit="cover" />
      </Box>
      <Box
        w={['90%', '70%', '40%']}
        transform={mobile ? 'translateY(-0.5rem)' : ''}
        h="18rem"
        bg={['#BBCEF3', '#BBCEF3', 'blue.50']}
        boxShadow={mobile ? '0 -4px 4px rgba(0,0,0,0.1)' : ''}
        p={3}
      >
        <VStack alignItems="flex-start" p={2}>
          <Heading textTransform="uppercase" color="secondary" size="lg">
            Our Portfolio
          </Heading>
          <Text color="#004E91" fontSize="lg">
            Out of numerous projects we've worked on, these are a few we could
            display
          </Text>
          <Button
            rightIcon={<BiChevronRight size={22} />}
            rounded="sm"
            color="#4153F1"
            variant="outline"
          >
            Click Here
          </Button>
        </VStack>
      </Box>
    </Stack>
  )
}

export default Portfolio
