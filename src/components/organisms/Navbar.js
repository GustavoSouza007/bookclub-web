import { Flex, Image } from '@chakra-ui/react'
import { SearchBar, USerMenu } from 'components/molecules'

export const Navbar = () => {
  return (
    <Flex
      w="100vw"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      paddingX={['24px', '48px', '48px', '112px']}
      paddingTop="24px"
    >
      <Image w="160px" h="48px" src="/img/logo.svg" alt="BookClub Logo" />
      <SearchBar />
      <USerMenu />
    </Flex>
  )
}
