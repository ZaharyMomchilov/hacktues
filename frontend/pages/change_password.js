import React from "react";
import { Box, Button, Input, InputGroup, InputRightElement, useToast, Flex, Text, Link } from "@chakra-ui/react";
import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from "@chakra-ui/react";
import _ from 'lodash';
import { Formik, Field, Form } from 'formik';
import Cookies from 'universal-cookie';
import { ViewIcon, ViewOffIcon} from '@chakra-ui/icons'

import { useRouter } from "next/router";

const cookies = new Cookies();
const axios = require('axios');

export default function Login({logIn}) {

	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);

	const SignupSchema = Yup.object().shape({
		first_name: Yup.string()
			.min(2, 'Твърде кратко!')
		  	.max(50, 'Твърде дълго!')
		  	.matches(/[а-я]/, 'използвай поне една малка буква')
			.matches(/[А-Я]/, 'използвай поне една голяма буква')
			.matches(/^[А-Я][а-я]+$/, 'използвай само кирилица')
		  	.required('Задължително'),
		last_name: Yup.string()
		  	.min(2, 'Too Short!')
		  	.max(50, 'Too Long!')
			.matches(/[а-я]/, 'използвай поне една малка буква')
			.matches(/[А-Я]/, 'използвай поне една голяма буква')
			.matches(/^[А-Я][а-я]+$/, 'използвай само кирилица')
		 	.required('Задължително'),
		email: Yup.string().email('Невалиден имейл').required('Задължително'),
		reemail: Yup.string().email('Невалиден имейл').equalTo(Yup.ref('email'), 'Имейлите не са еднакви').required('Задължително'),
		password: Yup.string()
				.matches(/[A-Z]/, 'използвай минимум 1 главна буква')
				.matches(/[a-z]/, 'използвай минимум 1 малка буква')
				.matches(/\d/, 'използвай минимум 1 цифра')
				.matches(/[^\d\w\s]/, 'използвай минимум 1 специален символ')
				.matches(/.{8}/, 'използвай минимум 8 символа'),
		repassword: Yup.string().equalTo(Yup.ref('password'), 'Паролите не са еднакви').required('Задължително'),
		phone: Yup.string()
				.matches(/^0\d{9}$/, 'използвай валиден телефон')
	});


	var router = useRouter()
	const toast = useToast()

	if(router.query.token && router.query.token_id){
		var path = router.asPath
		var split = _.split(path, '?token_id=')
		var tokenParams = _.split(split[1], '&token=')
		
		return(
			<Box marginLeft="15px" marginRight="15px">
			  <Box margin="auto" w={["100%","100%","25%","25%"]} minWidth={["none","none","35rem","35rem"]} backgroundColor="white" p="25px" mt="50px" rounded="lg">
				<Formik validationSchema={SignupSchema} initialValues={{ }} 
		onSubmit={(values, actions) => {
			setTimeout(() => {
					axios({
						method: 'post',
						url: `https://${process.env.hostname}/users/change_password/`,
						headers: 
						{ "Content-type": "Application/json",
						"Authorization": `Bearer ${cookies.get('auth')}`
	
						},
						data: {"password":values.password,
								"token_id":tokenParams[0],
								"token":tokenParams[1]
						}  
						  },)
						.then(function (response) {
							toast({ title: "Промяна на парола.", description: "Успешно сменихте паролата.",status: "success", duration: 9000})
							router.push('/')
						})
						.catch(function (error) {
							if (error.response) {
								toast({
									title: "Промяната не е успешна.",
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
			<Field name="password" >
				{({ field, form }) => (
				<FormControl isRequired isInvalid={form.errors.password && form.touched.password}>
					<FormLabel paddingTop="15px" paddingBottom="5px" color="black" fontFamily="Rubik" fontSize="15px" htmlFor="password">
						Нова парола
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
				Смени паролата
			</Button>
			</form>
			)}
			</Formik>
		</Box>
		</Box>)
	}
	else{
		return(
			<Box marginLeft="15px" marginRight="15px">
			  <Box margin="auto" w={["100%","100%","25%","25%"]} minWidth={["none","none","35rem","35rem"]} backgroundColor="white" p="25px" mt="50px" rounded="lg">
				<Formik initialValues={{ email: "" }} 
		onSubmit={(values, actions) => {
			setTimeout(() => {
					axios({
						method: 'post',
						url: `https://${process.env.hostname}/users/forgotten_password/`,
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
									title: "Възникна грешка.",
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
		</Box>)
	}
}