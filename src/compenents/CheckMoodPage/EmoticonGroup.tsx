import { Avatar, Box, InputGroup, Radio, Tooltip, RadioGroup } from '@chakra-ui/react'
import { useRef } from 'react'

interface EmoticonProps {
  rate: number
  name: string
  value: string
  color: string
  emoticon: string
}

function Emoticon ({ rate, name, value, color, emoticon }: EmoticonProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)

  return (
    <InputGroup
      display="flex"
      flexDirection="column"
      alignItems="center"
      onClick={() => {
        inputRef.current?.click()
      }}
    >
      <Tooltip
        label={name}
      >
        <Avatar
          bg={rate === parseInt(value) ? color : `${color}.200`}
          cursor="pointer"
          icon={
            <Box
              as="span"
              fontWeight="bold"
            >
              {emoticon}
            </Box>
          }
        />
      </Tooltip>

      <Radio
        value={value}
        ref={(e) => {
          inputRef.current = e
        }}
        display="none"
      />
    </InputGroup>
  )
}

const emoticons = [
  { name: 'Bad', emoticon: ':(', color: 'red', value: '1' },
  { name: 'Hard', emoticon: ':/', color: 'orange', value: '2' },
  { name: 'Neutral', emoticon: ':|', color: 'yellow', value: '3' },
  { name: 'Good', emoticon: ':)', color: 'blue', value: '4' },
  { name: 'Excellent', emoticon: ':D', color: 'green', value: '5' }
]

interface EmoticonGroupProps {
  rate: number
  rateName: string
  formValue: any
  updateValues: any
}

function EmoticonGroup ({ rate, rateName, formValue, updateValues }: EmoticonGroupProps) {
  return (
    <RadioGroup
      display="flex"
      justifyContent="space-between"
      name={rateName}
      onChange={(e) => {
        updateValues({ ...formValue, [rateName]: parseInt(e) })
      }}
      defaultValue='3'
    >
      {
        emoticons.map((e, index) => (
          <Emoticon
            key={index}
            rate={rate}
            {...e}
          />
        ))
      }
    </RadioGroup>
  )
}

export default EmoticonGroup
