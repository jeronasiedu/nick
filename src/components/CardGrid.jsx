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
  return (
    <Box
      as={motion.div}
      w="full"
      p={['0', '0', '2']}
      maxW={['auto', 'auto', '20rem']}
      shadow="sm"
      bg="#fff"
      minH="21rem"
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
            w="60%"
          />
        </Box>
        <Heading size="md" color="secondary" textAlign="center">
          {name}
        </Heading>
        <Text color="#000" textAlign="center">
          {desc}
        </Text>
      </VStack>
    </Box>
  )
}

export default CardGrid
