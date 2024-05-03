import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Button, Link } from 'components'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

export const ResetPasswordScreen = () => {
  const navigate = useNavigate()
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      token: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      token: Yup.string()
        .length(6, 'Token deve conter 6 caracteres.')
        .required('Token é obrigatório.'),
      password: Yup.string()
        .min(6, 'Senha deve ter ao menos 6 caracteres.')
        .required('Senha é obrigatório.'),
      confirmPassword: Yup.string()
        .min(6, 'Confirmar senha deve ter ao menos 6 caracteres.')
        .required('Confirmar senha é obrigatório.')
        .oneOf([Yup.ref('password'), null], 'Senhas não são iguais.')
    }),
    onSubmit: (data) => {
      navigate('/')
    }
  })

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
          <Input
            id="token"
            name="token"
            value={values.token}
            onChange={handleChange}
            error={errors.token}
            mt="24px"
            placeholder="Ex: 000000"
            maxLength={6}
          />
          <Input.Password
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            mt="16px"
            placeholder="Nova Senha"
          />
          <Input.Password
            id="confirmPassword"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            mt="16px"
            placeholder="Confirmar senha"
          />

          <Button onClick={handleSubmit} mt="24px">
            Salvar
          </Button>
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
