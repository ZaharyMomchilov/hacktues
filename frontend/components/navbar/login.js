import { Formik, Field } from 'formik';
import { Button, Input, InputGroup,InputRightElement, useToast, Flex, Text, Link } from "@chakra-ui/react";
import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import Cookies from 'universal-cookie'
import { useDisclosure } from "@chakra-ui/react";
import { useRouter } from 'next/router'
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton } from "@chakra-ui/react"

const cookies = new Cookies();
const axios = require('axios');

export default function Login({logIn}) {
  
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);

	function handleLog(){
		logIn(true)
	}

	const toast = useToast()
	const router = useRouter()


	if(cookies.get('discord_auth') == undefined && cookies.get('discord_refresh') == undefined){
		router.push('/login')
	}

	if(router.query['code'] != undefined){
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
                    // console.log(response.data.id);
                    userID = response.data.id
                    // axios({
                    //     method: 'get',
                    //     url: `https://cdn.discordapp.com/avatars/${response.data.id}/${response.data.avatar}.png`,
                    //     },)
                    //     .then(function (response){
                    //         console.log(response.config.url);
                    //     })
                  })
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response);
                    }
            })
        }



	return(
	  	<Popover onClose={onClose} autoFocus="false" placement="bottom">
			<PopoverTrigger>
		  		<Button marginLeft={["none","none","none","auto"]} _active={{bg:"transparent"}} _hover={{bg:"transparent"}} cursor="pointer" fontFamily="Rubik" color="white" bg="transparent" _focus={{outline: "none"}} border="0px" borderWidth="0px" >Влез</Button>
			</PopoverTrigger>
			<PopoverContent _focus={{outline:"none"}} color="white" bg="white"  borderColor="#a5cf9f">
		  		<PopoverArrow />
		  			<PopoverBody >
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
						
						toast({
        					  title: "Влизането успешно.",
        					  description: "Влизането в профила е успешно.",
        					  status: "success",
        					  duration: 9000
        					})
						router.push('/')
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
			</PopoverBody>
		</PopoverContent>
	</Popover>
	)
}