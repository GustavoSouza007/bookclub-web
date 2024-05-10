import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { Flex } from '@chakra-ui/react'
import { Text } from 'components/atoms'
import { CategoryCard, BookCard } from 'components/molecules'
import { getCategories, getBooksByCategory } from 'services/api/requests'

export const CategoryList = () => {
  const [selected, setSelected] = useState()
  const { data } = useQuery('categories', getCategories)
  const bookQuery = useQuery(['booksById', selected], () =>
    getBooksByCategory(selected)
  )

  useEffect(() => {
    if (!selected && data?.data) {
      setSelected(data?.data[0].id)
    }
  }, [data])

  return (
    <Flex
      h="400px"
      flexDir="column"
      mt="48px"
      paddingX={['24px', '48px', '48px', '112px']}
    >
      <Text.ScreenTitle>Categorias</Text.ScreenTitle>
      <Flex flexDir="row" mt="12px">
        {data?.data &&
          data?.data.map((item) => (
            <CategoryCard
              key={`book_${item.id}`}
              selected={selected === item.id}
              onClick={() => setSelected(item.id)}
              {...item}
            />
          ))}
      </Flex>
      <Flex flexDir="row" mt="12px">
        {bookQuery?.data &&
          bookQuery?.data?.data.map((item) => (
            <BookCard.Category key={`book_${item.id}`} {...item} />
          ))}
      </Flex>
    </Flex>
  )
}
