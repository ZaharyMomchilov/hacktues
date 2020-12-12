import Card from '../components/teams/card'
import { Box, Heading, Flex, Text, Button, Input, InputGroup, InputLeftElement, InputRightElement, Icon, Select, Switch } from "@chakra-ui/react";

const axios = require('axios');
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default function Teams(props) {
    var i;
    var label = [0, 3 ,4]
    var peeps = ["ivan ivanov", "gosho goshov", "misho mishov", "pesho peshov"]
    for(i = 1; i < peeps.length; i++){
        peeps[i] = " " + peeps[i]
    }
    var jeez = peeps.join()

    console.log(props);

    return (
        <Flex justifyContent="center" flexDirection="row" flexWrap="wrap" pb={["160px", "150px"]} pt="50px">
            <Card  teammates={jeez} label={label} size={label.length}/>
            <Card label={label} size={label.length}/>
            <Card label={label} size={label.length}/>
            <Card label={label} size={label.length}/>
            <Card label={label} size={label.length}/>
        </Flex>
    )
}

export async function getServerSideProps(ctx){
	
	const cookies = new Cookies(ctx.req.headers.cookie);

	var response = await axios({
			method: 'get',
			url: 'https://hacktues.pythonanywhere.com/teams/',
			headers: 
			{ "Content-type": "Application/json",
			  "Authorization": `Bearer ${cookies.get('auth')}`}
			},
			)

	return {props: {teams: response.data}}

}