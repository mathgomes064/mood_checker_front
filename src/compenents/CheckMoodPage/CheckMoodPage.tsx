import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Layout from '../Layout'
import Question from './Question'

function CheckMoodPage () {
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
          flexDirection="column"
          gap="10"
          padding="4"
        >
          <Question
            question='How are you feeling about your teammates?'
            message=""
            answer={1}
          />

          <Question
            question='How do you feel about this project right now?'
            message=""
            answer={1}
          />

          <Question
            question='How do you feel about your current task?'
            message=""
            answer={1}
          />
        </Flex>
      </Container>
    </Layout>
  )
}

export default CheckMoodPage
