import { Flex, useToast } from '@chakra-ui/react'
import { Navbar, Text, Button, CategoryList } from 'components'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from 'react-query'
import {
  getBookDetail,
  addBookToFavorites,
  deleteBookFromFavorites
} from 'services/api/requests'

export const BookDetailScreen = () => {
  const { id } = useParams()
  const toast = useToast()
  const { data, refetch, isLoading } = useQuery(
    ['bookDetail', id],
    () => getBookDetail(id),
    {
      enabled: !!id
    }
  )

  const addFavoriteMutation = useMutation((data) => addBookToFavorites(data), {
    onError: (error) => {
      toast({
        title: 'Falha ao adicionar aos favoritos.',
        description:
          error?.response?.data?.error || 'Por favor, tente novamente',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
      refetch()
    },
    onSuccess: () => {
      toast({
        title: 'Adicionado aos favoritos com sucesso!',
        status: 'success',
        duration: 3000,
        isClosable: true
      })
      refetch()
    }
  })

  const deleteFavoriteMutation = useMutation(
    (data) => deleteBookFromFavorites(data),
    {
      onError: (error) => {
        toast({
          title: 'Falha ao remover dos favoritos.',
          description:
            error?.response?.data?.error || 'Por favor, tente novamente',
          status: 'error',
          duration: 3000,
          isClosable: true
        })
        refetch()
      },
      onSuccess: () => {
        toast({
          title: 'Removido dos favoritos com sucesso!',
          status: 'success',
          duration: 3000,
          isClosable: true
        })
        refetch()
      }
    }
  )

  const handleButtonClick = () => {
    if (data?.data?.favorite) {
      deleteFavoriteMutation.mutate(data?.data?.favorite?.id)
    } else {
      addFavoriteMutation.mutate({
        book_id: id
      })
    }
  }

  return (
    <Flex flexDir="column">
      <Navbar />
      <Flex
        flexDir="row"
        w="100%"
        mt={['24px', '24px', '32px', '48px']}
        paddingX={['24px', '24px', '48px', '48px', '112px']}
      >
        <Flex
          w={['238px']}
          h={['358px']}
          borderRadius={['12px']}
          background={`url(${data?.data?.book?.cover_url})`}
          backgroundSize="cover"
          backgroundPosition={['center']}
          backgroundRepeat="no-repeat"
        />

        <Flex w="70%" flexDir="column" mx="48px">
          <Text.ScreenTitle fontSize="24px">
            {data?.data?.book?.name}
          </Text.ScreenTitle>
          <Text mt="6px" fontSize="16px" color="brand.greyDark">
            {data?.data?.book?.author?.name}
          </Text>

          <Text.ScreenTitle mt="16px">Informações</Text.ScreenTitle>
          <Flex mt="4px" w="100%" flexDir="row" justifyContent="space-between">
            <Text fontSize="14px" color="brand.greyDark">
              Categoria: {data?.data?.book?.category?.name}
            </Text>
            <Text fontSize="14px" color="brand.greyDark">
              Páginas: {data?.data?.book?.pages}
            </Text>
            <Text fontSize="14px" color="brand.greyDark">
              Ano de lançamento:
              {new Date(data?.data?.book?.release_date).getFullYear()}
            </Text>
          </Flex>
          <Text.ScreenTitle mt="16px">Sinopse</Text.ScreenTitle>
          <Text
            textAlign="left"
            mt="4px"
            fontSize="14px"
            color="brand.greyDark"
          >
            {data?.data?.book?.synopsis}
          </Text>
        </Flex>
        <Flex>
          <Button
            isLoading={
              isLoading ||
              addFavoriteMutation.isLoading ||
              deleteFavoriteMutation.isLoading
            }
            secondary={data?.data?.favorite}
            onClick={() => handleButtonClick()}
          >
            {data?.data?.favorite
              ? 'Remover dos favoritos'
              : 'Adicionar aos favoritos'}
          </Button>
        </Flex>
      </Flex>
      <CategoryList
        title="Livros Relacionados"
        categoryId={data?.data?.book?.category?.id}
      />
    </Flex>
  )
}
