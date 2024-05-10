import { Flex } from '@chakra-ui/react'
import { Navbar, BookList, CategoryList } from 'components'

export const HomeScreen = () => {
  return (
    <Flex flexDir="column">
      <Navbar />
      <Flex
        w="100%"
        h="200px"
        mt="48px"
        paddingX={['24px', '48px', '48px', '112px']}
      >
        <Flex
          w="100%"
          h="100%"
          borderRadius="24px"
          backgroundImage="url('/img/banner.svg')"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        />
      </Flex>
      <BookList />
      <CategoryList />
    </Flex>
  )
}
