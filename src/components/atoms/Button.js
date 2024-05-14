import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, secondary, ...props }) => (
  <ChakraButton
    h="56px"
    fontWeight="bold"
    borderRadius="16px"
    bg={secondary ? 'brand.greyDark' : 'brand.primary'}
    _hover={{
      bg: secondary ? 'red' : 'brand.primary'
    }}
    textColor={secondary ? 'brand.background' : 'brand.black'}
    {...props}
  >
    {children}
  </ChakraButton>
)
