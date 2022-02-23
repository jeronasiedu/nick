import {
  Heading,
  SimpleGrid,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import CardGrid from './CardGrid'
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
      desc: 'We have a strong team of creatives working on our projects',
      image: '/images/values-3.png',
    },
  ]

  return (
    <VStack mt={'3rem'}>
      <Heading size="md" as="h3" color="primary">
        Our Values
      </Heading>
      <Heading
        size="lg"
        as="h3"
        color="#BBCEF3"
        textAlign={['center', 'center', 'left']}
      >
        The foundation to our company culture
      </Heading>
      <SimpleGrid
        spacing={3}
        minChildWidth={['270px', '250px']}
        w="full"
        placeItems={'center'}
      >
        {services.map((item, key) => (
          <CardGrid {...item} key={key} />
        ))}
      </SimpleGrid>
    </VStack>
  )
}

export default Services
