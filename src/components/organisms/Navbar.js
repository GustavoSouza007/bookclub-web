import { useState } from 'react'
import { Flex, Image } from '@chakra-ui/react'
import { SearchBar, USerMenu } from 'components/molecules'
import { useNavigate } from 'react-router-dom'
import { UserModal } from './UserModal'
import { PasswordModal } from './PasswordModal'
import { TermsModal } from './TermsModal'
import { PrivacyPolicyModal } from './PrivacyPolicyModal'
import { useDispatch } from 'react-redux'
import { setAll } from 'services/store/slices/user'

export const Navbar = ({ query, setQuery }) => {
  const [showModal, setShowModal] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onCLoseModal = () => {
    setShowModal(null)
  }

  const onLogout = () => {
    localStorage.clear()
    dispatch(
      setAll({
        user: null,
        token: null
      })
    )
    navigate('/')
  }

  return (
    <Flex
      w="100vw"
      flexDir="column"
      alignItems="center"
      justifyContent="space-between"
      paddingX={['24px', '24px', '48px', '48px', '112px']}
      paddingTop="24px"
    >
      <Flex w="100%" justifyContent="space-between">
        <Image
          w={['100px', '120px', '120px', '130px', '160px']}
          h="48px"
          src="/img/logo.svg"
          alt="BookClub Logo"
          cursor="pointer"
          onClick={() => navigate('/home')}
        />
        <USerMenu onLogout={onLogout} setShowModal={setShowModal} />
      </Flex>
      <Flex
        w={['100%', '80%', '50%']}
        mt={['6px', '6px', '0px']}
        position={['initial', 'initial', 'absolute']}
        alignItems="center"
        justifyContent="center"
      >
        <SearchBar query={query} setQuery={setQuery} />
      </Flex>
      {showModal === 'user' && <UserModal onClose={onCLoseModal} />}
      {showModal === 'password' && <PasswordModal onClose={onCLoseModal} />}
      {showModal === 'terms' && <TermsModal onClose={onCLoseModal} />}
      {showModal === 'privacy-policy' && (
        <PrivacyPolicyModal onClose={onCLoseModal} />
      )}
    </Flex>
  )
}
