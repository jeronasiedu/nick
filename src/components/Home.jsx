import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  chakra,
} from '@chakra-ui/react'
import { ImArrowRight2 } from 'react-icons/all'
import { Link as ScrollLink } from 'react-scroll'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const Home = () => {
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
      my="2rem"
      alignItems="center"
      direction={['column', 'column', 'row']}
      id="home"
      ref={ref}
      as={motion.div}
      variants={homeVariant}
      initial="hidden"
      animate={controls}
    >
      <VStack
        alignItems={['center', 'center', 'flex-start']}
        flex="0.5"
        w="full"
        as={motion.div}
        variants={homeVariant}
      >
        <Heading
          size="lg"
          textAlign={['center', 'center', 'left']}
          as={motion.h1}
          variants={childVariant}
        >
          We offer creative solutions for growing your business
        </Heading>
        <Text
          textAlign={['center', 'left']}
          as={motion.p}
          variants={childVariant}
        >
          We are a creative firm helping your business grow
        </Text>

        <chakra.button
          as={ScrollLink}
          to="contact"
          spy={true}
          smooth={true}
          cursor="pointer"
          fontSize="lg"
          bg="white"
          color="#000"
          px={'1rem'}
          py="0.5rem"
          fontFamily="inherit"
          rounded="sm"
          w="50%"
          minW="14rem"
          d="flex"
          alignItems="center"
          justifyContent="space-around"
          _hover={{
            bg: '#ffffffcf',
          }}
          _focus={{
            border: '2px solid blue.600',
          }}
        >
          <span>Talk to us now</span>
          <ImArrowRight2 />
        </chakra.button>
      </VStack>
      <Box flex="0.5" as={motion.div} variants={childVariant}>
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
