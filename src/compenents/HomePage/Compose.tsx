import { Avatar, Flex, Box, Textarea, Button } from '@chakra-ui/react'
import useForm from '../../hook/useForm'
import useUserStore from '../../store/userStore'

interface ComposeProps {
  postThought: any
}

function Compose ({ postThought }: ComposeProps) {
  const { formValues, handleOnChange } = useForm({ thought: '' })
  const user = useUserStore((state) => state.user)
  const { thought } = formValues
  const handleSubmit = (e: any) => {
    e.preventDefault()
    postThought({ thought, user: user.id })
  }

  return (
    <Flex
      gap="2"
      padding="3"
      as="form"
      onSubmit={handleSubmit}
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
          name='thought'
          value={thought}
          onChange={handleOnChange as any}
        />

        <Button
          colorScheme="green"
          type='submit'
        >
          Send
        </Button>
      </Flex>
    </Flex>
  )
}

export default Compose
