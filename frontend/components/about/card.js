import { Flex, Text, Image } from "@chakra-ui/react";

const Card = (props) => {
  return (
    <Flex
      h="450px"
      width="300px"
      flexDirection="column"
      flexWrap="wrap"
      alignSelf="stretch"
      h="auto"
      m="15px"
      padding="15px"
      rounded="lg"
      overflow="hidden"
    >
      <Text
        fontFamily="Rubik"
        paddingLeft="10px"
        display="flex"
        mt="1"
        pb="0"
        mb="0"
        as="h3"
      >
        {props.name}
      </Text>
      <Image
        objectFit="contain"
        width="100%"
        h="400px"
        backgroundPosition={["", "", "", ""]}
        rounded="lg"
        paddingLeft="10px"
        mt="0"
        paddingRight="10px"
        src={props.picture}
      />
      <Flex paddingLeft="10px" justifyContent="center" flexDirection="column">
        <Text fontFamily="Rubik" wordBreak="break-word" m="0">
          <strong>Позиция: </strong>
          {props.position}
        </Text>
        <Text fontFamily="Rubik" wordBreak="break-word" m="0" pt="5px">
          <strong>Клас: </strong>
          {props.class}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Card;
