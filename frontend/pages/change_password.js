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

	console.log(router.query);

	return(
		<Box marginLeft="15px" marginRight="15px">
	  	<Box margin="auto" w={["100%","100%","25%","25%"]} minWidth={["none","none","35rem","35rem"]} backgroundColor="white" p="25px" mt="50px" rounded="lg">
			<Formik initialValues={{ email: "" }} 
	onSubmit={(values, actions) => {
		setTimeout(() => {
				console.log(values.email)
				// var data = JSON.stringify(values, null, 1)
				axios({
					method: 'post',
					url: `http://${process.env.hostname}/users/forgotten_password/`,
					headers: 
					{ "Content-type": "Application/json",
					"Authorization": `Bearer ${cookies.get('auth')}`

					},
					data: {"email":values.email}  
					  },)
					.then(function (response) {
						toast({ title: "Промяна на парола.", description: "Влезте в имейлът Ви, за да смените паролата.",status: "success", duration: 9000})
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
		<Button mt={4} colorScheme="green" border="0" isLoading={props.isSubmitting} type="submit">
			Смени паролата
		</Button>
		</form>
		)}
		</Formik>
	</Box>
	</Box>
	)
}