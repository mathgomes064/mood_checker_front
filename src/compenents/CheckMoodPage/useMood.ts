/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react'
import { api } from '../../services/axios'
import useUserStore from '../../store/userStore'

interface Mood {
  rateOne: number
  questionOne: string
  rateTwo: number
  questionTwo: string
  rateThree: number
  questionThree: string
}

function useMood ({ formValues, updateValues }: any) {
  const userToken = useUserStore((state) => state.userToken)
  const user = useUserStore((state) => state.user)
  const [mood, setMood] = useState<Mood>({
    rateOne: 3,
    questionOne: '',
    rateTwo: 3,
    questionTwo: '',
    rateThree: 3,
    questionThree: ''
  })

  const saveMood = async (newMood: Mood) => {
    api.defaults.headers.post.Authorization = `Bearer ${userToken}`

    await api.post(`api/moods/${user.id}`, {
      rate_one: newMood.rateOne,
      rate_two: newMood.rateTwo,
      rate_three: newMood.rateThree,
      question_one: newMood.questionOne,
      question_two: newMood.questionTwo,
      question_tree: newMood.questionThree,
      mood: 'neutral'
    })
      .then(() => { console.log('Success!') })
  }

  useEffect(() => {
    async function getMood () {
      api.defaults.headers.get.Authorization = `Bearer ${userToken}`
      await api.get(`api/users/${user.id}/moods/`)
        .then((res) => { setMood(res.data) })
        .catch((error) => { console.log(error) })
    }

    getMood()
  }, [])

  return {
    mood,
    saveMood
  }
}

export default useMood
