import { useState, type FormEvent } from 'react'
import { Box, Button, Container, Flex, Text } from '@chakra-ui/react'
import Layout from '../Layout'
import Question from './Question'
import useForm from '../../hook/useForm'

function CheckMoodPage () {
  const [answer1, setAnswer1] = useState(1)
  const [answer2, setAnswer2] = useState(1)
  const [answer3, setAnswer3] = useState(1)
  const { formValues, handleOnChange } = useForm({
    feedback_1: '',
    feedback_2: '',
    feedback_3: ''
  })

  const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault()

    console.log({ ...formValues })
    console.log(answer1, answer2, answer3)
  }

  return (
    <Layout>
      <Container
        maxW='container.sm'
        py="10"
      >
        <Box
          padding="2"
        >
          <Text
            fontWeight="bold"
            textAlign="center"
            fontSize="xl"
          >
            Share your thoughts and help your company create a better work environment.
          </Text>
        </Box>

        <Flex
          as="form"
          flexDirection="column"
          gap="10"
          padding="4"
          onSubmit={handleSubmit}
        >
          <Question
            questionName='feedback_1'
            question='How are you feeling about your teammates?'
            feedback={formValues.feedback_1}
            answer={answer1}
            setAnswer={setAnswer1}
            handleOnChange={handleOnChange}
          />

          <Question
            questionName='feedback_2'
            question='How do you feel about this project right now?'
            feedback={formValues.feedback_2}
            answer={answer2}
            setAnswer={setAnswer2}
            handleOnChange={handleOnChange}
          />

          <Question
            questionName='feedback_3'
            question='How do you feel about your current task?'
            feedback={formValues.feedback_3}
            answer={answer3}
            setAnswer={setAnswer3}
            handleOnChange={handleOnChange}
          />

          <Button
            colorScheme="green"
            type='submit'
          >
            Save
          </Button>
        </Flex>
      </Container>
    </Layout>
  )
}

export default CheckMoodPage
