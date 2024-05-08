import {
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { Text } from 'components/atoms'
import { ChevronDownIcon } from '@chakra-ui/icons'

export const USerMenu = () => {
  const userStore = useSelector((state) => state.user)
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
            mr="12px"
          />
          <Text fontWeight="bold" maxlenght="40px">
            {userStore?.user?.name}
          </Text>
          <ChevronDownIcon boxSize="24px" />
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem></MenuItem>
      </MenuList>
    </Menu>
  )
}
