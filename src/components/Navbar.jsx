import {
  HStack,
  IconButton,
  Image,
  Link,
  Spacer,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Divider,
  Box,
} from '@chakra-ui/react'
import { Link as ScrollLink } from 'react-scroll'
import { HiOutlineViewGridAdd } from 'react-icons/all'
import { useRef } from 'react'
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const links = [
    {
      name: 'Home',
      url: 'home',
    },
    {
      name: 'About',
      url: 'about',
    },
    {
      name: 'Services',
      url: 'services',
    },
    {
      name: 'Portfolio',
      url: 'portfolio',
    },
    {
      name: 'Contact',
      url: 'contact',
    },
  ]
  const handleActive = (to) => {
    console.log('active', to)
  }
  const handleInActive = (to) => {
    console.log('In Active', to)
  }
  return (
    <>
      <HStack
        w="full"
        p={3}
        px={5}
        as="nav"
        pos="sticky"
        top="0"
        left="0"
        bg="#000"
        shadow="sm"
        zIndex={1000}
      >
        <Box w="5rem">
          <Image src="/images/logo.png" alt="Website logo" boxSize="100%" />
        </Box>
        <Spacer />
        <HStack d={['none', 'none', 'inline-flex']} spacing={4}>
          {links.map((item, key) => (
            <Link
              key={key}
              fontSize="lg"
              as={ScrollLink}
              smooth={true}
              to={item.url}
              spy={true}
              activeClass="activeLink"
              isDynamic={true}
              offset={-60}
            >
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
                  <Link
                    key={key}
                    as={ScrollLink}
                    smooth={true}
                    to={item.url}
                    activeClass="activeLink"
                    onClick={onClose}
                    offset={-60}
                    isDynamic={true}
                    spy={true}
                  >
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
