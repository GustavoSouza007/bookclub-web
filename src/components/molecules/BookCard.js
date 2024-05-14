/* eslint-disable camelcase */
import { Flex } from '@chakra-ui/react'
import { Text } from 'components/atoms'

export const BookCard = ({ cover_url, name, author }) => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      mr={['24px', '24px', '24px', '28px', '28px', '0px']}
    >
      <Flex
        w={['126px', '126px', '134px', '140px', '160px']}
        h={['180px', '180px', '188px', '194px', '230px']}
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

BookCard.Category = ({ cover_url, name, author }) => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      mr={['24px', '24px', '24px', '28px', '28px', '32px']}
    >
      <Flex
        w={['126px', '126px', '134px', '140px', '160px']}
        h={['180px', '180px', '188px', '194px', '230px']}
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
