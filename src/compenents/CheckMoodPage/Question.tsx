import { Flex, Box, Textarea, Avatar, Tooltip } from '@chakra-ui/react'

interface QuestionProps {
  question: string
  message: string
  answer: number
}

const emoticons = [
  { name: 'Excellent', emoticon: ':D', color: 'green', value: 1 },
  { name: 'Good', emoticon: ':)', color: 'blue', value: 2 },
  { name: 'Neutral', emoticon: ':|', color: 'yellow', value: 3 },
  { name: 'Hard', emoticon: ':/', color: 'orange', value: 4 },
  { name: 'Bad', emoticon: ':(', color: 'red', value: 5 }
]

function EmoticonGroup () {
  return (
    <Flex
      justifyContent="space-between"
    >
      {
        emoticons.map((e, index) => (
          <Tooltip
            key={index}
            label={e.name}
          >
            <Avatar
              bg={e.color}
              icon={
                <Box
                  as="span"
                  fontWeight="bold"
                >
                  {e.emoticon}
                </Box>
              }
            />
          </Tooltip>
        ))
      }
    </Flex>
  )
}

function Question ({ question, message, answer }: QuestionProps) {
  return (
    <Flex
      flexDirection="column"
      gap="4"
    >
      <Box
        border="1px"
        borderColor="gray.300"
        borderRadius="8px"
        padding="2"
        textAlign="center"
      >
        {question}
      </Box>

      <Textarea
        placeholder="Share some feedback, it would be anonymous"
        value={message}
      />

      <EmoticonGroup />
    </Flex>
  )
}

export default Question
