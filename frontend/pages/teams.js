import Card from '../components/teams/card'
import { Box, Heading, Flex, Text, Button, Input, InputGroup, InputLeftElement, InputRightElement, Icon, Select, Switch } from "@chakra-ui/react";

const axios = require('axios');
import Cookies from 'universal-cookie';

export default function Teams(props) {
    
    const listItems = props.teams.map((data, index) =>
        <Card id={data.id} key={index} teammates={data.users} label={data.technologies} name={data.name}/>
    );

    return (
        <Flex justifyContent="center" flexDirection="row" flexWrap="wrap" pb={["160px", "150px"]} pt="50px">
            {listItems}
        </Flex>
    )
}

export async function getServerSideProps(ctx){

	const cookies = new Cookies(ctx.req.headers.cookie);

	var response = await axios({
			method: 'get',
			url: `http://${process.env.hostname}/teams/`,
			headers: 
			{ "Content-type": "Application/json",
            "Authorization": `Bearer ${cookies.get('auth')}`
			},
        })

	return {props: {teams: response.data}}

}