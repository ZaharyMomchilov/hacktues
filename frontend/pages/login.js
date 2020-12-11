import React from "react";
import { Box, Button, Input, InputGroup, InputRightElement, useToast, Flex, Text, Link } from "@chakra-ui/react";
import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from "@chakra-ui/react";

import { Formik, Field, Form } from 'formik';
import { useDisclosure} from "@chakra-ui/react";
const axios = require('axios');
import Cookies from 'universal-cookie';
import { ViewIcon, ViewOffIcon} from '@chakra-ui/icons'

import { useRouter } from "next/router";
import Router from 'next/router'

const cookies = new Cookies();

export default function Login({logIn}) {
	
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);

	var router = useRouter()
	const toast = useToast()

	const CLIENT_ID = '743157046677078016'
    const CLIENT_SECRET = 'zz8dSlB1maL4tUIWDCCLpIpn8MVPYqKP'
	var userID;
	
	if(cookies.get('discord_auth') == undefined && cookies.get('discord_refresh') == undefined && router.query['code'] == undefined){
		return(<Flex margin="auto" marginLeft="15px" marginRight="15px" paddingBottom="200px">
        <Flex flexDirection="column" flexWrap="wrap" margin="auto" backgroundColor="white" margin="auto" marginTop="50px" padding="20px" rounded="lg" w={["100%","100%","33%","33%"]} minWidth={["none","none","55rem","55rem"]}>
			<Text fontSize="15px" mt={0}>Влезте, чрез Discord</Text>
            <Button margin="auto" size="lg" border={0} color="white" backgroundColor="#7289da" ><Link isExternal href='https://discord.com/api/oauth2/authorize?client_id=743157046677078016&redirect_uri=https%3A%2F%2Fhacktues-git-wave2.zaharymomchilov.vercel.app%2Flogin&response_type=code&scope=identify%20email'><a onClick={() => {router.push('/')}}>Login with Discord</a></Link></Button>
	    </Flex>
      </Flex>)
	}

	if(router.query['code'] != undefined){
        let payload = new FormData();
        payload.append("client_id",CLIENT_ID)
        payload.append("client_secret",CLIENT_SECRET)
        payload.append("grant_type",'authorization_code')
        payload.append("redirect_uri",'https://hacktues-git-wave2.zaharymomchilov.vercel.app/login')
        payload.append("code", router.query['code'])
        payload.append("scope","identify email")

    axios({
        method: 'post',
        url: 'https://discord.com/api/oauth2/token',
        headers: 
        { "Content-type": "application/x-www-form-urlencoded"},
        data: payload
          },)
        .then(function (response) {

            cookies.set('discord_auth', response.data.access_token, { path: '/' })
            cookies.set('discord_refresh', response.data.refresh_token, { path: '/' })

            axios({
                method: 'get',
                url: 'https://discordapp.com/api/users/@me',
                headers: 
                {
                  "Authorization": `Bearer ${response.data.access_token}`}},)
                .then(function (response){
                    userID = response.data.id
                  
                  })
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response);
                    }
            })
        }

	return(
		<Box marginLeft="15px" marginRight="15px">
	  	<Box margin="auto" w={["100%","100%","25%","25%"]} minWidth={["none","none","35rem","35rem"]} backgroundColor="white" p="25px" mt="50px" rounded="lg">
			<Formik initialValues={{ email: "", password: "" }} 
	onSubmit={(values, actions) => {
		setTimeout(() => {
				var data = JSON.stringify(values, null, 1)
				axios({
					method: 'post',
					url: 'https://hacktues.pythonanywhere.com/token/',
					headers: 
					{ "Content-type": "Application/json"},
					data: data  
					  },)
					.then(function (response) {
						console.log(response);
					  	cookies.set('auth', response.data.access, { path: '/' })
						cookies.set('refresh', response.data.refresh, { path: '/' })
						toast({ title: "Влизането успешно.", description: "Влизането в профила е успешно.",status: "success", duration: 9000})
					})
					.then(function(){
						
    					const CLIENT_ID = '743157046677078016'
    					const CLIENT_SECRET = 'zz8dSlB1maL4tUIWDCCLpIpn8MVPYqKP'

						let payload = new FormData();
        				payload.append("client_id",CLIENT_ID)
        				payload.append("client_secret",CLIENT_SECRET)
        				payload.append("grant_type",'authorization_code')
        				payload.append("redirect_uri",'https://hacktues-git-wave2.zaharymomchilov.vercel.app/registration/second_step')
        				payload.append("code", router.query['code'])
        				payload.append("scope","identify email")
									
						axios({
       							method: 'post',
        						url: 'https://discord.com/api/oauth2/token',
        						headers: { "Content-type": "application/x-www-form-urlencoded"},
        						data: payload
          					},)
        				.then(function (response) {
        				    cookies.set('discord_auth', response.data.access_token, { path: '/' })
        				    cookies.set('discord_refresh', response.data.refresh_token, { path: '/' })
							router.push('/')
        				    })
						})
					.catch(function (error) {
						if (error.response) {
							toast({
        						title: "Влизането не е успешно.",
        						description: error.response.data.detail,
        						status: "error",
        						duration: 9000
        					})
						}})
								console.log(JSON.stringify(values, null, 1))
								actions.setSubmitting(false)
							}, 1000);
					}}>
{props => (
		<form onSubmit={props.handleSubmit}>
		<Field name="email">
			{({ field, form }) => (
			  	<FormControl isRequired isInvalid={form.errors.email && form.touched.email}>
					<FormLabel color="black" paddingBottom="5px" fontFamily="Rubik" fontSize="15px" htmlFor="text">
							E-mail
					</FormLabel>
					<Input _focus={{outline:"none"}} outline="lightgrey" variant="outline" {...field} id="email1" />
					<FormErrorMessage>{form.errors.email}</FormErrorMessage>
			  	</FormControl>
			)}
		</Field>
			<Field name="password" >
				{({ field, form }) => (
				<FormControl isRequired isInvalid={form.errors.password && form.touched.password}>
					<FormLabel paddingTop="15px" paddingBottom="5px" color="black" fontFamily="Rubik" fontSize="15px" htmlFor="password">
						Парола
					</FormLabel>
					<InputGroup size="md">
						<Input id="password1" pr="4.5rem" type={show ? "text" : "password"} isRequired {...field} isInvalid={form.errors.password && form.touched.password}/>
							<InputRightElement width="4.5rem">
								<Button fontFamily="Rubik" fontSize="15px" border="0" colorScheme="green" _focus={{outline:"none"}} h="1.75rem" size="sm" onClick={handleClick}>
									{show ? <ViewIcon/> : <ViewOffIcon/>}
								</Button>
							</InputRightElement>
						</InputGroup>
				</FormControl>)}
			</Field>
			<Button mt={4} colorScheme="green" border="0" isLoading={props.isSubmitting} type="submit">
				Логин
			</Button>
		</form>
		)}
		</Formik>
	</Box>
	</Box>
	)
}