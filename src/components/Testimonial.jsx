import {
  Box,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import { BsChatSquareQuote } from 'react-icons/all'
const Testimonial = () => {
  const testimonials = [
    {
      test: 'I have loved my experience with Adooba. They have an amazing team and they deliver on time too',
      author: 'Emmanuel F. Bonney',
      position: 'CEO, Emcee Multimedia',
      image: '/images/ceo.jpg',
    },
    {
      test: 'They are very active and  supportive. Communication is easy and  fast. Sometimes they extend extra mile just to satisfy their clients needs',
      author: 'Apostle Amen',
      position: 'Founder, BCRM International',
      image: '/images/pastor.jpg',
    },
    {
      test: 'Excellent work from  an experienced team. Highly recommended for their knowledge, design skill base and reliability. A honest and reputable company',
      author: 'Mr. Enoch Aquah',
      position: 'MD. Unique services Ghana',
      image: '/images/enoch.jpg',
    },
  ]
  return (
    <VStack my={'2rem'}>
      <Heading as="h3" color="#BBCEF3" textAlign={['center', 'center', 'left']}>
        Testimonies
      </Heading>
      <Text color="#fff" fontSize="lg" textAlign="center">
        Check what our clients are saying
      </Text>
      <SimpleGrid
        minChildWidth={['290px']}
        placeItems="center"
        w="full"
        spacing={3}
      >
        {testimonials.map((item, key) => (
          <Box
            w="full"
            maxW="23rem"
            bg="#242424"
            rounded="sm"
            shadow="sm"
            p={3}
            key={key}
            minH="16rem"
          >
            <VStack w="full">
              <BsChatSquareQuote
                size={24}
                style={{
                  alignSelf: 'flex-start',
                }}
                color="#0df7ff"
              />
              <Text>{item.test}</Text>
              <HStack
                justifyContent="space-between"
                alignSelf="flex-start"
                w="full"
              >
                <VStack alignItems="flex-start" spacing={1}>
                  <Text fontWeight="600" fontSize={['md', 'lg']}>
                    {item.author}
                  </Text>
                  <Text color="primary">{item.position}</Text>
                </VStack>
                <Box
                  w={['4rem', '5rem', '5.5rem']}
                  h={['4rem', '5rem', '5.5rem']}
                  rounded="full"
                  overflow="hidden"
                  bg="blue.400"
                  shadow="lg"
                  border="4px"
                  borderColor="blue.400"
                >
                  <Image
                    src={item.image}
                    boxSize="full"
                    alt="test"
                    objectFit="cover"
                  />
                </Box>
              </HStack>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  )
}
export default Testimonial
