import React from "react";
import { Flex, Box, Text, extendTheme } from "@chakra-ui/react";
import Card from "../components/archive/card";
import About from "../components/archive/about";
import Numbers from "../components/archive/numbers";
// import archive from "./archive.json";
import { AiOutlineTeam, AiOutlineUser, AiOutlineGift } from "react-icons/ai";

// var data = JSON.parse(JSON.stringify(archive));

const Hacktues = ({ currData }) => {
  return (
    <Flex
      display="block"
      width="100%"
      flexDirection="column"
      flexWrap="wrap"
      pb="150px"
      pt="50px"
      justifyContent="center"
      paddingLeft={["auto", "50px", "50px", "75px"]}
      paddingRight={["auto", "50px", "50px", "75px"]}
      borderColor="black"
    >
      <Flex
        flexDirection={["column", "column", "column", "row"]}
        flexWrap="wrap"
      >
        <Card
          img="https://hacktues.pythonanywhere.com/static/frontend/htgg-1.png"
          name={"Holdinga"}
          teammates={"Виктор Горчилов - 12А, Валентин Спасов - 12А, Самуил Георгиев - 12А, Антон Янчев - 12А"}
          place={"first"}
          project={"CyclePath"}
        />
        <Card
          img={"https://hacktues.pythonanywhere.com/static/frontend/htgg-2.png"}
          name={"Мечо Пух"}
          teammates={"Стоян Тинчев - 11А, Александър Найденов - 11А, Стефан Босев - 11А, Кристиян Стоименов - 11А"}
          place={"second"}
          project={"Verda"}
        />
        <Card
          img={"https://hacktues.pythonanywhere.com/static/frontend/htgg-3.png"}
          name={"789 2.0"}
          teammates={"Илиана Генова - 12Б, Венелин Атанасов - 12Г, Стефан Антонов - 12Г"}
          place={"third"}
          project={"AutoHome"}
        />
      </Flex>
      {/* <Flex
        margin="15px"
        backgroundColor="white"
        rounded="lg"
        flexDirection={["column", "column", "column", "row"]}
        flexWrap="wrap"
      >
        <Flex
          flex="1 1"
          flexDirection="column"
          flexWrap="wrap"
          justifyContent="center"
        >
          <Text
            textAlign="center"
            color="black"
            mt="1"
            p="10px"
            ml={0}
            mr={0}
            pl={0}
            pr={0}
            fontFamily="Rubik"
            as="h2"
          >
            Участници
          </Text>
          <Text
            textAlign="center"
            color="black"
            fontWeight="semibold"
            fontFamily="Rubik"
            as="h1"
            fontWeight="400"
          >
            <AiOutlineUser style={{ position: "relative", top: "3px" }} />{" "}
            {currData.allParticipants}
          </Text>
        </Flex>
        <Flex
          flex="1 1"
          flexDirection="column"
          flexWrap="wrap"
          justifyContent="center"
        >
          <Text
            textAlign="center"
            color="black"
            mt="1"
            p="10px"
            ml={0}
            mr={0}
            pl={0}
            pr={0}
            fontFamily="Rubik"
            as="h2"
          >
            Отбори
          </Text>
          <Text
            textAlign="center"
            color="black"
            fontWeight="semibold"
            as="h1"
            fontFamily="Rubik"
            fontWeight="400"
          >
            <AiOutlineTeam style={{ position: "relative", top: "3px" }} />{" "}
            {currData.teams}
          </Text>
        </Flex>
        <Flex
          flex="1 1"
          flexDirection="column"
          flexWrap="wrap"
          justifyContent="center"
        >
          <Text
            textAlign="center"
            color="black"
            mt="1"
            p="10px"
            ml={0}
            mr={0}
            pl={0}
            pr={0}
            fontFamily="Rubik"
            as="h2"
          >
            Отличени отбори
          </Text>
          <Text
            textAlign="center"
            color="black"
            fontWeight="semibold"
            as="h1"
            fontFamily="Rubik"
            fontWeight="400"
          >
            <AiOutlineGift style={{ position: "relative", top: "3px" }} />{" "}
            {currData.valuedProjects}
          </Text>
        </Flex> */}
      {/* </Flex> */}
      {/* <Numbers padding="1%" allParticipants={currData.allParticipants} teams={currData.teams} valuedProjects={currData.valuedProjects}/> */}
      {/* <About description={currData.description} /> */}
    </Flex>
  );
};

export default Hacktues