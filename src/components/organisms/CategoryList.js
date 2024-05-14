import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { Flex } from '@chakra-ui/react'
import { Text } from 'components/atoms'
import { CategoryCard, BookCard } from 'components/molecules'
import { getCategories, getBooksByCategory } from 'services/api/requests'

export const CategoryList = ({ title, categoryId }) => {
  const [selected, setSelected] = useState(categoryId)
  const { data } = useQuery('categories', getCategories)
  const bookQuery = useQuery(
    ['booksById', selected],
    () => getBooksByCategory(selected),
    {
      enabled: !!selected
    }
  )

  useEffect(() => {
    if (!selected && data?.data) {
      setSelected(data?.data[0].id)
    }
  }, [data])

  return (
    <Flex
      h={['350px', '400px']}
      flexDir="column"
      mt="48px"
      paddingX={['24px', '24px', '48px', '48px', '112px']}
    >
      <Text.ScreenTitle>{title || 'Categorias'}</Text.ScreenTitle>
      {!categoryId && (
        <Flex
          flexDir="row"
          mt="12px"
          overflowX={['scroll', 'scroll', 'scroll', 'hidden']}
          css={{
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
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
      )}
      <Flex
        flexDir="row"
        mt="12px"
        overflowX={['scroll', 'scroll', 'scroll', 'scroll', 'scroll', 'hidden']}
        css={{
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {bookQuery?.data &&
          bookQuery?.data?.data.map((item) => (
            <BookCard.Category key={`book_${item.id}`} {...item} />
          ))}
      </Flex>
    </Flex>
  )
}
