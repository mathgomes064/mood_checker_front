import { CloseIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'

function Brand () {
  return (
    <Box>
      <Text
        fontSize="2xl"
        fontWeight="bold"
      >
        <RouterLink to="/home">Mood checker</RouterLink>
      </Text>
    </Box>
  )
}

interface MenuItemProps {
  children: any
  to: string
}

function MenuItem ({ children, to = '/', ...rest }: MenuItemProps) {
  return (
    <RouterLink to={to}>
      <Text
        display="block"
        fontWeight="bold"
        {...rest}
      >
        {children}
      </Text>
    </RouterLink>
  )
}

function Navbar () {
  const navigate = useNavigate()
  const handleSignOut = () => {
    navigate('/')
  }
  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="space-between"
      py={3}
      px={6}
      bg="green.500"
    >
      <Brand />

      <MenuItem to="/check-mood">
        Check mood
      </MenuItem>

      <Button
        variant="ghost"
        _hover={{ bgColor: 'green.300' }}
        rightIcon={<CloseIcon ml={2} />}
        onClick={handleSignOut}
      >
        Sign out
      </Button>
    </Flex>
  )
}

export default Navbar
