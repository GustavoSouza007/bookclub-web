/* eslint-disable camelcase */
import { Flex } from '@chakra-ui/react'
import { Text } from 'components/atoms'
import { useNavigate } from 'react-router-dom'

export const AuthorCard = ({ id, avatar_url, name }) => {
  const navigate = useNavigate()
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      mb="16px"
      mr={['24px', '24px', '24px', '28px', '28px', '32px']}
      cursor="pointer"
      onClick={() => navigate(`/author-detail/${id}`)}
    >
      <Flex
        w={['136px', '146px', '156px', '156px', '160px']}
        h={['200px', '210px', '220px', '220px', '230px']}
        borderRadius={['8px', '8px', '12px']}
        background={`url(${avatar_url})`}
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
    </Flex>
  )
}
