import {
  Box,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const Projects = () => {
  const projects = [
    {
      type: 'Happy Clients',
      total: 164,
      image: '/images/smile.png',
    },
    {
      type: 'Projects',
      total: 54,
      image: '/images/clipboard.png',
    },
    {
      type: 'Hours of Support',
      total: 1980,
      image: '/images/customer-service.png',
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
        staggerChildren: 0.5,
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
    <SimpleGrid
      spacing={3}
      minChildWidth={['270px', '250px']}
      w="full"
      placeItems={'center'}
      my="2rem"
      ref={ref}
      as={motion.div}
      initial="hidden"
      animate={controls}
      variants={homeVariant}
    >
      {projects.map((item, key) => (
        <Box
          w="full"
          maxW="20rem"
          bg="#242424"
          p={3}
          key={key}
          as={motion.div}
          variants={childVariant}
          whileHover={{
            scaleX: 1.1,
            y: 4,
          }}
        >
          <HStack spacing={3} as={motion.div} variant={homeVariant}>
            <Box w="4rem" as={motion.div} variant={childVariant}>
              <Image src={item.image} alt="something" boxSize="full" />
            </Box>
            <VStack
              alignItems="flex-start"
              spacing={0}
              as={motion.div}
              variant={homeVariant}
            >
              <Heading as={motion.h2} variant={childVariant}>
                {item.total}
              </Heading>
              <Text as={motion.p} variant={childVariant}>
                {item.type}
              </Text>
            </VStack>
          </HStack>
        </Box>
      ))}
    </SimpleGrid>
  )
}

export default Projects
