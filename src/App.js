import React from 'react';
import {
  ChakraProvider,
  Box,
  extendTheme,
  useColorModeValue
} from '@chakra-ui/react';
import MorseForm from './components/MorseForm';
const theme = extendTheme({
  fonts: {
    heading: "Heading Font Name",
    body: "Body Font Name",
    text: "Heading Font Name",
  },
})



function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box  textAlign="center" fontSize="xl">
         <MorseForm />
      </Box>
    </ChakraProvider>
  );
}

export default App;
