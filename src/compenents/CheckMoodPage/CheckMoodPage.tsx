import { type FormEvent } from 'react'
import { Box, Button, Container, Flex, Text } from '@chakra-ui/react'
import Layout from '../Layout'
import Question from './Question'
import useForm from '../../hook/useForm'
import useMood from './useMood'

function CheckMoodPage () {
  const { formValues, handleOnChange, updateValues } = useForm({
    rateOne: 3,
    questionOne: '',
    rateTwo: 3,
    questionTwo: '',
    rateThree: 3,
    questionThree: ''
  })
  const { saveMood } = useMood({ formValues, updateValues })

  const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault()

    saveMood({ ...formValues })
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
            questionName='questionOne'
            rateName='rateOne'
            question='How are you feeling about your teammates?'
            feedback={formValues.questionOne}
            rate={formValues.rateOne}
            formValues={formValues}
            updateValues={updateValues}
            handleOnChange={handleOnChange}
          />

          <Question
            questionName='questionTwo'
            rateName='rateTwo'
            question='How do you feel about this project right now?'
            feedback={formValues.questionTwo}
            rate={formValues.rateTwo}
            formValues={formValues}
            updateValues={updateValues}
            handleOnChange={handleOnChange}
          />

          <Question
            questionName='questionThree'
            rateName='rateThree'
            question='How do you feel about your current task?'
            feedback={formValues.questionThree}
            rate={formValues.rateThree}
            formValues={formValues}
            updateValues={updateValues}
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
