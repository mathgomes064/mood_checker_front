import { Avatar, Flex, Box, Textarea, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function Compose () {
  const navigate = useNavigate()

  const handleSignOut = () => {
    navigate('/')
  }

  return (
    <Flex
      gap="2"
      padding="3"
    >
      <Box>
        <Avatar />
      </Box>

      <Flex
        gap="2"
        flexDirection="column"
        flexGrow="1"
      >
        <Textarea
          placeholder="How are you feeling today?"
          _focusVisible={{ borderColor: 'green.500' }}
        />

        <Button
          colorScheme="green"
          onClick={handleSignOut}
        >
          Send
        </Button>
      </Flex>
    </Flex>
  )
}

export default Compose
