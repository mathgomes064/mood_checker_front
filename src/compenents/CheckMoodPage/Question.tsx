import { Flex, Box, Textarea } from '@chakra-ui/react'
import EmoticonGroup from './EmoticonGroup'

interface QuestionProps {
  questionName: string
  rateName: string
  question: string
  feedback: string
  rate: number
  formValues: any
  handleOnChange: any
  updateValues: any
}

function Question ({ questionName, rateName, question, feedback, rate, formValues, handleOnChange, updateValues }: QuestionProps) {
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
        bgColor="green.100"
      >
        {question}
      </Box>

      <Textarea
        placeholder="Share some feedback, it would be anonymous (optional)"
        name={questionName}
        value={feedback}
        onChange={handleOnChange}
        _focusVisible={{ borderColor: 'green.500' }}
      />

      <EmoticonGroup
        rate={rate}
        rateName={rateName}
        formValue={formValues}
        updateValues={updateValues}
      />
    </Flex>
  )
}

export default Question
