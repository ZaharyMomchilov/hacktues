import React from "react";
import { Box, Collapse, Button, Text } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const About = (props) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      mr={["15px", "15px", "none", "none"]}
      ml={["15px", "15px", "none", "none"]}
      backgroundColor="white"
      pt="10px"
      display="block"
      pb="25px"
      mb={["100px", "30px"]}
      borderColor="black"
      borderWidth="10px"
      rounded="lg"
      overflow="hidden"
    >
      <Text
        pl="25px"
        fontFamily="Rubik"
        fontWeight="semibold"
        color="black"
        mt="15px"
        as="h2"
        lineHeight="tight"
      >
        За събитието
      </Text>
      <Collapse animateOpacity startingHeight={100} in={isOpen}>
        <Text
          pr="25px"
          pl="25px"
          color="black"
          fontFamily="Rubik"
          fontWeight="400"
          as="h3"
        >
          {props.description}
        </Text>
      </Collapse>
      <Button
        fontFamily="Rubik"
        fontWeight="200"
        ml="25px"
        _focus={{ outline: "none" }}
        variant="solid"
        borderWidth="0px"
        onClick={onToggle}
        colorScheme="green"
        size="sm"
        mt="1rem"
      >
        Покажи {isOpen ? "по-малко" : "повече"}
      </Button>
    </Box>
  );
};

export default About;
