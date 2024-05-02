import { Link as ChakraLink } from '@chakra-ui/react'

export const Link = ({ children, ...props }) => (
  <ChakraLink fontSize="14px" color="brand.greyDark" {...props}>
    {children}
  </ChakraLink>
)

Link.Action = ({ actiontext, ...props }) => (
  <ChakraLink fontSize="16px" fontWeight="bold" color="brand.black" {...props}>
    {actiontext}
  </ChakraLink>
)

Link.Action.displayName = 'LinkAction'
