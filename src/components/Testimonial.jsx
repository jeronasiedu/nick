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
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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
        staggerChildren: 0.4,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
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
      ref={ref}
      as={motion.div}
      animate={controls}
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
        Testimonies
      </Heading>
      <Text
        color="#fff"
        fontSize="lg"
        textAlign="center"
        as={motion.p}
        variants={childVariant}
      >
        Check what our clients are saying
      </Text>
      <SimpleGrid
        minChildWidth={['290px']}
        placeItems="center"
        w="full"
        spacing={3}
        variants={homeVariant}
        as={motion.div}
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
            as={motion.div}
            variants={childVariant}
          >
            <VStack w="full" as={motion.div} variants={homeVariant}>
              <BsChatSquareQuote
                size={24}
                style={{
                  alignSelf: 'flex-start',
                }}
                color="#0df7ff"
                as={motion.span}
                variants={childVariant}
              />
              <Text as={motion.p} variants={childVariant}>
                {item.test}
              </Text>
              <HStack
                justifyContent="space-between"
                alignSelf="flex-start"
                w="full"
                as={motion.div}
                variants={homeVariant}
              >
                <VStack
                  alignItems="flex-start"
                  spacing={1}
                  as={motion.div}
                  variants={homeVariant}
                >
                  <Text
                    fontWeight="600"
                    fontSize={['md', 'lg']}
                    as={motion.p}
                    variants={childVariant}
                  >
                    {item.author}
                  </Text>
                  <Text color="primary" as={motion.p} variants={childVariant}>
                    {item.position}
                  </Text>
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
                  as={motion.div}
                  variants={childVariant}
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
