import {
  Box,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
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
  return (
    <SimpleGrid
      spacing={3}
      minChildWidth={['270px', '250px']}
      w="full"
      placeItems={'center'}
      my={3}
    >
      {projects.map((item, key) => (
        <Box
          w="full"
          maxW="20rem"
          bg="#242424"
          p={3}
          key={key}
          as={motion.div}
          whileHover={{
            scaleX: 1.1,
            y: 4,
          }}
        >
          <HStack spacing={3}>
            <Box w="4rem">
              <Image src={item.image} alt="something" boxSize="full" />
            </Box>
            <VStack alignItems="flex-start" spacing={0}>
              <Heading>{item.total}</Heading>
              <Text>{item.type}</Text>
            </VStack>
          </HStack>
        </Box>
      ))}
    </SimpleGrid>
  )
}

export default Projects
