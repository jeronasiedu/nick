import {
  Box,
  Divider,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react'
import { GoLocation, MdEmail, BiPhoneCall } from 'react-icons/all'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const Contact = () => {
  const [mobile] = useMediaQuery('(max-width:720px)')
  const details = [
    {
      icon: <GoLocation size={30} />,
      title: 'Address',
      value: 'Legon, Accra-Ghana',
    },
    {
      icon: <MdEmail size={30} />,
      title: 'Email Us',
      value: 'adooba.info@gmail.com',
      href: 'mailto:adooba.info@gmail.com',
    },
    {
      icon: <BiPhoneCall size={30} />,
      title: 'Call Us',
      value: '+233207623726',
      href: 'tel:+233207623726',
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
      id="contact"
      initial="hidden"
      animate={controls}
      variants={homeVariant}
      ref={ref}
    >
      <Heading
        size="md"
        as="h3"
        color="primary"
        as={motion.h1}
        variants={childVariant}
      >
        Our Contacts
      </Heading>
      <Heading
        size="lg"
        as="h3"
        color="#BBCEF3"
        textAlign={['center', 'center', 'left']}
        as={motion.h1}
        variants={childVariant}
      >
        Let's get in touch
      </Heading>
      <Stack
        w="full"
        direction={['column', 'column', 'row']}
        my="3rem"
        spacing="0"
        justifyContent="center"
        alignItems="center"
        as={motion.div}
        variants={homeVariant}
      >
        <Box
          w={['90%', '70%', '40%']}
          transform={mobile ? 'translateY(-0.5rem)' : ''}
          bgGradient="linear(to-b,#4b6cb7,#182848)"
          boxShadow={mobile ? '0 -4px 4px rgba(0,0,0,0.1)' : ''}
          p={3}
          rounded="sm"
          as={motion.div}
          variants={childVariant}
        >
          <VStack p={2} as={motion.div} variants={homeVariant}>
            {details.map((item, key) => (
              <VStack
                w="full"
                key={key}
                as={item.href ? Link : 'div'}
                href={item.href}
                as={motion.div}
                variants={childVariant}
              >
                <HStack as={motion.div} variants={childVariant}>
                  {item.icon}
                  <Text fontSize="lg" fontWeight="600">
                    {item.title}
                  </Text>
                </HStack>
                <Text fontSize="lg" color="gray.100">
                  {item.value}
                </Text>
                <Divider />
              </VStack>
            ))}
          </VStack>
        </Box>
        {!mobile && (
          <Box
            w={['100%', '80%', '45%']}
            bgGradient="linear(to-b,#8ec5fc 0%,#e0c3fc 100% )"
            h="20rem"
            transform={!mobile ? 'translateX(-0.5rem)' : ''}
            boxShadow={!mobile ? '-4px 0 4px rgba(0,0,0,0.1)' : ''}
            as={motion.div}
            variants={childVariant}
          >
            <Image
              src="/images/contact.jpg"
              boxSize="full"
              objectFit="cover"
              alt="A picture of a girl "
            />
          </Box>
        )}
      </Stack>
    </VStack>
  )
}

export default Contact
