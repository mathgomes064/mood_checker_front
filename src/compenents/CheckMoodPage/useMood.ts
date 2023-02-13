/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react'
import { api } from '../../services/axios'

interface Mood {
  rateOne: number
  questionOne: string
  rateTwo: number
  questionTwo: string
  rateThree: number
  questionThree: string
}

function useMood ({ formValues, updateValues }: any) {
  const userToken = window.localStorage.getItem('authToken') as string
  const userId = window.localStorage.getItem('userId') as string
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

    await api.post(`api/moods/${userId}`, {
      rate_one: newMood.rateOne,
      rate_two: newMood.rateTwo,
      rate_three: newMood.rateThree,
      question_one: newMood.questionOne,
      question_two: newMood.questionTwo,
      question_tree: newMood.questionThree,
      mood: 'Very sad'
    })
      .then(() => { console.log('Success!') })
  }

  useEffect(() => {
    async function getMood () {
      api.defaults.headers.get.Authorization = `Bearer ${userToken}`
      await api.get(`api/users/${userId}/moods/`)
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
