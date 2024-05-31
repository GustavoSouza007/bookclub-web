import { Flex } from '@chakra-ui/react'
import { Navbar, Text, BookList } from 'components'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getAuthorDetail } from 'services/api/requests'

export const AuthorDetailScreen = () => {
  const { id } = useParams()
  const { data, isLoading } = useQuery(
    ['authorDetail', id],
    () => getAuthorDetail(id),
    {
      enabled: !!id
    }
  )

  return (
    <Flex flexDir="column" mb="20px">
      <Navbar />
      <Flex
        flexDir={['column', 'column', 'column', 'row']}
        alignItems={['center', 'center', 'center', 'flex-start']}
        justifyContent={['center', 'center', 'center', 'flex-start']}
        w="100%"
        mt={['24px', '24px', '32px', '48px']}
        paddingX={['24px', '24px', '48px', '48px', '112px']}
      >
        <Flex
          w={['190px', '210px', '210px', '266px', '310px', '238px']}
          h={['276px', '296px', '296px', '300px', '358px', '358px']}
          borderRadius={['12px']}
          background={`url(${data?.data?.avatar_url})`}
          backgroundSize="cover"
          backgroundPosition={['center']}
          backgroundRepeat="no-repeat"
          border="solid"
          borderWidth="1px"
          borderColor="brand.black"
        />

        <Flex
          mt={['24px', '24px', '0px']}
          w={['100%', '100%', '100%', '70%']}
          flexDir="column"
          mx={['0px', '0px', '48px']}
        >
          <Text.ScreenTitle
            mt={['0px', '0px', '12px', '0px']}
            fontSize="24px"
            textAlign={['center', 'center', 'center', 'left']}
          >
            {data?.data?.name}
          </Text.ScreenTitle>

          <Text.ScreenTitle mt="16px">Sobre o(a) autor(a)</Text.ScreenTitle>

          <Text
            textAlign="left"
            mt="4px"
            fontSize="14px"
            color="brand.greyDark"
          >
            {data?.data?.bio}
          </Text>
        </Flex>
      </Flex>
      <BookList
        title="Livros do(a) autor(a)"
        data={data?.data?.book}
        isLoading={isLoading}
      />
    </Flex>
  )
}
