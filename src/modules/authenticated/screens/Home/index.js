import { Flex } from '@chakra-ui/react'
import { Navbar, BookList, CategoryList } from 'components'

export const HomeScreen = () => {
  return (
    <Flex flexDir="column">
      <Navbar />
      <Flex
        w="100%"
        h={['66px', '90px', '120px', '160px', '180px', '200px']}
        mt={['24px', '24px', '32px', '48px']}
        paddingX={['24px', '24px', '48px', '48px', '112px']}
      >
        <Flex
          w="100%"
          h="100%"
          borderRadius={['8px', '8px', '24px']}
          backgroundImage="url('/img/banner.svg')"
          backgroundSize="cover"
          backgroundPosition={[
            'start',
            'start',
            'start',
            'start',
            'start',
            'center'
          ]}
          backgroundRepeat="no-repeat"
        />
      </Flex>
      <BookList />
      <CategoryList />
    </Flex>
  )
}
