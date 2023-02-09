import { Avatar, Flex, Text } from '@chakra-ui/react'

interface PostProps {
  user: string
  thought: string
  createdAt: string
}

function Post ({ user, thought, createdAt }: PostProps) {
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
        <Text fontWeight="bold">{user}</Text>
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
          {thought}
        </Text>
        <Text
          fontStyle="italic"
        >
          {createdAt}
        </Text>
      </Flex>
    </Flex>
  )
}

export default Post
