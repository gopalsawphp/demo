import React from "react";
import { Box } from "@chakra-ui/react";
import DestopHomeSlider from "./DestopHomeSlider";
import MobileHomeSlider from "./MobileHomeSlider";

const HomeSlider = () => {
  return (
    <>
      <Box display={{ base: "none", md: "flex" }}>
        <DestopHomeSlider />
      </Box>

      <Box display={{ base: "flex", md: "none" }}>
        <MobileHomeSlider />
      </Box>
    </>
  );
};

export default HomeSlider;
