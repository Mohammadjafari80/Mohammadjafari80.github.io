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
import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";
import { useMemo } from "react";

const NavBar = () => {
  const padding = 10;
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "dark" ? "#121212" : "#FFFFFF";

  const location = useLocation();
  const selectedTabIndex = useMemo(() => {
    switch (location.pathname) {
      case "/experiences":
        return 1;
      case "/publications":
        return 2;
      default:
        return 0;
    }
  }, [location.pathname]);

  const renderMenuItems = () => (
    <>
      {/* <Text fontSize="18px" fontWeight="400" pl={35} cursor="pointer">
        <NavLink to="/home">Home</NavLink>
      </Text> */}
      {/* <Text fontSize="18px" fontWeight="400" pl={35} cursor="pointer">
        <NavLink to="/materials">Materials</NavLink>
      </Text>
      <Text fontSize="18px" fontWeight="400" pl={35} cursor="pointer">
        <NavLink to="/assignments">Assignments</NavLink>
      </Text> */}

      <Tabs variant="unstyled" index={selectedTabIndex}>
        <TabList>
          <NavLink
            to="/home"
            className={({ isActive }) => {
              return isActive ? "active-link" : "";
            }}
          >
            <Tab fontSize={15} fontWeight={"bold"}>
              Home
            </Tab>
          </NavLink>
          <NavLink
            to="/experiences"
            className={({ isActive }) => {
              return isActive ? "active-link" : "";
            }}
          >
            <Tab fontSize={15} fontWeight={"bold"}>
            Experiences
            </Tab>
          </NavLink>
          <NavLink
            to="/publications"
            className={({ isActive }) => {
              return isActive ? "active-link" : "";
            }}
          >
            <Tab fontSize={15} fontWeight={"bold"}>
              Publications
            </Tab>
          </NavLink>
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
          <NavLink to="/home">
            <MenuItem bg={bgColor}>Home</MenuItem>
          </NavLink>
          <NavLink to="/experiences">
            <MenuItem bg={bgColor}>Experiences</MenuItem>
          </NavLink>
          <NavLink to="/publications">
            <MenuItem bg={bgColor}>Publications</MenuItem>
          </NavLink>
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
          maxWidth: "70%",
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
