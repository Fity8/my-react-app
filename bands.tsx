import React, { useState, useEffect } from 'react';
import fetchDataTop10 from './fetchData/fetchataTop10';
import fetchDataInfos from './fetchData/fetchDataInfos';
import {
  Box, Container, Divider, useBreakpointValue, HStack
} from '@chakra-ui/react';

function CryptosGlobalInfos() {  
  
  const responsiveWidthBands = useBreakpointValue({
    base:'1200px',
    sm: '1100px',
    md: '1000px',
    lg: '1100px',
    xl: '1280px',
  });

  const responsiveHeightBands = useBreakpointValue({
    base:'450vh',
    sm: '155vh',
    md: '155vh',
    lg: '150vh',
    xl: '150vh',
  });



  const responsiveFontSizeBands = useBreakpointValue({
    base:'40px',
    sm: '32px',
    md: '20px',
    lg: '18px',
    xl: '17px',
  });

  const responsiveFontSizeTopBands = useBreakpointValue({
    base:'38px',
    sm: '32px',
    md: '20px',
    lg: '18px',
    xl: '17px',
  });

  const responsivePaddingBands = useBreakpointValue({
    base:'120px',
    sm: '100px',
    md: '70px',
    lg: '50px',
    xl: '50px',
  });
  


  const isVolumeVisible = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
    xl: true,
  });

  const is7dVisible = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
  });


  
  const responsiveNameBands = useBreakpointValue({
    base:'20px',
    sm: '20px',
    md: '20px',
    lg: '20px',
    xl: '20px',
  });

  const responsiveVolumeBands = useBreakpointValue({
    md: '250px',
    lg: '245px',
    xl: '260px',
  });

  const responsiveMarketBands = useBreakpointValue({
    base:'390px',
    sm: '350px',
    md: '440px',
    lg: '440px',
    xl: '475px',
  });

  const responsivePriceBands = useBreakpointValue({
    base:'700px',
    sm: '650px',
    md: '670px',
    lg: '670px',
    xl: '700px',
  });

  const responsiv24hBands = useBreakpointValue({
    base:'960px',
    sm: '900px',
    md: '830px',
    lg: '835px',
    xl: '900px',
  });

  const responsiv7dBands = useBreakpointValue({
    
    lg: '1000px',
    xl: '1080px',
  });



  const responsiveMarginTop = useBreakpointValue({
    
    base:'100px',
    sm: '100px',
    md: '50px',
    lg: '0px',
    xl: '0px',
  });
  

  interface PriceDataItem {
    market_cap: string;
    price: string;
    price_change_24h: string;
    volume: string;
    price_change_7d: string;
    name: string;
  }
  
  interface PriceData {
    data: PriceDataItem[];
  }
  
    const [names, setNames] = useState<string[]>([]);
    const [dataApiInfos, setDataApiInfos] = useState<PriceData | null>(null);
    // const[currentName, setCurrentName] = useState(0)
    
useEffect(() => {
  const fetchData = async () => {
    const top10 = await fetchDataTop10();
    if (!top10) return;
    setNames(top10);
    console.log(top10, 'chire');
  };

  fetchData();
}, []);

useEffect(() => {
    if (names.length === 0) {
      return;
    }

  const merdouille = async () => {
    const infos = await fetchDataInfos(names);
    setDataApiInfos(infos);
    // console.log(infos, 'infos');
  }

  merdouille();
    
}, [names]);





 function formatNumber(input: string): string {
    const number = parseFloat(input);
  
    if (number >= 1_000_000_000) {
      return `${(number / 1_000_000_000).toFixed(1)}B`;
    } else if (number >= 1_000_000) {
      return `${(number / 1_000_000).toFixed(1)}M`;
    } else if (number >= 1000) {
      return `${(number / 1000).toFixed(1)}K`;
    } else {
      return number.toFixed(2);
    }
  }
  console.log('Names:', names);
  console.log("Debug dataApiInfos:", dataApiInfos);


  
  return (
    <Container position="relative" top={'150px'} minWidth={responsiveWidthBands}  minH={responsiveHeightBands} >

    <Divider position = {'relative'} bottom={'0px'} borderColor="gray.300" marginTop={responsiveMarginTop} marginBottom={'20px'}/>

<HStack spacing={['140px','150px','120px','130px','150px']}>

    <Box
      position="relative"
      color={'white'}
      left="20px"
      fontSize= {responsiveFontSizeTopBands}
      display="inline-block" 
    >
      <b>Cryto-current</b>
    </Box>

  {isVolumeVisible && (
    <Box
        position="relative"
        color={'white'}
        fontSize= {responsiveFontSizeTopBands}
        display="inline-block" 
      >
        <b>Volume</b>
      </Box>
  )}
    
    <Box
      position="relative"
      color={'white'}
      fontSize= {responsiveFontSizeTopBands}
      display="inline-block" 
    >
      <b>Market_cap</b>
    </Box>

    <Box
      position="relative"
      color={'white'}
      fontSize= {responsiveFontSizeTopBands}
      display="inline-block" 
    >
      <b>Price</b>
    </Box>
    
    <Box
      position="relative"
      color={'white'}
      fontSize= {responsiveFontSizeTopBands}
      display="inline-block" 
    >
      <b>24h</b>
    </Box>

  {is7dVisible && (
    <Box 
        position="relative"
        color={'white'}
        fontSize= {responsiveFontSizeTopBands}
        display="inline-block" 
      >
        <b>7d</b>
      </Box>
  )}
  </HStack>

  {dataApiInfos && Object.entries(dataApiInfos.data).map(([key, value], index) => {
        const formattedPrice = parseFloat(value.price).toFixed(2)
       
      return (
        <Box
          key={key}
          position={'relative'}
          top={'30px'}
          borderTop="1px solid gray"
          color={'white'}
          height={'80px'} 
          display={'flex'}
          justifyContent="left"
          alignItems={'center'}
          _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
          fontFamily = {'Franklin Gothic, Arial Bold'}
          padding={responsivePaddingBands}

        >
                  <HStack spacing={['120px','130px','120px','130px','150px']}>

          <Box fontSize={responsiveFontSizeBands} position={'absolute'} left={responsiveNameBands}>{names[index]}</Box>
          {isVolumeVisible && (
                      <Box fontSize={responsiveFontSizeBands}  position={'absolute'} left={responsiveVolumeBands}> $ {formatNumber(value.volume)}</Box>
          )}
          <Box fontSize={responsiveFontSizeBands} position={'absolute'} left={responsiveMarketBands}> $ {formatNumber(value.market_cap)}</Box>
          <Box fontSize={responsiveFontSizeBands} position={'absolute'} left={responsivePriceBands}> $ {formattedPrice}</Box>
          <Box fontSize={responsiveFontSizeBands} position={'absolute'} left={responsiv24hBands} padding={'5px'} borderRadius={'10px'} bg={parseFloat(value.price_change_24h) >= 0 ? 'green.700' : 'red.700'} color={parseFloat(value.price_change_24h) >= 0 ? '#32DA23' : '#FF2E2E'}> {formatNumber(value.price_change_24h)}%</Box>
          {is7dVisible && (
                      <Box fontSize={responsiveFontSizeBands} position={'absolute'} left={responsiv7dBands} padding={'5px'} borderRadius={'10px'} bg={parseFloat(value.price_change_24h) >= 0 ? 'green.700' : 'red.700'} color={parseFloat(value.price_change_24h) >= 0 ? '#32DA23' : '#FF2E2E'}> {formatNumber(value.price_change_7d)}%</Box>
            )}
          
          </HStack>

        </Box>
      );
  })}    
</Container>
  );
}

export default CryptosGlobalInfos;

