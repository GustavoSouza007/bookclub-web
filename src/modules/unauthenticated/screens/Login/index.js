import { Flex, Image, Text, Input, Link, Button } from '@chakra-ui/react'

export const LoginScreen = () => {
  return (
    <Flex w="100vw" h="100vh" flexDir="row">
      <Flex
        w="40%"
        h="100%"
        flexDir="column"
        alignItems="flex-start"
        justifyContent="center"
        paddingLeft="112px"
      >
        <Flex w="416px" flexDir="column">
          <Image w="160px" h="48px" src="/img/logo.svg" alt="BookClub Logo" />
          <Text mt="48px">Login</Text>
          <Input mt="24px" placeholder="email" />
          <Input mt="16px" placeholder="senha" />
          <Link mt="8px">Esqueceu sua senha?</Link>
          <Button mt="24px">Login</Button>
          <Link mt="48px">Não possui uma conta? Cadastre-se aqui.</Link>
        </Flex>
      </Flex>
      <Flex
        w="60%"
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
