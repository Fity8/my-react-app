import React  from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import ResponsiveApp from './TopBandApp';
import CryptosGlobalInfos from './bands';




function App() {
    
 

  return (
    <ChakraProvider>
      <ResponsiveApp/>
      {/* <CryptosGlobalInfos/> */}
    </ChakraProvider>
  );
}



export default App;