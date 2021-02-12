import * as React from "react";
import { motion } from "framer-motion";
import { Icon, Box, Button, Text, Link as ChakraLink } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    display: "flex",
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = (props) => {
  var router = useRouter();
  const cookies = new Cookies();

  if (props.reg) {
    var button = (
      <Button
        cursor="pointer"
        textAlign="center"
        _hover={{ bg: "#009d60" }}
        _focus={{ outline: "none" }}
        textColor="black"
        textDecoration="none"
        background="none"
        fontFamily="Rubik"
        border="0px"
        variant="solid"
        borderWidth="0px"
      >
        <Text cursor="pointer" _hover={{ textDecoration: "none" }}>
          {props.name}
        </Text>
      </Button>
    );
  } else {
    var button = (
      <Button
        cursor="pointer"
        textAlign="center"
        _hover={{ bg: "#009d60" }}
        _focus={{ outline: "none" }}
        textColor="black"
        textDecoration="none"
        background="none"
        fontFamily="Rubik"
        border="0px"
        borderWidth="0px"
      >
        <Text cursor="pointer" _hover={{ textDecoration: "none" }}>
          {props.name}
        </Text>
      </Button>
    );
  }

  if (props.icon == "GG") {
    var icon = (
      <Text
        marginRight="6px"
        left="-5px"
        position="relative"
        top="-2px"
        fontFamily="llpixel"
        m={0}
        p={0}
        fontSize="17px"
        textColor="currentColor"
      >
        GG
      </Text>
    );
  } else {
    var icon = (
      <Icon left="-3px" position="relative" top={props.top} as={props.icon} />
    );
  }

  if (!props.link) {
    return (
      <ChakraLink
        as={motion.div}
        display="flex"
        alignItems="center"
        justifyContent="center"
        variants={variants}
        cursor="pointer"
        _focus={{ outline: "none" }}
        href="/"
        cursor="pointer"
        textDecoration="none"
        onClick={() => {
          cookies.remove("auth");
          cookies.remove("refresh");
          // router.push("/");
        }}
      >
        <Box
          as={motion.div}
          w="80%"
          p="3px"
          _hover={{ bg: "#009d60" }}
          _active={{ bg: "transparent" }}
          background="none"
          justifyContent="center"
          rounded="lg"
          margin="0"
          marginBottom="20px"
          display="flex"
          alignItems="center"
          cursor="pointer"
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {icon}
          {button}
        </Box>
      </ChakraLink>
    );
  } else if (!props.name && !props.icon) {
    return (
      <Link
        as={motion.div}
        display="flex"
        alignItems="center"
        justifyContent="center"
        variants={variants}
        cursor="pointer"
        _focus={{ outline: "none" }}
        cursor="pointer"
        href="/"
        textDecoration="none"
      >
        <Box
          onClick={() => {
            // router.push("/");
          }}
          href="/"
          as={motion.div}
          w="100%"
          p="3px"
          background="none"
          justifyContent="center"
          rounded="lg"
          margin="0"
          display="flex"
          alignItems="center"
          cursor="pointer"
          variants={variants}
        >
          <Text
            href="/"
            textDecoration="none"
            fontFamily="llpixel"
            color="#009d60"
            fontSize="1.25rem"
            fontWeight="200"
            size="lg"
          >
            Hack TUES <span style={{ color: "#105231" }}>GG</span>
          </Text>
        </Box>
      </Link>
    );
  } else {
    return (
      <ChakraLink
        as={motion.div}
        display="flex"
        alignItems="center"
        justifyContent="center"
        variants={variants}
        cursor="pointer"
        _focus={{ outline: "none" }}
        cursor="pointer"
        onClick={() => {
          // router.push(props.link);
        }}
        href={props.link}
        style={{textDecoration:"none"}}
      >
        <Button
          style={{textDecoration:"none"}}
          w="auto"
          as={motion.div}
          variants={variants}
          p="3px"
          _hover={{ bg: "#009d60" }}
          _active={{ bg: "transparent" }}
          background="none"
          justifyContent="center"
          rounded="lg"
          margin="0"
          marginBottom="20px"
          display="flex"
          flexDirection="row"
          alignItems="center"
          cursor="pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          cursor="pointer"
          textAlign="center"
          _hover={{ bg: "#009d60" }}
          _focus={{ outline: "none" }}
          textColor="black"
          textDecoration="none"
          background="none"
          fontFamily="Rubik"
          border="0px"
          borderWidth="0px"
        >
          <Text
            style={{textDecoration:"none"}}
            display="flex"
            flexDirection="row"
            cursor="pointer"
            _hover={{ textDecoration: "none" }}
          >
            {/* <Box as={motion.div} w="80%" p="3px"  _hover={{bg:"#009d60"}} _active={{bg:"transparent"}} background="none"  justifyContent="center" rounded="lg" margin="0" marginBottom="20px" display="flex" alignItems="center" cursor="pointer"
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      > */}
            {icon}
            {/* {button} */}
            {props.name}
            {/* </Box> */}
          </Text>
        </Button>
      </ChakraLink>
    );
  }
};
