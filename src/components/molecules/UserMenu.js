import { Avatar, Flex, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Text, MenuItem } from 'components/atoms'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { BsBookmark } from 'react-icons/bs'
import { BiUser, BiCheckShield } from 'react-icons/bi'
import { HiOutlineClipboard, HiOutlineLogout } from 'react-icons/hi'
import { IoDocumentTextOutline } from 'react-icons/io5'

export const USerMenu = ({ setShowModal, onLogout }) => {
  const userStore = useSelector((state) => state.user)
  const navigate = useNavigate()

  const menuOptions = [
    {
      id: 0,
      icon: BsBookmark,
      text: 'Favoritos',
      onClick: () => navigate('/favorites'),
      divider: false
    },
    {
      id: 1,
      icon: BiUser,
      text: 'Dados Pessoais',
      onClick: () => setShowModal('user'),
      divider: false
    },
    {
      id: 2,
      icon: BiCheckShield,
      text: 'Alterar senha',
      onClick: () => setShowModal('password'),
      divider: true
    },
    {
      id: 3,
      icon: IoDocumentTextOutline,
      text: 'Termos de uso',
      onClick: () => setShowModal('terms'),
      divider: false
    },
    {
      id: 4,
      icon: HiOutlineClipboard,
      text: 'Política de privacidade',
      onClick: () => setShowModal('privacy-policy'),
      divider: true
    },
    {
      id: 5,
      icon: HiOutlineLogout,
      text: 'Logout',
      onClick: () => onLogout(),
      divider: false
    }
  ]

  return (
    <Menu>
      <MenuButton>
        <Flex alignItems="center" justifyContent="center">
          <Avatar
            name={userStore?.user?.name}
            src={userStore?.user?.avatar_url}
            size="md"
            borderWidth="2px"
            borderColor="brand.primary"
            bg="brand.greyLight"
            color="brand.black"
          />
          <Flex display={['none', 'none', 'none', 'flex']}>
            <Text maxWidth="140px" fontWeight="bold" noOfLines={1}>
              {userStore?.user?.name}
            </Text>
          </Flex>
          <ChevronDownIcon boxSize="24px" />
        </Flex>
      </MenuButton>
      <MenuList>
        {menuOptions.map((item) => (
          <MenuItem
            onClick={() => item.onClick()}
            key={`menu_item_${item.id}`}
            {...item}
          />
        ))}
      </MenuList>
    </Menu>
  )
}
