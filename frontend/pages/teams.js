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
			url: `https://${process.env.hostname}/teams/`,
            headers: 
            { "Content-type": "Application/json",
              "Authorization": `Bearer ${cookies.get('auth')}`,
              },
        })
        .then(function(response) {
            if(response.status == 401){
                    axios({
                        method: 'post',
                        url: `https://${process.env.hostname}/token/refresh/`,
                        headers: 
                        { "Content-type": "Application/json"},
                        data: {refresh: `${cookies.get('refresh')}`}  
                    })
                    .then(function (response) {
                        console.log(response);
                        cookies.set('auth', response.data.access, { path: '/' })
                        if(response.data.refresh != undefined){
                            cookies.set('refresh', response.data.access, { path: '/' })
                        }
                        axios({
                            method: 'post',
                            url: `https://${process.env.hostname}/users/`,
                            headers: 
                            { "Content-type": "Application/json",
                              "Authorization": `Bearer ${cookies.get('auth')}`,
                              },
                            data: data  
                              },)
                            .then(function (response) {
                                if(response.status == 201){
                                    toast({
                                          title: "Потвърждаване на акаунт",
                                          description: "Акаунтът беше успешно създаден и трябва да се потвърди, чрез имейл",
                                          status: "success",
                                          duration: 9000
                                        })

                                    router.push('/registration/confirmation')
                                }})

            }
        )}})

	return {props: {teams: response.data}}

}