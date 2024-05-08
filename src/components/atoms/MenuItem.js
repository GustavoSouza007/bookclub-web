import { MenuItem as ChakraMenuItem, Icon } from '@chakra-ui/react'
import { Text } from 'components/atoms'

export const MenuItem = ({ icon, text, divider }) => (
  <ChakraMenuItem
    h="48px"
    borderBottomWidth={divider ? '2px' : '0px'}
    borderBottomStyle="solid"
    borderBottomColor="brand.greyLight"
  >
    <Icon boxSize="18px" color="brand.greyDark" mr="8px" as={icon} />
    <Text color="brand.greyDark" fontWeight="500">
      {text}
    </Text>
  </ChakraMenuItem>
)
