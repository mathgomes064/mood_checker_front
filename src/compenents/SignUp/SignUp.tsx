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
  return (
    <Stack pt={4} align='center'>
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
           <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder='Email address' type='email' size='sm'/>
           </FormControl>
           <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input placeholder='Password' type='password' size='sm'/>
           </FormControl>
           <FormControl isRequired>
            <FormLabel>Confirm password</FormLabel>
            <Input placeholder='Password' type='password' size='sm'/>
           </FormControl>
           <FormControl isRequired>
            <FormLabel>Team Code</FormLabel>
            <Input placeholder='Enter team code' type='password' size='sm'/>
           </FormControl>
           </Stack>
           <Button type='submit' w='100%'>Sign Up</Button>
          </TabPanel>
          <TabPanel as='form'>
          <Text textAlign='center'>Sign Up as a Team Manager to check your team`s mood and thoughts!</Text>
          <Stack>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder='Email address' type='email' size='sm'/>
           </FormControl>
           <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input placeholder='Password' type='password' size='sm'/>
           </FormControl>
           <FormControl isRequired>
            <FormLabel>Confirm password</FormLabel>
            <Input placeholder='Password' type='password' size='sm'/>
           </FormControl>
           <FormControl isRequired>
            <FormLabel>Team name</FormLabel>
            <Input placeholder='Enter team name' type='text' size='sm'/>
           </FormControl>
           <FormControl isRequired>
            <FormLabel>Team code</FormLabel>
            <Input placeholder='Enter team code' type='password' size='sm'/>
           </FormControl>
           </Stack>
           <Button mt={4} type='submit' w='100%'>Sign Up</Button>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  )
}

export default SignUp
