import { Flex } from '@chakra-ui/react'
import { AuthorCard } from 'components/molecules'
import { Text, Loader, EmptyMessage } from 'components/atoms'

export const AuthorList = ({ data, isLoading }) => {
  return (
    <Flex flexDir="column" mt={['24px', '48px']}>
      <Text.ScreenTitle>Autores</Text.ScreenTitle>
      {isLoading && <Loader />}
      {(!data || data?.length === 0 || !data) && (
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
            <AuthorCard key={`author_${item.id}`} {...item} />
          ))}
      </Flex>
    </Flex>
  )
}
