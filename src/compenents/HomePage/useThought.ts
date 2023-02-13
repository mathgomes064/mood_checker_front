/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react'
import { api } from '../../services/axios'
import useUserStore from '../../store/userStore'

function useThought () {
  const [thoughts, setThoughts] = useState<Thought[]>([])
  const userToken = useUserStore((state) => state.userToken)

  const postThought = async ({ thought, user }: Thought) => {
    api.defaults.headers.post.Authorization = `Bearer ${userToken}`
    console.log(user)
    await api.post(`api/thoughts/${user}/`, { thought })
      .then(() => { console.log('Success!') })
      .catch((error) => { console.log(error) })
  }

  api.defaults.headers.get.Authorization = `Bearer ${userToken}`

  useEffect(() => {
    async function getAllThoughts () {
      await api.get('api/thoughts/')
        .then(async ({ data }) => {
          api.defaults.headers.get.Authorization = `Bearer ${userToken}`
          const { data: users } = await api.get('api/users')
          setThoughts(data.map((t: any) => {
            const { username } = users.find((u: any) => t.user_id === u.id)

            return {
              id: t.id,
              thought: t.thought,
              user: username,
              createdAt: t.created_at
            }
          }))
        })
        .catch((error) => { console.log(error) })
    }

    getAllThoughts()
  }, [])

  return {
    thoughts,
    postThought
  }
}

export default useThought
