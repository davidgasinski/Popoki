import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App"> </div>
  );
}

ReactDOM.render(
     <ChakraProvider>
        <App />
      </ChakraProvider>,
    document.getElementById('root')
  );
