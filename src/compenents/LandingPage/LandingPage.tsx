import { Button, Stack, Heading, HStack, Box, Text } from '@chakra-ui/react'
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
    <Stack p={12} spacing={4} align='center' justify='center' h='100%'>
      <Heading textAlign="center">MoodChecker</Heading>
      <Text textAlign="center">A colaborative tool to help improve your team`s work environment.</Text>
      <Box border="1px dashed" w={800} h={400}></Box>
      <HStack>
        <Button colorScheme='green' onClick={handleSignUp}>Sign Up</Button>
        <Button colorScheme='green' onClick={handleLogIn} variant='outline'>Log In</Button>
      </HStack>
    </Stack>
  )
}

export default LandingPage
