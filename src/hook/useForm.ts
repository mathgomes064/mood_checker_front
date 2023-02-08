import { type ChangeEvent, useState } from 'react'

function useForm (initialState: any) {
  if (typeof initialState !== 'object') {
    throw new Error('parameter should be at least an empty object')
  }
  if (initialState instanceof Array) {
    throw new Error('parameter should be at least an empty object')
  }

  const [formValues, setFormValues] = useState(initialState)

  const updateValues = (newState: any) => {
    setFormValues(newState)
  }

  const reset = () => {
    setFormValues(initialState)
  }

  const handleOnChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    const value = currentTarget.type === 'checkbox' ? currentTarget.checked : currentTarget.value

    setFormValues({
      ...formValues,
      [currentTarget.name]: value
    })
  }

  return { formValues, handleOnChange, updateValues, reset }
}

export default useForm
