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
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const Portfolio = () => {
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
    <Stack
      w="full"
      direction={['column', 'column', 'row']}
      my="2rem"
      spacing="0"
      justifyContent="center"
      alignItems="center"
      id="portfolio"
      as={motion.div}
      ref={ref}
      variants={homeVariant}
      initial="hidden"
      animate={controls}
    >
      <Box
        w={['100%', '80%', '45%']}
        bgGradient="linear(to-b,#8ec5fc 0%,#e0c3fc 100% )"
        h="20rem"
        transform={!mobile ? 'translateX(0.5rem)' : ''}
        boxShadow={!mobile ? '4px 0 4px rgba(0,0,0,0.1)' : ''}
        as={motion.div}
        variants={childVariant}
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
        as={motion.div}
        variants={childVariant}
      >
        <VStack
          alignItems="flex-start"
          p={2}
          as={motion.div}
          variants={homeVariant}
        >
          <Heading
            textTransform="uppercase"
            color="secondary"
            size="lg"
            as={motion.h1}
            variants={childVariant}
          >
            Our Portfolio
          </Heading>
          <Text
            color="#004E91"
            fontSize="lg"
            variants={childVariant}
            as={motion.p}
          >
            Out of numerous projects we've worked on, these are a few we could
            display
          </Text>
          <Button
            rightIcon={<ImArrowRight2 size={22} />}
            rounded="sm"
            color="#4153F1"
            variant="ghost"
            as={motion.button}
            variants={childVariant}
          >
            Click Here
          </Button>
        </VStack>
      </Box>
    </Stack>
  )
}

export default Portfolio
