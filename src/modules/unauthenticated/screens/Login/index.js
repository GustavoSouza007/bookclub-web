import { Flex, Image } from '@chakra-ui/react'

import { Text, Input, Link, Button } from 'components'

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
          <Text.ScreenTitle mt="48px">Login</Text.ScreenTitle>
          <Input mt="24px" placeholder="email" />
          <Input.Password mt="16px" placeholder="senha" />
          <Flex w="100%" justifyContent="flex-end" mt="8px">
            <Link>Esqueceu sua senha?</Link>
          </Flex>
          <Button mt="24px">Entrar</Button>
          <Flex flexDir="column" alignItems="center" mt="48px">
            <Text color="brand.greyDark">Não possui uma conta?</Text>
            <Link.Action actiontext="Cadastre-se aqui." />
          </Flex>
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
