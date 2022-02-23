import { Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import CardGrid from './CardGrid'

const Business = () => {
  const business = [
    {
      image: '/images/ux.png',
      name: 'Website Design & Management',
      desc: 'Web development, Web hosting, Website Management, Web app development, SEO and more',
    },
    {
      image: '/images/apps.png',
      name: 'Website Design & Management',
      desc: 'Native IOS apps, Native android apps, crossPlatforms',
    },
    {
      image: '/images/web-design.png',
      name: 'Website Design & Management',
      desc: 'Web development, Web hosting, Website Management, Web app development, SEO and more',
    },
  ]
  return (
    <VStack my={'2rem'} id="services">
      <Heading
        size="lg"
        as="h3"
        color="#BBCEF3"
        textAlign={['center', 'center', 'left']}
      >
        Let's help your business with our services
      </Heading>
      <SimpleGrid
        spacing={3}
        minChildWidth={['270px', '250px']}
        w="full"
        placeItems={'center'}
      >
        {business.map((item, key) => (
          <CardGrid {...item} key={key} w="35%" />
        ))}
      </SimpleGrid>
    </VStack>
  )
}

export default Business
