import {
  Box,
  Heading,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
const CardGrid = ({ image, name, desc, h }) => {
  const bg = useColorModeValue('#0d0c1b', '#fff')
  const color = useColorModeValue('#fff', '#000')
  return (
    <Box
      as={motion.div}
      w="full"
      maxW="20rem"
      p={2}
      shadow="sm"
      bg={bg}
      minH="24rem"
      rounded="sm"
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
    >
      <VStack boxSize="full">
        <Box
          w="full"
          display="flex"
          justifyContent={'center'}
          alignItems="center"
        >
          <Image
            src={image}
            alt={name}
            boxSize="full"
            objectFit="cover"
            w="80%"
          />
        </Box>
        <Heading size="md" color="secondary" textAlign="center">
          {name}
        </Heading>
        <Text color={color}>{desc}</Text>
      </VStack>
    </Box>
  )
}

export default CardGrid
