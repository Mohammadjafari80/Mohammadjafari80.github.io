import {
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useBreakpointValue,
  Portal,
  Spacer,
  useColorMode,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ColorModeSwitch from "./ColorModeSwitch";
// import { useLocation } from "react-router-dom";
import "./NavBar.css";
import { Link } from "react-scroll";  // Import Link and Element from react-scroll

const NavBar = () => {
  const padding = 10;
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "dark" ? "#121212" : "#FFFFFF";

  // const location = useLocation();
  // const selectedTabIndex = useMemo(() => {
  //   switch (location.pathname) {
  //     case "/experiences":
  //       return 1;
  //     case "/publications":
  //       return 2;
  //     default:
  //       return 0;
  //   }
  // }, [location.pathname]);

  const renderMenuItems = () => (
    <>
    <Tabs variant="unstyled">
      <TabList>
        <Link to="About" smooth={true} duration={500}>  {/* Use Link component from react-scroll */}
          <Tab fontSize={15} fontWeight={"bold"}>
            About
          </Tab>
        </Link>
        <Link to="Publications" smooth={true} duration={500}>  {/* Use Link component from react-scroll */}
          <Tab fontSize={15} fontWeight={"bold"}>
            Publications
          </Tab>
        </Link>
        <Link to="Experiences" smooth={true} duration={500}>  {/* Use Link component from react-scroll */}
          <Tab fontSize={15} fontWeight={"bold"}>
            Experiences
          </Tab>
        </Link>
        <Link to="Projects" smooth={true} duration={500}>  {/* Use Link component from react-scroll */}
          <Tab fontSize={15} fontWeight={"bold"}>
            Projects
          </Tab>
        </Link>
      </TabList>
      <TabIndicator mt="-40px" height="2px" bg="#d05a45" borderRadius="5px" />
    </Tabs>
  </>
  );

  const renderDropdownMenu = () => (
    <Menu>
      <MenuButton as={IconButton} icon={<HamburgerIcon />} mr={5} />
      <Portal>
        <MenuList width="100%" position="fixed" top="0" left="0" bg={bgColor}>
          <Link to="About" smooth={true} duration={500}>  {/* Use Link component from react-scroll */}
            <MenuItem bg={bgColor} onClick={() => {
                const burger = document.getElementById('burger');
                if (burger) {
                    burger.click();
                }
            }}>About</MenuItem>
          </Link>
          <Link to="Publications" smooth={true} duration={500}>  {/* Use Link component from react-scroll */}
            <MenuItem bg={bgColor} onClick={() => {
                const burger = document.getElementById('burger');
                if (burger) {
                    burger.click();
                }
            }}>Publications</MenuItem>
          </Link>
          <Link to="Experiences" smooth={true} duration={500}>  {/* Use Link component from react-scroll */}
            <MenuItem bg={bgColor} onClick={() => {
                const burger = document.getElementById('burger');
                if (burger) {
                    burger.click();
                }
            }}>Experiences</MenuItem>
          </Link>
          <Link to="Projects" smooth={true} duration={500}>  {/* Use Link component from react-scroll */}
            <MenuItem bg={bgColor} onClick={() => {
                const burger = document.getElementById('burger');
                if (burger) {
                    burger.click();
                }
            }}>Projects</MenuItem>
          </Link>
          <MenuItem bg={bgColor}>
            <ColorModeSwitch />
          </MenuItem>
        </MenuList>
      </Portal>
    </Menu>
);

  return (
    <HStack
      m={padding}
      bgColor={bgColor}
      alignItems="baseline"
      w="100%"
      pl="15px"
      pr="15px"
      ml="auto"
      mr="auto"
      mb="0px"
      maxWidth={"95%"}
      css={{
        "@media (min-width: 1200px)": {
          maxWidth: "60%",
        },
      }}
    >
      {/* <Image></Image> */}
      {isMobile ? renderDropdownMenu() : null}
      {!isMobile && renderMenuItems()}
      {!isMobile && (
        <>
          <Spacer />
          <ColorModeSwitch />
        </>
      )}
    </HStack>
  );
};

export default NavBar;
