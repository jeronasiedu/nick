import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const About = () => {
  const [mobile] = useMediaQuery('(max-width:720px)')
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
    <Flex
      align="center"
      w="full"
      my={'2rem'}
      direction={['column', 'column', 'row']}
      id="about"
      ref={ref}
      as={motion.div}
      animate={controls}
      initial="hidden"
      variants={homeVariant}
    >
      <VStack
        bg="#fff"
        w={['full', 'full', '50%']}
        p={3}
        py={['3', '3', '10']}
        rounded="sm"
        shadow="md"
        alignItems="flex-start"
        as={motion.div}
        variants={homeVariant}
      >
        <Heading
          color="primary"
          size="lg"
          as={motion.h1}
          variants={childVariant}
        >
          Who we are
        </Heading>
        <Text
          color="#0C5695"
          fontSize="lg"
          as={motion.p}
          variants={childVariant}
        >
          Adooba is a creative IT solution provider
        </Text>
        <Text color="#000" as={motion.p} variants={childVariant}>
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
        as={motion.div}
        variants={childVariant}
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
