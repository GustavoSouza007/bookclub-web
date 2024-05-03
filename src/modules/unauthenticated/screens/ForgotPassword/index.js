import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Button } from 'components'
import { useNavigate } from 'react-router-dom'

export const ForgotPasswordScreen = () => {
  const navigate = useNavigate()
  return (
    <Flex w="100vw" h="100vh" flexDir="row">
      <Flex
        w={['100%', '100%', '50%', '50%', '40%']}
        h="100%"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        padding={['24px', '48px', '48px', '48px']}
      >
        <Flex w={['100%', '416px', '100%', '416px']} flexDir="column">
          <Image w="160px" h="48px" src="/img/logo.svg" alt="BookClub Logo" />
          <Text.ScreenTitle mt="48px">Esqueceu senha</Text.ScreenTitle>
          <Text mt="24px">
            Digite abaixo seu e-mail que enviaremos um código de recuperação e
            senha:
          </Text>
          <Input mt="24px" placeholder="Email" />
          <Button mt="24px" onClick={() => navigate('/reset-password')}>
            Avançar
          </Button>
        </Flex>
      </Flex>
      <Flex
        w={['0%', '0%', '50%', '50%', '60%']}
        h="100%"
        backgroundImage="url('/img/auth-background.svg')"
        backgroundSize="cover"
        backgroundPosition="24% 70%"
        backgroundRepeat="no-repeat"
        borderTopLeftRadius="32px"
        borderBottomLeftRadius="32px"
      />
    </Flex>
  )
}
