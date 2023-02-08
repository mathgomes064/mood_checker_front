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

function SignUp () {
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
    },
    {
      name: 'confirm-password',
      placeholder: 'Confirm password',
      label: 'Confirm password',
      type: 'password'
    },
    {
      name: 'team-name',
      placeholder: 'Enter team name',
      label: 'Team name',
      type: 'text'
    },
    {
      name: 'team-code',
      placeholder: 'Enter team code',
      label: 'Team code',
      type: 'password'
    }
  ]

  return (
    <Stack align='center' justify='center' h='100%'>
      <Heading pt={4} pb={2} size='xl'>Mood Checker</Heading>
      <Tabs isFitted variant='enclosed-colored' p={4} rounded='md' w={280} boxShadow='0px 2px 20px #00000012;'>
        <TabList>
          <Tab>Regular</Tab>
          <Tab>Manager</Tab>
        </TabList>

        <TabPanels>
          <TabPanel as='form'>
          <Text textAlign='center'>Sign Up as a regular employee to access your team`s thought feed and check in with your mood!</Text>
          <Stack my={4} spacing={3} fontSize={14}>
            {inputFields.map((input) => (
              input.name !== 'team-name'
                ? (
                <FormControl isRequired key={input.name}>
                  <FormLabel>{input.label}</FormLabel>
                  <Input name={input.name} placeholder={input.placeholder} type={input.type} size='sm'/>
               </FormControl>
                  )
                : null
            ))}
           </Stack>
           <Button type='submit' w='100%'>Sign Up</Button>
          </TabPanel>
          <TabPanel as='form'>
          <Text textAlign='center'>Sign Up as a Team Manager to check your team`s mood and thoughts!</Text>
          <Stack>
          {inputFields.map((input) => (
                <FormControl isRequired key={input.name}>
                  <FormLabel>{input.label}</FormLabel>
                  <Input name={input.name} placeholder={input.placeholder} type={input.type} size='sm'/>
               </FormControl>
          ))}
           </Stack>
           <Button mt={4} type='submit' w='100%'>Sign Up</Button>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  )
}

export default SignUp
