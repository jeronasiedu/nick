import { Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import CardGrid from './CardGrid'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const Business = () => {
  const business = [
    {
      image: '/images/ux.png',
      name: 'Web Development & Management',
      desc: 'Web development, Web hosting, Website Management, Web app development, SEO and more',
    },
    {
      image: '/images/apps.png',
      name: 'App Development & Management',
      desc: 'Native iOS apps, Native android apps, Cross Platforms',
    },
    {
      image: '/images/web-design.png',
      name: 'Graphic Design & UX Design',
      desc: 'Corporate Design, Interface Design, Mockup, Publishing, Advertisement',
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
      id="services"
      as={motion.div}
      initial="hidden"
      animate={controls}
      ref={ref}
      variants={homeVariant}
    >
      <Heading
        size="lg"
        as="h3"
        color="#BBCEF3"
        textAlign={['center', 'center', 'left']}
        as={motion.h1}
        variant={childVariant}
      >
        Let's help your business with our services
      </Heading>
      <SimpleGrid
        spacing={3}
        minChildWidth={['270px', '250px']}
        w="full"
        placeItems={'center'}
        as={motion.div}
        variants={homeVariant}
      >
        {business.map((item, key) => (
          <CardGrid {...item} key={key} w="35%" />
        ))}
      </SimpleGrid>
    </VStack>
  )
}

export default Business
