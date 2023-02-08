import { Container, Divider } from '@chakra-ui/react'
import Layout from '../Layout'
import Compose from './Compose'
import Thought from './Thought'

function HomePage () {
  return (
    <Layout>
      <Container
        maxW='container.sm'
        px="8"
      >
        <Compose />
        <Divider />
        <Thought
          nickname="Nickname"
          message="Hello team! Feeling really good!"
          date={new Date()}
        />
      </Container>
    </Layout>
  )
}

export default HomePage
