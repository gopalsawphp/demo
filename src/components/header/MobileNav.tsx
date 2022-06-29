import React from "react";
import { useColorModeValue, Stack } from "@chakra-ui/react";
import { NAVITEMS } from "./models/navItems.model";
import MobileNavItem from "./MobileNavItem";

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAVITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export default MobileNav;
