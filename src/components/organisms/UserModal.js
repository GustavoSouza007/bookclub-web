import { useRef } from 'react'
import {
  Flex,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Avatar,
  useToast,
  Icon
} from '@chakra-ui/react'
import { Text, Button } from 'components/atoms'
import { Input } from 'components/molecules'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import { useMutation } from 'react-query'
import { updateUserCall, updateUserAvatar } from 'services/api/requests'
import { setUser } from 'services/store/slices/user'
import { MdModeEditOutline } from 'react-icons/md'

export const UserModal = ({ onClose }) => {
  const inputFileRef = useRef()
  const toast = useToast()
  const userStore = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const mutation = useMutation((data) => updateUserCall(data), {
    onError: (error) => {
      toast({
        title: 'Falha ao atualizar usuário.',
        description:
          error?.response?.data?.error || 'Por favor, tente novamente',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    },
    onSuccess: (data) => {
      toast({
        title: 'Usuário atualizado com sucesso!',
        status: 'success',
        duration: 3000,
        isClosable: true
      })
      dispatch(
        setUser({
          user: data?.data?.user
        })
      )
    }
  })

  const mutationAvatar = useMutation((data) => updateUserAvatar(data), {
    onError: (error) => {
      toast({
        title: 'Falha ao atualizar imagem do perfil.',
        description:
          error?.response?.data?.error || 'Por favor, tente novamente',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    },
    onSuccess: (data) => {
      toast({
        title: 'imagem do perfil atualizada com sucesso!',
        status: 'success',
        duration: 3000,
        isClosable: true
      })
      dispatch(
        setUser({
          user: data?.data
        })
      )
    }
  })

  const { handleChange, values, errors, handleSubmit } = useFormik({
    initialValues: {
      name: userStore?.user?.name,
      email: userStore?.user?.email
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Nome deve conter ao menos 3 caracteres.')
        .required('Nome é obrigatório.'),
      email: Yup.string()
        .email('Email inválido')
        .required('Email é obrigatório.')
    }),
    onSubmit: (data) => {
      mutation.mutate(data)
    }
  })

  const onChangeImage = async (event) => {
    const file = event?.target?.files[0]
    const type = file?.type

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const base64 = reader.result
      mutationAvatar.mutate({
        mime: type,
        base64
      })
    }
  }
  return (
    <Drawer size="sm" isOpen={true} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Text.ScreenTitle>Dados Pessoais</Text.ScreenTitle>
        </DrawerHeader>

        <DrawerBody>
          <Flex w="100%" alignItems="center" justifyContent="center">
            <input
              ref={inputFileRef}
              style={{ display: 'none' }}
              onChange={onChangeImage}
              type="file"
              accept="image/"
            />
            <Avatar
              name={userStore?.user?.name}
              src={userStore?.user?.avatar_url}
              size="2xl"
              borderWidth="4px"
              borderColor="brand.primary"
              bg="brand.greyLight"
              color="brand.black"
              cursor="pointer"
              onClick={() => inputFileRef?.current?.click()}
            />
            <Flex
              w="32px"
              h="32px"
              alignItems="center"
              justifyContent="center"
              bg="brand.primary"
              borderRadius="16px"
              position="relative"
              top="50px"
              right="34px"
              cursor="pointer"
              onClick={() => inputFileRef?.current?.click()}
            >
              <Icon boxSize="18px" color="brand.black" as={MdModeEditOutline} />
            </Flex>
          </Flex>
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
          <Button
            onClick={handleSubmit}
            isLoading={mutation.isLoading || mutationAvatar.isLoading}
            w="100%"
            mt={['24px', '24px', '32px', '48px']}
          >
            Atualizar
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
