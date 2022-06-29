import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
interface FeatureProps {
  title: string;
  text: string;
}

import { Heading, Avatar, Center, useColorModeValue } from "@chakra-ui/react";

const Feature = ({ title, text }: FeatureProps) => {
  return (
    <Center>
      <Box
        className="featureCard"
        maxW={"320px"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"lg"}
          src={
            "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          }
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {title}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {text}
        </Text>
      </Box>
    </Center>
  );
};

const SteperGuide = () => {
  return (
    <Box className="steperHomePage">
      <Box p={4} className="steperTop">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            title={"Lifetime Support"}
            text={
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
            }
          />
          <Feature
            title={"Unlimited Donations"}
            text={
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
            }
          />
          <Feature
            title={"Instant Delivery"}
            text={
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
            }
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default SteperGuide;
