import { Flex, Spinner } from '@chakra-ui/react'
import { AuthorCard } from 'components/molecules'
import { Text } from 'components/atoms'

export const AuthorList = ({ data, isLoading }) => {
  return (
    <Flex flexDir="column" mt={['24px', '48px']}>
      <Text.ScreenTitle>Autores</Text.ScreenTitle>
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
        {isLoading && (
          <Flex alignItems="center" justifyContent="center">
            <Spinner />
          </Flex>
        )}
        {!isLoading && data?.length === 0 && (
          <Flex alignItems="center" justifyContent="center">
            <Text>Nenhum autor encontrado.</Text>
          </Flex>
        )}
        {data &&
          data?.map((item) => (
            <AuthorCard key={`author_${item.id}`} {...item} />
          ))}
      </Flex>
    </Flex>
  )
}
