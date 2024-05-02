import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, ...props }) => (
  <ChakraButton
    h="56px"
    fontWeight="bold"
    borderRadius="16px"
    bg="brand.primary"
    _hover={{
      bg: 'brand.primary'
    }}
    {...props}
  >
    {children}
  </ChakraButton>
)
