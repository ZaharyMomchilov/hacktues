import { Box, Flex, Text } from "@chakra-ui/react";

const Card = (props) => {
  var color;
  var emoji;

  switch (props.place) {
    case "first":
      color = "#FFD700";
      emoji = <span role="medal">🥇</span>;
      break;
    case "second":
      color = "#D7D7D7";
      emoji = <span role="medal">🥈</span>;
      break;
    case "third":
      color = "#A77044";
      emoji = <span role="medal">🥉</span>;
      break;
  }

  return (
    <Flex
      flexDirection="column"
      flexWrap="wrap"
      alignSelf="stretch"
      flex="1 1"
      h="auto"
      m="15px"
      padding="15px"
      backgroundColor={color}
      rounded="lg"
      overflow="hidden"
    >
      <Text
        display="flex"
        color="black"
        mt="1"
        fontFamily="Rubik"
        fontWeight="semibold"
        as="h2"
      >
        {emoji}
        <span>{props.name}</span>
      </Text>
      <Box
        minH="250px"
        backgroundPosition={["", "", "", ""]}
        rounded="lg"
        paddingLeft="10px"
        paddingTop="10px"
        paddingRight="10px"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundImage={"url(" + props.img + ")"}
      />
      <Flex
        paddingTop={["10px", "10px", "10px", "25px"]}
        justifyContent="center"
        flexDirection="column"
      >
        <Text
          wordBreak="break-word"
          m="0"
          pt={["0", "0", "0", "15px"]}
          fontFamily="Rubik"
          fontWeight="300"
          as="h3"
        >
          <strong>Участници: </strong>
          {props.teammates}
        </Text>
        <Text
          wordBreak="break-word"
          m="0"
          pt={["5px", "5px", "10px", "15px"]}
          fontFamily="Rubik"
          fontWeight="300"
          as="h3"
        >
          <strong>Проект: </strong>
          {props.project}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Card;
