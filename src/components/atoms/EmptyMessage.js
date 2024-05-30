import { Flex } from '@chakra-ui/react'
import { Text } from './Text'

export const EmptyMessage = ({ children }) => (
  <Flex alignItems="center" justifyContent="center" mt={['24px', '48px']}>
    <Text>{children}</Text>
  </Flex>
)
