import React, { useState }  from 'react';
import {
  Box,
  // Modal,
  // ModalOverlay,
  Input,
  useBreakpointValue,
  Link,
  Image,
  // ModalContent,
  // ModalHeader,
  // ModalCloseButton,
  // ModalBody,
} from '@chakra-ui/react';
import CryptosGlobalInfos from './bands';
import websiteSettingsImage from './menu.png';
// import CustomModalParamsInfo from './modalParametres/modalParams'

function ResponsiveApp() {
 
  // const [isModalOpen, setIsModalOpen] = useState(false);


  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };



   

    const responsiveImageSize = useBreakpointValue({
        base: "100px",
        md: "70px",
        lg: "20px",
      });
  
  
    const responsiveHeightPage = useBreakpointValue({
      base: "500vh",
      md: "375vh",
      lg: "200vh",
    });
    
    const responsiveHeightTopBand = useBreakpointValue({
      base: "300px",
      md: "200px",
      lg: "150px",
    });
     
    
  
    const responsiveWidthInput = useBreakpointValue({
      base: "600px",
      md: "400px",
      lg: "250px",
    });
  
    const responsiveHeightInput = useBreakpointValue({
      base: "100px",
      md: "70px",
      lg: "40px",
    });
  
    const responsiveFontSizeInput = useBreakpointValue({
      base: "40px",
      md: "30px",
      lg: "20px",
    });
  
  
  
  
  
    return (
      <Box minW={"150vh"} minH={responsiveHeightPage} bg="#101111" 
      overflowY="hidden" 
      sx={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}>
          
  
        <Box
          position="relative"
          id="top-band"
          height={responsiveHeightTopBand}
          bg={'#1B1C1D'}
          borderBottom="1px solid"
          borderColor="rgba(128, 128, 128, 0.3)"
          display="flex"
          alignItems="center"
        >
  
  
  
            <Link >
            <Image position={'relative'} left={'20px'} minWidth={responsiveImageSize} width={'50px'} src={websiteSettingsImage} alt="Description de l'image" />
          </Link>
          

          
  



  
          <Input
            textAlign="center" 
            placeholder="Search any Crypto here"
            _placeholder={{color: 'gray'}}
            width={responsiveWidthInput}
            height={responsiveHeightInput}
            color='white'
            //va falloir faire en sortre qu'on  puisse ecrire et que y'ait un algo
            left={'calc(50% - 6%)'}
            transform="translateX(-50%)"
            fontSize={responsiveFontSizeInput}
            />
            
        
        </Box>
  
        <CryptosGlobalInfos />
  
          
      </Box>
    );
  }

export default ResponsiveApp;