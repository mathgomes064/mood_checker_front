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
  Text,
  useToast
} from '@chakra-ui/react'
import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../../hook/useForm'
import { api } from '../../services/axios'

function SignUp () {
  const navigate = useNavigate()
  const toast = useToast()
  const [isManager, setIsManager] = useState<boolean>(false)
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
    username: '',
    email: '',
    password: ''
  })

  const handleSubmit = async (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault()
    console.log(isManager)
    try {
      await api.post('/api/users/', {
        username: formValues.username,
        email: formValues.email,
        password: formValues.password,
        is_manager: isManager
      })
      toast({
        title: 'Success!',
        description: 'You`ve successfully created an account!',
        status: 'success',
        duration: 3000,
        isClosable: true
      })
      navigate('/login')
    } catch (error) {
      console.log(error)
      toast({
        title: 'Error!',
        description: 'This email is either invalid or has been used already!',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
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
          <Tab onClick={() => { setIsManager(false) }}>Regular</Tab>
          <Tab onClick={() => { setIsManager(true) }}>Manager</Tab>
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
                      : input.name === 'password' ? formValues.password : formValues.username}
                    onChange={(e) => {
                      handleOnChange(e)
                    }}
                  />
                </FormControl>
              ))}
            </Stack>
            <Button type="submit" w="100%" colorScheme="green">
              Sign Up
            </Button>
          </TabPanel>
          <TabPanel as="form" onSubmit={(e) => { handleSubmit(e) }}>
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
                      : input.name === 'password' ? formValues.password : formValues.username}
                    onChange={(e) => {
                      handleOnChange(e)
                    }}
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
