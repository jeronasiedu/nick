import { Box, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'

const Industries = () => {
  const industries = [
    {
      name: 'Education',
      image: '/images/open-book.png',
    },
    {
      name: 'Religion',
      image: '/images/religion.png',
    },
    {
      name: 'Ecommerce',
      image: '/images/shopping-cart.png',
    },
    {
      name: 'Event',
      image: '/images/event.png',
    },
    {
      name: 'Banking',
      image: '/images/bank.png',
    },
    {
      name: 'Retail',
      image: '/images/shopping-store.png',
    },
    {
      name: 'Entertainment',
      image: '/images/video.png',
    },
    {
      name: 'Sports & Recreation',
      image: '/images/sports.png',
    },
    {
      name: 'Health',
      image: '/images/healthcare.png',
    },
    {
      name: 'Lifestyle',
      image: '/images/healthy.png',
    },
    {
      name: 'Food & Restaurant',
      image: '/images/fast-food.png',
    },
    {
      name: 'Housing & Estates',
      image: '/images/hotel.png',
    },
  ]
  return (
    <VStack my={'2rem'}>
      <Heading as="h3" color="#BBCEF3" textAlign={['center', 'center', 'left']}>
        Industries we serve
      </Heading>
      <Text color="#fff" fontSize="lg" textAlign="center">
        We help our clients across diverse industries rapidly navigate
        technology changes and drive digital transformation
      </Text>
      <SimpleGrid
        minChildWidth={['150px', '280px']}
        placeItems="center"
        w="full"
        spacing={3}
      >
        {industries.map((item, key) => (
          <Box
            w={['90%', '95%', 'full']}
            maxW="20rem"
            p="2"
            bg="white"
            key={key}
            rounded="sm"
            minH="7rem"
          >
            <VStack>
              <Image src={item.image} w={['4rem', '5rem', '7rem']} />
              <Text fontSize={['sm', 'md', 'lg']} color="#000">
                {item.name}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  )
}

export default Industries
