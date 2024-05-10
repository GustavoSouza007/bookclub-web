/* eslint-disable camelcase */
import { Flex } from '@chakra-ui/react'
import { Text } from 'components/atoms'

export const BookCard = ({ cover_url, name, author }) => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Flex
        w="160px"
        h="230px"
        borderRadius="12px"
        background={`url(${cover_url})`}
        backgroundSize="cover"
        backgroundPosition="center"
        border="solid"
        borderWidth="1px"
        borderColor="brand.black"
      />
      <Text mt="8px" fontSize="14px" fontWeight="600">
        {name}
      </Text>
      <Text mr="4px" fontSize="12px">
        {author?.name}
      </Text>
    </Flex>
  )
}

BookCard.Category = ({ cover_url, name, author }) => {
  return (
    <Flex flexDir="column" alignItems="center" mr="32px">
      <Flex
        w="160px"
        h="230px"
        borderRadius="12px"
        background={`url(${cover_url})`}
        backgroundSize="cover"
        backgroundPosition="center"
        border="solid"
        borderWidth="1px"
        borderColor="brand.black"
      />
      <Text
        w="160px"
        textAlign="center"
        mt="8px"
        fontSize="14px"
        fontWeight="600"
      >
        {name}
      </Text>
      <Text mr="4px" fontSize="12px">
        {author?.name}
      </Text>
    </Flex>
  )
}

BookCard.Category.displayName = 'Category'
