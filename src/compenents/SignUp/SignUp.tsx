import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from '@chakra-ui/react'
import { type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../../hook/useForm'
import { api } from '../../services/axios'

function SignUp () {
  const navigate = useNavigate()
  interface InputProps {
    name: string
    placeholder: string
    label: string
    type: string
  }

  const inputFields: InputProps[] = [
    {
      name: 'username',
      placeholder: 'Enter username',
      label: 'Username',
      type: 'text'
    },
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

  const handleSubmit = async (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault()

    try {
      await api.post('/api/users/users/', {
        email: formValues.email,
        password: formValues.password
      })
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Stack align="center" justify="center" h="100%">
      <Link to="/">
        <Heading pt={4} pb={2} size="xl">
          Mood Checker
        </Heading>
      </Link>
      <Tabs
        isFitted
        variant="enclosed-colored"
        p={4}
        rounded="md"
        w={280}
        h={465}
        boxShadow="0px 2px 20px #00000012;"
        colorScheme="green"
      >
        <TabList>
          <Tab>Regular</Tab>
          <Tab>Manager</Tab>
        </TabList>

        <TabPanels>
          <TabPanel as="form" onSubmit={(e) => { handleSubmit(e) }}>
            <Text textAlign="center">
              Sign Up as a regular to access your team`s thought feed
              and check in with your mood!
            </Text>
            <Stack my={4} spacing={3} fontSize={14}>
              {inputFields.map((input) => (
                <FormControl isRequired key={input.name}>
                  <FormLabel>{input.label}</FormLabel>
                  <Input
                    name={input.name}
                    placeholder={input.placeholder}
                    type={input.type}
                    size="sm"
                    value={input.name === 'email'
                      ? formValues.email
                      : input.name === 'password' ? formValues.password : formValues.confirmPassword}
                    onChange={handleOnChange}
                  />
                </FormControl>
              ))}
            </Stack>
            <Button type="submit" w="100%" colorScheme="green">
              Sign Up
            </Button>
          </TabPanel>
          <TabPanel as="form">
            <Text textAlign="center">
              Sign Up as a Team Manager to check your team`s mood and thoughts!
            </Text>
            <Stack my={4} spacing={3} fontSize={14}>
              {inputFields.map((input) => (
                <FormControl isRequired key={input.name}>
                  <FormLabel htmlFor={input.name}>{input.label}</FormLabel>
                  <Input
                    name={input.name}
                    placeholder={input.placeholder}
                    type={input.type}
                    size="sm"
                    value={input.name === 'email'
                      ? formValues.email
                      : input.name === 'password' ? formValues.password : formValues.confirmPassword}
                    onChange={handleOnChange}
                  />
                </FormControl>
              ))}
            </Stack>
            <Button type="submit" w="100%" colorScheme="green">
              Sign Up
            </Button>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  )
}

export default SignUp
