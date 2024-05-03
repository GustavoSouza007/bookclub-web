import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Button, Link } from 'components'

export const ResetPasswordScreen = () => {
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
          <Text.ScreenTitle mt="48px">Nova senha</Text.ScreenTitle>
          <Text mt="24px">
            Digite abaixo o código enviado e uma nova senha:
          </Text>
          <Input mt="24px" placeholder="Ex: 000000" />
          <Input.Password mt="16px" placeholder="Nova Senha" />
          <Input.Password mt="16px" placeholder="Confirmar senha" />

          <Button mt="24px">Salvar</Button>
          <Flex flexDir="column" alignItems="center" mt="48px">
            <Text color="brand.greyDark">Não recebeu o código?</Text>
            <Link.Action actiontext="Clique aqui para reenviar." />
          </Flex>
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
