import { Box, Flex, Text, Button } from "@chakra-ui/react";
import {useRouter} from 'next/router'
import axios from 'axios'

import Cookies from 'universal-cookie';
const cookies = new Cookies();
const Player = (props) => {

  var router = useRouter()

  function leave() {
    axios({
      method: 'post',
      url: `https://${process.env.hostname}/users/${props.user_id}/leave_team/`,
      headers: 
					{ "Content-type": "Application/json",
					"Authorization": `Bearer ${cookies.get('auth')}`
					}})
    .then(function (response) {
      router.push('/');
    })
  }

  function makecaptain(props) {
    axios({
      method: 'post',
      url: `https://${process.env.hostname}/teams/${props.team_id}/change_captain/`,
      headers: 
      { "Content-type": "Application/json",
      "Authorization": `Bearer ${cookies.get('auth')}`
      },
      data: {"users": props.id}
    })
    .then(function (response) {
      router.reload();
    })
  }
  
  var captain
  var position
  var remove
  if(props.captain){
      // leave = <Button colorScheme="green" border="0" cursor="pointer" onClick={() => leave()}>Напусни</Button>
      position = "Капитан"
  }
  else if(props.player){
    captain = <Button  colorScheme="red" border="0" cursor="pointer" onClick={() => leave()}>Напусни</Button>
    position = "Участник"
}
  else if(props.teammate){
    captain = <Button mb={3} colorScheme="green" border="0" cursor="pointer" onClick={() => makecaptain()}>Направи капитан</Button>
    remove = <Button colorScheme="red" border="0" cursor="pointer" onClick={() => remove()}>Премахни</Button>
    position = "Участник"
  }
  else if(props.outside){
    position = "Участник"
  }

    return (
      <Flex background="white" p="50px" flexDirection="row" flexWrap="wrap" alignItems="center" w="350px" h="250px" m="15px" rounded="lg" overflow="hidden">
        <Flex paddingBottom={["10px","10px","10px","25px"]} justifyContent="center" flexDirection="column">
            <Text wordBreak="break-word" m="0" pt={["0","0","0","15px"]} fontFamily="Rubik">{props.name}</Text>
            <Text wordBreak="break-word" m="0" pt={["5px","5px","10px","15px"]} fontFamily="Rubik">{position}</Text>
        </Flex>
        <Flex flexDirection="column">
        {captain}
        {remove}
        {leave}

        </Flex>
      </Flex>
    );
}

export default Player;