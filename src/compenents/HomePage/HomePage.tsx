import { Container, Divider } from '@chakra-ui/react'
import Layout from '../Layout'
import Compose from './Compose'
import Post from './Post'
import useThought from './useThought'

function HomePage () {
  const { thoughts, postThought } = useThought()

  return (
    <Layout>
      <Container
        maxW='container.sm'
        px="8"
      >
        <Compose
          postThought={postThought}
        />
        <Divider />
        {
          thoughts.map((t: Thought) => (
            <Post
              key={t.id}
              user={t.user}
              thought={t.thought}
              createdAt={t.createdAt}
            />
          ))
        }
      </Container>
    </Layout>
  )
}

export default HomePage
