import {
  Heading,
  SimpleGrid,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import CardGrid from './CardGrid'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const Services = () => {
  const services = [
    {
      name: 'Integrity',
      desc: "We're honest, transparent and committed to doing what's best for our customers and our community",
      image: '/images/values-1.png',
    },
    {
      name: 'Innovation',
      desc: 'Through innovation, we generate solutions for our customers and raise the bar both within our workspace and throughout our industry',
      image: '/images/values-2.png',
    },
    {
      name: 'Team',
      desc: 'We have a strong team of developers and creatives working to meet your needs and requirements',
      image: '/images/values-3.png',
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
    <VStack
      my={'2rem'}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={homeVariant}
      as={motion.div}
    >
      <Heading
        size="md"
        as="h3"
        color="primary"
        as={motion.h4}
        variants={childVariant}
      >
        Our Values
      </Heading>
      <Heading
        size="lg"
        as="h3"
        color="#BBCEF3"
        textAlign={['center', 'center', 'left']}
        as={motion.h2}
        variants={childVariant}
      >
        The foundation to our company culture
      </Heading>
      <SimpleGrid
        spacing={3}
        minChildWidth={['270px', '250px']}
        w="full"
        placeItems={'center'}
        as={motion.div}
        variants={homeVariant}
      >
        {services.map((item, key) => (
          <CardGrid {...item} key={key} />
        ))}
      </SimpleGrid>
    </VStack>
  )
}

export default Services
