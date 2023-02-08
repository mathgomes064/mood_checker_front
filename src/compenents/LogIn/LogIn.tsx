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
function LogIn () {
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

  return (
    <Stack align='center' justify='center' h='100%'>
      <Heading pt={4} pb={2} size="xl">
        Mood Checker
      </Heading>
      <Tabs
        isFitted
        variant="enclosed-colored"
        p={4}
        rounded="md"
        w={280}
        boxShadow="0px 2px 20px #00000012;"
      >
        <TabList>
          <Tab>Regular</Tab>
          <Tab>Manager</Tab>
        </TabList>

        <TabPanels>
          <TabPanel as="form">
            <Stack my={4} spacing={3} fontSize={14}>
              {inputFields.map((input) => (
                <FormControl key={input.name} isRequired>
                <FormLabel>{input.label}</FormLabel>
                <Input name={input.name} placeholder={input.placeholder} type={input.type} size="sm" />
              </FormControl>
              ))}
            </Stack>
            <Button type="submit" w="100%">
              Enter
            </Button>
            <Stack align='center' pt={3}>
                <Text>Doesn`t have an account yet?
                </Text>
                <Button variant='link' color='blue.500'>Sign Up</Button>
            </Stack>
          </TabPanel>
          <TabPanel as="form">
            <Stack my={4} spacing={3} fontSize={14}>
            {inputFields.map((input) => (
                <FormControl key={input.name} isRequired>
                <FormLabel>{input.label}</FormLabel>
                <Input name={input.name} placeholder={input.placeholder} type={input.type} size="sm" />
              </FormControl>
            ))}
            </Stack>
            <Button type="submit" w="100%">
              Enter
            </Button>
            <Stack align='center' pt={3}>
                <Text>Doesn`t have an account yet?
                </Text>
                <Button variant='link' color='blue.500'>Sign Up</Button>
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  )
}

export default LogIn
