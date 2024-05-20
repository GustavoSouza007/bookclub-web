import { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { Navbar, Text, BookList, AuthorList } from 'components'
import { searchQuery } from 'services/api/requests'
import { useQuery } from 'react-query'

export const SearchScreen = () => {
  const [query, setQuery] = useState('')
  const { data, isLoading } = useQuery(
    ['search', query],
    () => searchQuery(query),
    {
      enabled: query.length >= 3
    }
  )

  return (
    <Flex flexDir="column">
      <Navbar query={query} setQuery={setQuery} />
      <Flex
        w="100%"
        flexDir="column"
        alignItems={['flex-start']}
        justifyContent={['flex-start']}
        mt={['24px', '24px', '32px', '48px']}
        paddingX={['24px', '24px', '48px', '48px', '112px']}
      >
        <Flex>
          <Text.ScreenTitle>Resultados da Pesquisa:</Text.ScreenTitle>
        </Flex>

        <Flex
          w="100%"
          overflowX={[
            'scroll',
            'scroll',
            'scroll',
            'scroll',
            'scroll',
            'hidden'
          ]}
          css={{
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          <BookList.Search
            title="Livros"
            data={data?.data?.books}
            isLoading={isLoading}
          />
        </Flex>
        <Flex
          w="100%"
          overflowX={[
            'scroll',
            'scroll',
            'scroll',
            'scroll',
            'scroll',
            'hidden'
          ]}
          css={{
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          <AuthorList data={data?.data?.authors} isLoading={isLoading} />
        </Flex>
      </Flex>
    </Flex>
  )
}
