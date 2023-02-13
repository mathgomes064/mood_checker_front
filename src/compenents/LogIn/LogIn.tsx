import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useToast
} from '@chakra-ui/react'
import { type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../../hook/useForm'
import { api } from '../../services/axios'
import useUserStore from '../../store/userStore'

function LogIn () {
  const navigate = useNavigate()
  const toast = useToast()
  const setUserToken = useUserStore((state) => state.setUserToken)
  const setUser = useUserStore((state) => state.setUser)
  const user = useUserStore((state) => state.user)
  interface InputProps {
    name: string
    placeholder: string
    label: string
    type: string
  }

  const inputFields: InputProps[] = [
    {
      name: 'email',
      placeholder: 'Enter email address',
      label: 'Email',
      type: 'email'
    },
    {
      name: 'password',
      placeholder: 'Enter password',
      label: 'Password',
      type: 'password'
    }
  ]

  const { formValues, handleOnChange } = useForm({
    email: '',
    password: ''
  })

  const handleSignUp = () => {
    navigate('/signup')
  }

  const handleSubmit = async (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault()
    try {
      await api.post('/api/users/login/', {
        email: formValues.email,
        password: formValues.password
      }).then(res => {
        window.localStorage.clear()
        window.localStorage.setItem('authToken', res.data.access)

        setUserToken(res.data.access)
        setUser({ ...user, email: formValues.email })
      })
      await api.get('/api/users/').then(res => {
        const response = res.data.find((value: any) => value.email === formValues.email)
        setUser(response)
        window.localStorage.setItem('userId', response.id)
      })
      navigate('/home')
      toast({
        title: 'Success!',
        description: 'You`ve successfully Logged In!',
        status: 'success',
        duration: 3000,
        isClosable: true
      })
    } catch (error) {
      toast({
        title: 'Error!',
        description: 'The email or password are wrong!',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    }
  }

  console.log(user)

  return (
    <Stack align='center' justify='center' h='100%'>
      <Link to='/'>
        <Heading pt={4} pb={2} size='xl'>
          Mood Checker
        </Heading>
      </Link>
      <Box
        p={4}
        rounded='md'
        w={280}
        boxShadow='0px 2px 20px #00000012;'
      >
        <Stack
            as='form'
            onSubmit={async (e) => {
              handleSubmit(e)
            }}
          >
            <Stack my={4} spacing={3} fontSize={14}>
              {inputFields.map((input) => (
                <FormControl key={input.name} isRequired>
                  <FormLabel>{input.label}</FormLabel>
                  <Input
                    name={input.name}
                    placeholder={input.placeholder}
                    type={input.type}
                    size='sm'
                    value={input.name === 'email' ? formValues.email : formValues.password}
                    onChange={handleOnChange}
                  />
                </FormControl>
              ))}
            </Stack>
            <Button type='submit' w='100%' colorScheme='green'>
              Enter
            </Button>
            <Stack align='center' pt={3}>
              <Text>Doesn`t have an account yet?</Text>
              <Button variant='link' colorScheme='green' onClick={handleSignUp}>
                Sign Up
              </Button>
            </Stack>
          </Stack>
      </Box>
    </Stack>
  )
}

export default LogIn
