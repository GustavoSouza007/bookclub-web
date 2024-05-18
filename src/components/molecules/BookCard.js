/* eslint-disable camelcase */
import { Flex } from '@chakra-ui/react'
import { Text } from 'components/atoms'
import { useNavigate } from 'react-router-dom'

export const BookCard = ({ id, cover_url, name, author }) => {
  const navigate = useNavigate()

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      mr={['24px', '24px', '24px', '28px', '28px', '0px']}
      cursor="pointer"
      onClick={() => navigate(`/book-detail/${id}`)}
    >
      <Flex
        w={['136px', '146px', '156px', '156px', '160px']}
        h={['200px', '210px', '220px', '220px', '230px']}
        borderRadius={['8px', '8px', '10px', '12px']}
        background={`url(${cover_url})`}
        backgroundSize="cover"
        backgroundPosition="center"
        border="solid"
        borderWidth="1px"
        borderColor="brand.black"
      />
      <Text
        maxWidth="140px"
        noOfLines={1}
        mt="8px"
        fontSize={['12px', '14px']}
        fontWeight="600"
        textAlign="center"
      >
        {name}
      </Text>
      <Text mr="4px" fontSize={['10px', '12px']}>
        {author?.name}
      </Text>
    </Flex>
  )
}

BookCard.Category = ({ id, cover_url, name, author }) => {
  const navigate = useNavigate()
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      mb="16px"
      mr={['24px', '24px', '24px', '28px', '28px', '32px']}
      cursor="pointer"
      onClick={() => navigate(`/book-detail/${id}`)}
    >
      <Flex
        w={['136px', '146px', '156px', '156px', '160px']}
        h={['200px', '210px', '220px', '220px', '230px']}
        borderRadius={['8px', '8px', '12px']}
        background={`url(${cover_url})`}
        backgroundSize="cover"
        backgroundPosition="center"
        border="solid"
        borderWidth="1px"
        borderColor="brand.black"
      />
      <Text
        noOfLines={1}
        textAlign="center"
        mt="8px"
        fontSize={['12px', '14px']}
        fontWeight="600"
      >
        {name}
      </Text>
      <Text mr="4px" fontSize={['10px', '12px']}>
        {author?.name}
      </Text>
    </Flex>
  )
}

BookCard.Favorites = ({ id, cover_url, name, author }) => {
  const navigate = useNavigate()
  return (
    <Flex
      w={['136px', '146px', '156px', '156px', '160px']}
      flexDir="column"
      alignItems="center"
      mb="16px"
      cursor="pointer"
      onClick={() => navigate(`/book-detail/${id}`)}
    >
      <Flex
        w={['136px', '146px', '156px', '156px', '160px']}
        h={['200px', '210px', '220px', '220px', '230px']}
        borderRadius={['8px', '8px', '12px']}
        background={`url(${cover_url})`}
        backgroundSize="cover"
        backgroundPosition="center"
        border="solid"
        borderWidth="1px"
        borderColor="brand.black"
      />
      <Text
        noOfLines={1}
        textAlign="center"
        mt="8px"
        fontSize={['12px', '14px']}
        fontWeight="600"
      >
        {name}
      </Text>
      <Text mr="4px" fontSize={['10px', '12px']}>
        {author?.name}
      </Text>
    </Flex>
  )
}

BookCard.Category.displayName = 'Category'
BookCard.Favorites.displayName = 'Favorites'
