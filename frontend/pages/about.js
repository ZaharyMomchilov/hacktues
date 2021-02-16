import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Card from "../components/about/card";
import archive from "./about.json";

var stringArchive = JSON.stringify(archive);
var data = JSON.parse(stringArchive);

const GetCards = (props) => {
  var i, j;
  var cards = [];
  var counter = 0;
  for (i = 0; i < props.length; i++) {
    for (j = 0; j < props[i].winners.length; j++) {
      counter++;
      // if(props[i].id == props[i + 1].id){
      cards.push(
        <Card
          key={counter}
          position={props[i].id}
          picture={props[i].winners[j].picture}
          name={props[i].winners[j].name}
          class={props[i].winners[j].class}
        />
      );
    }
  }

  return cards;
};

const Panel = (props) => {
  return (
    <Flex
      marginLeft="auto"
      flexDirection="column"
      flexWrap="wrap"
      paddingBottom={["250px", "160px", "150px", "150px"]}
    >
      <Flex
        display="block"
        p="10px"
        marginLeft={["20px", "20px", "100px", "100px"]}
        marginRight={["20px", "20px", "100px", "100px"]}
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
        <Text
          lineHeight="1.5"
          textAlign="justify"
          fontFamily="Rubik"
          paddingBottom="10px"
          paddingLeft="10px"
        >
          <span style={{ "font-size": "20px", fontFamily: "llpixel" }}>
            Hack&nbsp;
          </span>
          <span
            style={{ fontSize: "20px", fontFamily: "llpixel", color: "green" }}
          >
            TUES
          </span>
          &nbsp; е първият и единствен по рода си хакатон в България,
          организиран от ученици за ученици. Събитието стартира през 2015г. като
          инициатива на ученици от &nbsp;
          <a style={{ color: "green" }} href="http://tues.bg/">
            Технологично училище „Електронни системи“ към ТУ - София
          </a>
          , като 6 издания по-късно, Hack TUES е вече едно от ключовите събития
          за училището. В хакатона могат да участват само ученици от ТУЕС в
          отбори с три до пет участници, които в рамките на два дни създават от
          нулата свой ИТ проект по зададена тема и след това го представят пред
          професионално жури от преподаватели и ИТ специалисти.
          <br></br>
          <br></br>Хакатонът дава възможност на учениците да усъвършенстват
          уменията си по програмиране, работа в екип и презентация на готовия
          проект. Те се срещат с ментори от реалния ИТ бизнес, като понякога
          тези познанства прерастват в предложения за практика и стаж.
          <br></br>
          <br></br>Всяка година Hack TUES се организира от координационен екип
          доброволци от 11. клас, който се грижи за цялостната организация на
          събитието под менторството на{" "}
          <a style={{ color: "green" }} href="https://aztues.bg/">
            АЗТУЕС
          </a>{" "}
          и ръководството на ТУЕС. Тази година сред организаторите има и по един
          представител от 9. и 10. клас. &nbsp;<br></br>
          <br></br>
          <span style={{ "font-size": "20px", fontFamily: "llpixel" }}>
            Hack&nbsp;
          </span>
          <span
            style={{ fontSize: "20px", fontFamily: "llpixel", color: "green" }}
          >
            TUES&nbsp;
          </span>
          <span
            style={{
              color: "#105231",
              fontFamily: "llpixel",
              "font-size": "20px",
            }}
          >
            GG
          </span>{" "}
          ще бъде за първи път изцяло онлайн. Ще се проведе в периода 11-14
          март.
        </Text>
      </Flex>
      <Flex
        rounded="lg"
        marginTop="5%"
        backgroundColor="white"
        marginLeft={["20px", "20px", "100px", "100px"]}
        marginRight={["20px", "20px", "100px", "100px"]}
        alignSelf="stretch"
        justifyContent="center"
        flexDirection="row"
        flexWrap="wrap"
      >
        {GetCards(data)}
      </Flex>
    </Flex>
  );
};

export default Panel;
