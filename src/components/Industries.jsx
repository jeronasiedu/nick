import { Box, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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
  const homeVariant = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  }
  const childVariant = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  }
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('exit')
    }
  }, [controls, inView])
  return (
    <VStack
      my={'2rem'}
      as={motion.div}
      animate={controls}
      ref={ref}
      initial="hidden"
      variants={homeVariant}
    >
      <Heading
        as="h3"
        color="#BBCEF3"
        textAlign={['center', 'center', 'left']}
        as={motion.h1}
        variants={childVariant}
      >
        Industries we serve
      </Heading>
      <Text
        color="#fff"
        fontSize="lg"
        textAlign="center"
        as={motion.p}
        variants={childVariant}
      >
        We help our clients across diverse industries rapidly navigate
        technology changes and drive digital transformation
      </Text>
      <SimpleGrid
        minChildWidth={['150px', '280px']}
        placeItems="center"
        w="full"
        spacing={3}
        spacingX={['-0.5', '0', '3']}
        as={motion.div}
        variants={homeVariant}
      >
        {industries.map((item, key) => (
          <Box
            w={['90%', '95%', 'full']}
            maxW="20rem"
            p="2"
            bg="white"
            key={key}
            rounded="sm"
            as={motion.div}
            variants={childVariant}
            minH="7rem"
          >
            <VStack>
              <Image src={item.image} w={['4rem', '4.5rem', '5rem']} />
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
