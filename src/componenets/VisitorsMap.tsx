// VisitorMap.tsx
import { Box } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';

const VisitorMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);  // Specify HTMLDivElement as the ref type


//   <script type="text/javascript" src="//rf.revolvermaps.com/0/0/8.js?i=57o2rh561g4&amp;m=0c&amp;c=e4aa42&amp;cr1=ffffff&amp;f=calibri&amp;l=49&amp;cw=3f6ee7&amp;cb=4a9c80" async="async"></script>
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "//rf.revolvermaps.com/0/0/3.js?i=54pbp3vvgtd&b=0&s=40&m=2&cl=ffffff&co=010020&cd=aa0000&v0=60&v1=10&r=1";
    script.async = true;

    if (mapRef.current) {
      mapRef.current.appendChild(script);  // Append the script to the div element only if mapRef.current is not null
    }

    // Optional: Cleanup the script on component unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.removeChild(script);  // Remove the script only if mapRef.current is not null
      }
    };
  }, []);  // Empty dependency array ensures this useEffect runs once

  return (
    <Box ref={mapRef} w={'100px'} h={'100px'}></Box>
  );
};

export default VisitorMap;
