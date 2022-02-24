import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
const About = () => {
  const [mobile] = useMediaQuery('(max-width:720px)')
  return (
    <Flex
      align="center"
      w="full"
      my={'2rem'}
      direction={['column', 'column', 'row']}
      id="about"
    >
      <VStack
        bg="#fff"
        w={['full', 'full', '50%']}
        p={3}
        py={['3', '3', '10']}
        rounded="sm"
        shadow="md"
        alignItems="flex-start"
      >
        <Heading color="primary" size="lg">
          Who we are
        </Heading>
        <Text color="#0C5695" fontSize="lg">
          Adoba is a creative IT solution provider and business consulting firm
        </Text>
        <Text color="#000">
          The business is established with enthusiasm and determination to
          redefine the prospect of support for IT in Africa and the world
        </Text>
      </VStack>
      <Box
        bg="blue.300"
        h={['10rem', '12rem', '24rem']}
        w={['70%', '60%']}
        transform={mobile ? 'translateY(-0.5rem)' : 'translateX(-0.5rem)'}
        rounded="sm"
        overflow={'hidden'}
      >
        <Image
          src="/images/boy.jpg"
          alt="A picture of a programmer"
          boxSize="full"
          objectFit="cover"
        />
      </Box>
    </Flex>
  )
}

export default About
