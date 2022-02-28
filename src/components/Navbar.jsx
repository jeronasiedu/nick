import {
  HStack,
  IconButton,
  Image,
  Link,
  Spacer,
  useDisclosure,
  Divider,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { Link as ScrollLink } from 'react-scroll'
import { BiMenu } from 'react-icons/all'
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
        <Box
          w="5rem"
          as={ScrollLink}
          to="home"
          spy={true}
          smooth={true}
          cursor="pointer"
          offset={-60}
        >
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

        <Menu>
          <MenuButton
            as={IconButton}
            icon={<BiMenu />}
            d={['inline-flex', 'inline-flex', 'none']}
            bg="blackAlpha.600"
            border="1px"
            borderColor="gray.700"
          ></MenuButton>
          <MenuList bg="#1f1f25" borderColor="#16161b">
            {links.map((item, key) => (
              <MenuItem key={key}>
                <ScrollLink
                  to={item.url}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  activeClass="activeLink"
                  style={{
                    width: '100%',
                  }}
                >
                  {item.name}
                </ScrollLink>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </HStack>
      <Divider />
    </>
  )
}

export default Navbar
