import { Flex, Spinner } from '@chakra-ui/react'

export const Loader = () => (
  <Flex alignItems="center" justifyContent="center" mt={['24px', '48px']}>
    <Spinner />
  </Flex>
)
