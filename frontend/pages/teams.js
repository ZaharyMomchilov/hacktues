import Card from "../components/teams/card";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
  Select,
  Switch,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
const axios = require("axios");
import Cookies from "universal-cookie";

export default function Teams(props) {
  const [teams, setTeams] = React.useState(props.teams);

  // useEffect(() => {

  //     axios({
  // 		method: 'get',
  // 		url: `https://api.hacktues.com/teams/`,
  // 		headers:
  // 		{ "Content-type": "Application/json",
  // 		},
  //     })
  //     .then(function(response){
  //         setTeams(response.data);
  //     })
  //     .catch(function (error) {
  //         console.log("get: " + error);
  //         });
  // }, [])

  return (
    <Flex
      justifyContent="center"
      flexDirection="row"
      flexWrap="wrap"
      pb={["160px", "150px"]}
      pt="50px"
    >
      {teams.map((data, index) => (
        <Card
          id={data.id}
          key={index}
          teammates={data.users}
          label={data.technologies}
          name={data.name}
        />
      ))}
    </Flex>
  );
}

export async function getServerSideProps(ctx) {
  
  var response = await axios({
    method: "get",
    url: `https://api.hacktues.com/teams/`,
    headers: { "Content-type": "Application/json" },
  }).catch(function (error) {
    console.log("get: " + error);
  });

  return { props: { teams: response.data } };
}
