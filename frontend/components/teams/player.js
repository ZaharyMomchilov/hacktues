import { Box, Flex, Text, Button } from "@chakra-ui/react";

const Player = (props) => {

  function leave() {
    axios({
      method: 'post',
      url: `https://hacktues.pythonanywhere.com/users/${props.user_id}/leave_team`,
      header: 'Content-Type: application/json'
    })
    .then(function (response) {
      cookies.set('auth', response.data.access, { path: '/' })
      cookies.set('refresh', response.data.refresh, { path: '/' })
    })
  }

  function makecaptain(props) {
    axios({
      method: 'post',
      url: `https://hacktues.pythonanywhere.com/teams/${props.team_id}/change_captain/`,
      header: 'Content-Type: application/json',
      data: {"users": props.id}
    })
    .then(function (response) {
      cookies.set('auth', response.data.access, { path: '/' })
      cookies.set('refresh', response.data.refresh, { path: '/' })
    })
  }
  
  var captain
  var position
  if(props.captain){
      leave = <Button colorScheme="green" border="0" cursor="pointer" onClick={() => leave()}>Напусни</Button>
      position = "Капитан"
  }
  else if(props.player){
    captain = <Button colorScheme="green" border="0" cursor="pointer" onClick={() => leave()}>Напусни</Button>
    position = "Участник"
}
  else if(props.teammate){
    captain = <Button colorScheme="green" border="0" cursor="pointer" onClick={() => makecaptain()}>Направи капитан</Button>
    position = "Участник"
  }

    return (
      <Flex background="white" p="50px" flexDirection="column" flexWrap="wrap" alignSelf="stretch" w="350px" h="250px" m="15px" rounded="lg" overflow="hidden">
        <Flex paddingBottom={["10px","10px","10px","25px"]} justifyContent="center" flexDirection="column">
            <Text wordBreak="break-word" m="0" pt={["0","0","0","15px"]} fontFamily="Rubik">{props.name}</Text>
            <Text wordBreak="break-word" m="0" pt={["5px","5px","10px","15px"]} fontFamily="Rubik">{position}</Text>
        </Flex>
        {captain}
        {leave}
      </Flex>
    );
}

export default Player;