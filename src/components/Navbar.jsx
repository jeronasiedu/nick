import {
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  Spacer,
  Text,
  useColorMode,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  VStack,
  Divider,
  Box,
} from '@chakra-ui/react'
import { BiMoon, BiSun, HiOutlineViewGridAdd } from 'react-icons/all'
import { useRef } from 'react'
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const links = [
    {
      name: 'Home',
      url: '#',
    },
    {
      name: 'About',
      url: '#',
    },
    {
      name: 'Services',
      url: '#',
    },
    {
      name: 'Portfolio',
      url: '#',
    },
    {
      name: 'Contact',
      url: '#',
    },
  ]
  return (
    <>
      <HStack w="full" p={3} px={5} as="nav">
        <Box w="5rem">
          <Image src="/images/logo.png" alt="Website logo" boxSize="100%" />
        </Box>
        <Spacer />
        <HStack d={['none', 'none', 'inline-flex']}>
          {links.map((item, key) => (
            <Link href={item.href} key={key} fontSize="lg">
              {item.name}
            </Link>
          ))}
        </HStack>

        <IconButton
          icon={<HiOutlineViewGridAdd />}
          onClick={onOpen}
          d={['inline-flex', 'inline-flex', 'none']}
        />
        {/* Drawer  for mobile Devices */}
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Welcome to Adoba</DrawerHeader>
            <DrawerBody>
              <VStack>
                {links.map((item, key) => (
                  <Link href={item.href} key={key}>
                    {item.name}
                  </Link>
                ))}
              </VStack>
            </DrawerBody>
            <DrawerFooter>
              <Text>Social Links goes here</Text>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </HStack>
      <Divider />
    </>
  )
}

export default Navbar
