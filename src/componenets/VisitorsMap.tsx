// VisitorMap.tsx
import { Flex, Center } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';

const VisitorMap: React.FC = () => {
  const mapRef = useRef(null);  // Create a ref to hold the div element
  
{/* <script type="text/javascript" src="//rf.revolvermaps.com/0/0/8.js?i=57o2rh561g4&amp;m=0c&amp;c=e4aa42&amp;cr1=ffffff&amp;f=calibri&amp;l=49&amp;cw=3f6ee7&amp;cb=4a9c80" async="async"></script> */}

useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "//rf.revolvermaps.com/0/0/8.js?i=57o2rh561g4&amp;m=0c&amp;c=e4aa42&amp;cr1=ffffff&amp;f=calibri&amp;l=49&amp;cw=3f6ee7&amp;cb=4a9c80";
    script.async = true;
    mapRef.current.appendChild(script);  // Append the script to the div element

    // Optional: Cleanup the script on component unmount
    return () => {
      mapRef.current.removeChild(script);
    };
  }, []);  // Empty dependency array ensures this useEffect runs once

  return (
    <Center>
      <Flex ref={mapRef} w={'100px'} h={'100px'} mx={'auto'} alignItems={'center'} justify={'center'}></Flex>
    </Center>
  );
};

export default VisitorMap;
