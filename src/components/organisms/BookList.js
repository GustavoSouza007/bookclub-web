import { Flex } from '@chakra-ui/react'
import { BookCard } from 'components/molecules'
import { Text } from 'components/atoms'

export const BookList = ({ data, errror, isLoading }) => {
  return (
    <Flex
      flexDir="column"
      mt="48px"
      paddingX={['24px', '48px', '48px', '112px']}
    >
      <Text.ScreenTitle>Destaques</Text.ScreenTitle>
      <Flex
        flexDir="row"
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        mt="24px"
      >
        {data &&
          data?.map((item) => <BookCard key={`book_${item.id}`} {...item} />)}
      </Flex>
    </Flex>
  )
}
