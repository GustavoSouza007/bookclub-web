import { Flex } from '@chakra-ui/react'
// import { useSelector } from 'react-redux'
import { Navbar } from 'components'

export const HomeScreen = () => {
  // const userStore = useSelector((state) => state.user)

  return (
    <Flex>
      <Navbar />
    </Flex>
  )
}
