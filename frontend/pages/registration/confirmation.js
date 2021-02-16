import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

const Error = (props) => {
  return (
    <Flex
      pt="10px"
      pb="10px"
      pl="10px"
      pr="10px"
      marginLeft="33%"
      marginRight="33%"
      marginTop="5%"
      flexDirection="column"
      flexWrap="wrap"
      justifyContent="center"
      height="auto"
      borderColor="black"
      borderWidth="10px"
      rounded="lg"
      backgroundColor="white"
      overflow="hidden"
    >
      <Text textAlign="justify" alignSelf="center">
        Вашата регистрация е завършена успешно. Влезте в електронната си поща,
        за да потвърдите профила си.
      </Text>
      <Text alignSelf="center">
        <Link href="/">
          <a style={{ color: "green" }}>
            <u>Обратно към началната страница</u>
          </a>
        </Link>
      </Text>
    </Flex>
  );
};

export default Error;
