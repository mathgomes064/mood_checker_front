import { Button, Stack, Heading, HStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router'

function LandingPage () {
  const navigate = useNavigate()

  const handleSignUp = () => {
    navigate('/SignUp')
  }

  const handleLogIn = () => {
    navigate('/LogIn')
  }

  return (
    <Stack p={12} spacing={8} align='center' justify='center' h='100%'>
      <Heading textAlign="center">Welcome to MoodChecker</Heading>
      <HStack>
        <Button colorScheme='teal' onClick={handleSignUp}>Sign Up</Button>
        <Button colorScheme='blue' onClick={handleLogIn}>Log In</Button>
      </HStack>
    </Stack>
  )
}

export default LandingPage
