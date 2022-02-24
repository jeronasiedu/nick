import { Flex, HStack, Image, Link, Stack, Text } from '@chakra-ui/react'
import { BiCopyright } from 'react-icons/all'
const Footer = () => {
  const links = [
    {
      url: 'https://instagram.com/adooba.gh?utm_medium=copy_link',
      icon: '/images/instagram.png',
    },
    {
      url: 'https://facebook.com/adoobaOfficial',
      icon: '/images/facebook.png',
    },
  ]
  const date = new Date().getFullYear()
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      w="full"
      borderTop="1px"
      borderColor="gray.300"
      pt="4"
      pl="3"
      direction={['column', 'column', 'row']}
    >
      <HStack>
        {links.map((item, key) => (
          <Link href={item.url} isExternal key={key}>
            <Image
              src={item.icon}
              alt="twitter image"
              boxSize={['2rem', '2rem', '2.8rem']}
            />
          </Link>
        ))}
      </HStack>
      <Stack fontSize="xl" direction={['column', 'column', 'row']}>
        <Flex align="center" gap="1">
          <BiCopyright size="22" />
          <Text fontSize={['lg', 'lg', 'xl']}>
            Copyright{' '}
            <span
              style={{
                fontWeight: '600',
              }}
            >
              Adooba.
            </span>
          </Text>
        </Flex>
        <Text fontSize={['lg', 'lg', 'xl']}>All Rights Reserved {date} </Text>
      </Stack>
    </Stack>
  )
}

export default Footer
