import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const RegisterScreen = () => {
  const navigate = useNavigate()

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Nome deve conter ao menos 3 caracteres.')
        .required('Nome é obrigatório.'),
      email: Yup.string()
        .email('Email inválido')
        .required('Email é obrigatório.'),
      password: Yup.string()
        .min(6, 'Senha deve ter ao menos 6 caracteres.')
        .required('Senha é obrigatório.'),
      confirmPassword: Yup.string()
        .min(6, 'Confirmar senha deve ter ao menos 6 caracteres.')
        .required('Confirmar senha é obrigatório.')
        .oneOf([Yup.ref('password'), null], 'Senhas não são iguais.')
    }),
    onSubmit: (data) => {}
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
          <Text.ScreenTitle mt="48px">Cadastro</Text.ScreenTitle>
          <Input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
            mt="24px"
            placeholder="Nome completo"
          />
          <Input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            mt="16px"
            placeholder="Email"
          />
          <Input.Password
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            mt="16px"
            placeholder="Senha"
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

          <Button mt="24px" onClick={handleSubmit}>
            Cadastrar
          </Button>
          <Flex flexDir="column" alignItems="center" mt="48px">
            <Text color="brand.greyDark">Já possui uma conta?</Text>
            <Link.Action
              onClick={() => navigate('/')}
              actiontext="Faça login aqui."
            />
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
