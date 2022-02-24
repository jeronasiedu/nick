import { Box, Heading, Image, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
const CardGrid = ({ image, name, desc, w }) => {
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
  return (
    <Box
      as={motion.div}
      variants={childVariant}
      w="full"
      p="2"
      maxW={['auto', 'auto', '20rem']}
      shadow="sm"
      bg="#fff"
      minH="18.5rem"
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
            w={w || '50%'}
          />
        </Box>
        <Heading size="md" color="secondary" textAlign="center">
          {name}
        </Heading>
        <Text color="#000" textAlign="center" fontSize="lg">
          {desc}
        </Text>
      </VStack>
    </Box>
  )
}

export default CardGrid
