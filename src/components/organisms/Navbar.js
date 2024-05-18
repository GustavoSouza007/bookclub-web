import { Flex, Image } from '@chakra-ui/react'
import { SearchBar, USerMenu } from 'components/molecules'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate()
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
        <USerMenu />
      </Flex>
      <Flex
        w={['100%', '80%', '50%']}
        mt={['6px', '6px', '0px']}
        position={['initial', 'initial', 'absolute']}
        alignItems="center"
        justifyContent="center"
      >
        <SearchBar />
      </Flex>
    </Flex>
  )
}
