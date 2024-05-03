import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  Button
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { Text } from 'components/atoms'

export const Input = (props) => (
  <>
    <ChakraInput
      h="56px"
      focusBorderColor="brand.primary"
      placeholder={props.placeholder}
      {...props}
    />
    {props.error && <Text color="red">{props.error}</Text>}
  </>
)

Input.Password = ({ value, onChange, id, name, ...props }) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <>
      <InputGroup h="56px" size="md" {...props}>
        <Input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          focusBorderColor="brand.primary"
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          placeholder={props.placeholder}
        />
        <InputRightElement h="100%">
          <Button
            bg="transparent"
            _hover={{ bg: 'transparent' }}
            h="1.75rem"
            size="sm"
            onClick={handleClick}
          >
            {show ? (
              <ViewOffIcon boxSize="20px" color="brand.primary" />
            ) : (
              <ViewIcon boxSize="20px" color="brand.primary" />
            )}
          </Button>
        </InputRightElement>
      </InputGroup>
      {props.error && <Text color="red">{props.error}</Text>}
    </>
  )
}

Input.Password.displayName = 'InputPassword'
