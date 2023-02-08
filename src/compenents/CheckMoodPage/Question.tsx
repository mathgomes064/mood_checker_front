import { Flex, Box, Textarea, Avatar, Tooltip } from '@chakra-ui/react'

const emoticons = [
  { name: 'Excellent', emoticon: ':D', color: 'green', value: 1 },
  { name: 'Good', emoticon: ':)', color: 'blue', value: 2 },
  { name: 'Neutral', emoticon: ':|', color: 'yellow', value: 3 },
  { name: 'Hard', emoticon: ':/', color: 'orange', value: 4 },
  { name: 'Bad', emoticon: ':(', color: 'red', value: 5 }
]

interface EmoticonGroupProps {
  answer: number
  setAnswer: any
}

function EmoticonGroup ({ answer, setAnswer }: EmoticonGroupProps) {
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
              bg={ answer === e.value ? e.color : `${e.color}.200` }
              onClick={() => setAnswer(e.value)}
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

interface QuestionProps {
  questionName: string
  question: string
  feedback: string
  answer: number
  setAnswer: any
  handleOnChange: any
}

function Question ({ questionName, question, feedback, answer, setAnswer, handleOnChange }: QuestionProps) {
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
        placeholder="Share some feedback, it would be anonymous (optional)"
        name={questionName}
        value={feedback}
        onChange={handleOnChange}
      />

      <EmoticonGroup
        answer={answer}
        setAnswer={setAnswer}
      />
    </Flex>
  )
}

export default Question
