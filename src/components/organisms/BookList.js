import { Flex } from '@chakra-ui/react'
import { BookCard } from 'components/molecules'
import { Text, Loader, EmptyMessage } from 'components/atoms'

export const BookList = ({ title, data }) => {
  return (
    <Flex
      flexDir="column"
      mt={['24px', '48px']}
      paddingX={['24px', '24px', '48px', '48px', '112px']}
    >
      <Text.ScreenTitle>{title}</Text.ScreenTitle>
      <Flex
        flexDir="row"
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        mt={['12px', '12px', '24px']}
        overflowX={['scroll', 'scroll', 'scroll', 'scroll', 'scroll', 'hidden']}
        css={{
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {data &&
          data?.map((item) => <BookCard key={`book_${item.id}`} {...item} />)}
      </Flex>
    </Flex>
  )
}

BookList.Search = ({ title, data, isLoading }) => {
  return (
    <Flex flexDir="column" mt={['24px', '48px']}>
      <Text.ScreenTitle>{title}</Text.ScreenTitle>
      {isLoading && <Loader />}
      {(!data || data?.length === 0) && (
        <EmptyMessage>Nenhum livro encontrado.</EmptyMessage>
      )}
      <Flex
        flexDir="row"
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        mt={['12px', '12px', '24px']}
        overflowX={['scroll', 'scroll', 'scroll', 'scroll', 'scroll', 'hidden']}
        css={{
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {data &&
          data?.map((item) => (
            <BookCard.Category key={`book_${item.id}`} {...item} />
          ))}
      </Flex>
    </Flex>
  )
}

BookList.Search.displayName = 'Search'
