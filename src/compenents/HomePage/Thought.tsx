import { Avatar, Flex, Text } from '@chakra-ui/react'

interface ThoughtProps {
  nickname: string
  message: string
  date: Date
}

function Thought ({ nickname, message, date }: ThoughtProps) {
  return (
    <Flex
      flexDirection="column"
      gap="3"
      padding="3"
      marginBottom="2"
    >
      <Flex
        gap="3"
        alignItems="center"
      >
        <Avatar />
        <Text fontWeight="bold">{nickname}</Text>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="flex-end"
        gap="1"
      >
        <Text
          padding="2"
          width="100%"
          fontSize="lg"
        >
          {message}
        </Text>
        <Text
          fontStyle="italic"
        >
          {date.toDateString()}
        </Text>
      </Flex>
    </Flex>
  )
}

export default Thought
