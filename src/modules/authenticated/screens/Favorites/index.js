import { Flex } from '@chakra-ui/react'
import { Navbar, Text, BookCard } from 'components'
import { useQuery } from 'react-query'
import { getFavorites } from 'services/api/requests'

export const FavoritesScreen = () => {
  const { data } = useQuery('getFavorites', getFavorites)
  return (
    <Flex flexDir="column">
      <Navbar />
      <Flex
        flexDir="column"
        mt={['24px', '24px', '32px', '48px']}
        paddingX={['24px', '24px', '48px', '48px', '112px']}
      >
        <Text.ScreenTitle>Favoritos</Text.ScreenTitle>
        <Flex
          flexWrap="wrap"
          flexDir="row"
          gap={['8', '4', '4', '4', '8']}
          justifyContent={['center', 'flex-start']}
          mt="24px"
        >
          {data?.data?.map((item) => (
            <BookCard.Favorites
              key={`book_list_favorites_${item.book.id}`}
              {...item.book}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}
