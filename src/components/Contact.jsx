import {
  Box,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react'
import { GoLocation, MdEmail, BiPhoneCall } from 'react-icons/all'
const Contact = () => {
  const [mobile] = useMediaQuery('(max-width:720px)')
  const details = [
    {
      icon: <GoLocation size={30} />,
      title: 'Address',
      value: 'Winneba, C/R Ghana',
    },
    {
      icon: <MdEmail size={30} />,
      title: 'Email Us',
      value: 'adooba.info@gmail.com',
    },
    {
      icon: <BiPhoneCall size={30} />,
      title: 'Call Us',
      value: '+233207623726',
    },
  ]
  return (
    <VStack my={'2rem'} id="contact">
      <Heading size="md" as="h3" color="primary">
        Our Contacts
      </Heading>
      <Heading
        size="lg"
        as="h3"
        color="#BBCEF3"
        textAlign={['center', 'center', 'left']}
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
        id="portfolio"
      >
        <Box
          w={['90%', '70%', '40%']}
          transform={mobile ? 'translateY(-0.5rem)' : ''}
          bgGradient="linear(to-b,#4b6cb7,#182848)"
          boxShadow={mobile ? '0 -4px 4px rgba(0,0,0,0.1)' : ''}
          p={3}
          rounded="sm"
        >
          <VStack p={2}>
            {details.map((item, key) => (
              <VStack w="full" key={key}>
                <HStack>
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
          >
            <Image
              src="/images/girl.jpeg"
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
