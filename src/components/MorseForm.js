import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  FormHelperText,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
const morse = [
  '.-',
  '-...',
  '-.-.',
  '-..',
  '.',
  '..-.',
  '--.',
  '....',
  '..',
  '.---',
  '-.-',
  '.-..',
  '--',
  '-.',
  '---',
  '.--.',
  '--.-',
  '.-.',
  '...',
  '-',
  '..-',
  '...-',
  '.--',
  '-..-',
  '-.--',
  '--..',
];

const alpha = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

export default function MorseForm() {
  const [morseString, setMorseString] = useState('');
  const [res, setResults] = useState('');
  const handleChange = e => {
    setMorseString(e.target.value);
  };
  let results = '';
  const morseMorse = (strMorse, strAlpha, inputSize) => {
    if (strMorse.length > 0) {
      for (let i = 0; i < morse.length; i++) {
        if (strMorse.startsWith(morse[i])) {
          morseMorse(
            strMorse.substring(morse[i].length),
            strAlpha + alpha[i],
            inputSize
          );
        }
      }
    } else {
      console.log(strAlpha);
      results += strAlpha + ' ';
    }
  };

  const decode = e => {
    e.preventDefault();
    results = '';
    morseMorse(morseString, '', morseString.length);
    setResults(results);
  };

  return (
    <Flex
    bg={useColorModeValue('gray.50', 'gray.800')}
      minH={'100vh'}
      flexDirection={'column'}
      align={'center'}
      justify={'center'}
     
    >
      
      <Stack
        spacing={4}
        w={'90%'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        
        my={12}
      >
        <ColorModeSwitcher justifySelf="flex-end" />
        <Heading
          lineHeight={1.2}
          fontWeight={'bold'}
          fontSize={{ base: '2xl', md: '5xl' }}
        >
      WORSE MORSE?
        </Heading>
        <form onSubmit={decode} required>
          <FormControl isRequired id="text">
            <Input
              placeholder="Input morse here"
              value={morseString}
              onChange={handleChange}
              maxLength="12"
              errorBorderColor="red.300"
              title="Input Valid WORSE MORSE"
              pattern="^[-.]+$"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />

            <FormHelperText>Shh baby its okay</FormHelperText>
          </FormControl>

          <Button
            type="submit"
            mt="2"
            bg={'cyan.500'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
          >
            Decode
          </Button>
        </form>
      </Stack>
      <Text color={useColorModeValue('black', 'gray.50')} fontSize={{sm: "10px", md: "30px"}} mx="3">{res}</Text>
    </Flex>
  );
}
