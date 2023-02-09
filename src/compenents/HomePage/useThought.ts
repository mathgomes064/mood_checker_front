import { useEffect, useState } from 'react'

function useThought () {
  const [thoughts, setThoughts] = useState<Thought[]>([])

  const postThought = ({ thought, user }: Thought) => {}

  useEffect(() => {
    setThoughts([
      {
        id: '1',
        user: 'Nick',
        thought: 'Hello guys! I am feeling really good',
        createdAt: '2023-02-09'
      }
    ])
  }, [])

  return {
    thoughts,
    postThought
  }
}

export default useThought
