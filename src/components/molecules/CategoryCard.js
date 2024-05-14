import { Flex } from '@chakra-ui/react'
import { Text } from 'components/atoms'

export const CategoryCard = ({ id, name, selected, onClick }) => {
  return (
    <Flex
      h="36px"
      alignItems="center"
      justifyContent="center"
      paddingX="14px"
      paddingY="12px"
      mr="8px"
      borderRadius="8px"
      borderStyle="solid"
      borderWidth="1px"
      borderColor={selected ? 'brand.black' : 'brand.greyLight'}
      bg={selected ? 'brand.black' : 'brand.background'}
      onClick={onClick}
      cursor="pointer"
    >
      <Text
        fontSize={['12px', '14px']}
        fontWeight="500"
        color={selected ? 'brand.white' : 'brand.black'}
      >
        {name}
      </Text>
    </Flex>
  )
}
