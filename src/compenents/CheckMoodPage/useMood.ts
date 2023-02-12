import { useEffect, useState } from 'react'

interface Mood {
  rateOne: number
  questionOne: string
  rateTwo: number
  questionTwo: string
  rateThree: number
  questionThree: string
}

function useMood ({ formValues, updateValues }: any) {
  const [mood, setMood] = useState<Mood>({
    rateOne: 3,
    questionOne: '',
    rateTwo: 3,
    questionTwo: '',
    rateThree: 3,
    questionThree: ''
  })

  const saveMood = (newMood: Mood) => { setMood({ ...newMood }) }

  useEffect(() => {
    setTimeout(() => {
      updateValues({
        ...formValues,
        questionTwo: 'Adios',
        rateOne: 5
      })
    }, 2000)
  }, [])

  return {
    mood,
    saveMood
  }
}

export default useMood
