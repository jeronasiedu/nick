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
import { ImArrowRight2 } from 'react-icons/all'
const Portfolio = () => {
  const [mobile] = useMediaQuery('(max-width:720px)')
  return (
    <Stack
      w="full"
      direction={['column', 'column', 'row']}
      my="2rem"
      spacing="0"
      justifyContent="center"
      alignItems="center"
      id="portfolio"
    >
      <Box
        w={['100%', '80%', '45%']}
        bgGradient="linear(to-b,#8ec5fc 0%,#e0c3fc 100% )"
        h="20rem"
        transform={!mobile ? 'translateX(0.5rem)' : ''}
        boxShadow={!mobile ? '4px 0 4px rgba(0,0,0,0.1)' : ''}
      >
        <Image
          src="/images/black-girl.jpg"
          boxSize="full"
          objectFit="cover"
          alt="A picture of a girl "
        />
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
            rightIcon={<ImArrowRight2 size={22} />}
            rounded="sm"
            color="#4153F1"
            variant="ghost"
          >
            Click Here
          </Button>
        </VStack>
      </Box>
    </Stack>
  )
}

export default Portfolio
