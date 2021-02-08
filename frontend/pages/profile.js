import axios from 'axios'
import Cookies from 'universal-cookie';
import jwt_decode from "jwt-decode";
import {Box, Avatar, Flex, Text, Input, InputGroup, InputLeftElement, Select, Switch, useToast, Button, Modal, Link,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton, useDisclosure } from "@chakra-ui/react";
// import Link from 'next/link'
import { Formik, Field, Form, useFormikContext, useField } from 'formik';
import { PhoneIcon } from '@chakra-ui/icons'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText,} from "@chakra-ui/react";
import {useCallback, useEffect, useState} from 'react'
import _ from 'lodash';
const cookies = new Cookies()
import * as Yup from 'yup';
import { useRouter } from "next/router";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	MenuIcon,
	MenuCommand,
	MenuDivider,
  } from "@chakra-ui/react"
  import { ChevronDownIcon } from '@chakra-ui/icons'
function Profile(props) {

	const toast = useToast()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { isOpen: isOpened, onOpen: onOpened, onClose: onClosed } = useDisclosure()
	
	const SignupSchema = Yup.object().shape({
	  	first_name: Yup.string()
			.min(2, 'Твърде кратко!')
			.max(50, 'Твърде дълго!')
		  	.matches(/^[^\w]+$/, 'използвай кирилица')
			.matches(/[а-я]/, 'използвай поне една малка буква')
		  	.matches(/[А-Я]/, 'използвай поне една голяма буква')
			.required('Задължително'),
	  	last_name: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.matches(/^[^\w]+$/, 'използвай кирилица')
		  	.matches(/[а-я]/, 'използвай поне една малка буква')
		  	.matches(/[А-Я]/, 'използвай поне една голяма буква')
		 	.required('Задължително'),
	  	email: Yup.string().email('Невалиден имейл').required('Задължително'),
	 	phone: Yup.string()
			.matches(/^0\d{9}$/, 'използвай валиден телефон')
	});
	var router = useRouter()

	const handleDelete = () => {

		axios({
			method: 'delete',
			url: `https://${process.env.hostname}/users/${jwt_decode(cookies.get('auth')).user_id}/`,
			headers: 
			{ "Content-type": "Application/json",
			  "Authorization": `Bearer ${cookies.get('auth')}`},
			  },)
			.then(function(resp){
				cookies.remove('auth')
				cookies.remove('refresh')
				router.push('/')
			})
			.catch(function (error) {
				if (error.response) {
					console.log(error.response)
					// for (const [key, value] of Object.entries(error.response.data)) {
					  // 	console.log(`${key}: ${value}`);
					// 	actions.setFieldError(key, value)
					// }
			}})	
	}

	var form
	switch(props.users.form){
		case "8А": form = "8А"; break;
		case "8Б": form = "8Б"; break;
		case "8В": form = "8В"; break;
		case "8Г": form = "8Г"; break;
		case "9А": form = "9А"; break;
		case "9Б": form = "9Б"; break;
		case "9В": form = "9В"; break;
		case "9Г": form = "9Г"; break;
		case "10А": form = "10А"; break;
		case "10Б": form = "10Б"; break;
		case "10В": form = "10В"; break;
		case "10Г": form = "10Г"; break;
		case "11А": form = "11А"; break;
		case "11Б": form = "11Б"; break;
		case "11В": form = "11В"; break;
		case "11Г": form = "11Г"; break;
		case "12А": form = "12А"; break;
		case "12Б": form = "12Б"; break;
		case "12В": form = "12В"; break;
		case "12Г": form = "12Г"; break;
	}

	// console.log(props);
	// console.log(`https://cdn.discordapp.com/avatars/${props.users.discord_id}/${props.users.avatar}.png`);

	return(
	<Box paddingBottom="300px" maxW="960px" marginLeft="auto" marginRight="auto">
	<Flex backgroundColor="white" p="25px" rounded="lg" flexDirection="column" flexWrap="wrap" margin={["25px","25px","50px","50px"]}>
		<Flex>
			<Avatar src={`https://cdn.discordapp.com/avatars/${props.users.discord_id}/${props.users.avatar}.png`}/>
			<Text fontSize="15px" fontFamily="Rubik" pl="15px">{props.users.first_name}&nbsp;{props.users.last_name}</Text>
		</Flex>
		<Formik validationSchema={SignupSchema} initialValues={{ first_name: props.users.first_name , last_name: props.users.last_name, email: props.users.email, form: form, alergies:props.users.alergies, tshirt_size:props.users.tshirt_size, food_preferences:props.users.food_preferences, is_online:props.users.is_online, phone: props.users.phone}}
		onSubmit={(values, actions) => {
        	setTimeout(() => {
					var data = JSON.stringify(values, null, 1)
					console.log(data)
        			axios({
        				method: 'patch',
        				url: `https://${process.env.hostname}/users/${jwt_decode(cookies.get('auth')).user_id}/`,
        				headers: 
        				{ "Content-type": "Application/json",
        				  "Authorization": `Bearer ${cookies.get('auth')}`},
						data: data  
						  },)
        			    .then(function (response) {
							// toast({ title: "Промени по акаунт", description: "Промените бяха направени успешно.", status: "success", duration: 4500})
        			    	})
        			    .catch(function (error) {
        			    console.log(error);
        			    })							
          				actions.setSubmitting(false)
        			}, 1000)
      		}}> 
			{function(props){
				return(
				<Form {...props} style={{display:"flex",flexDirection:"row",flexWrap:"wrap", paddingTop:"10px"}} onSubmit={props.handleSubmit}>
				<Field name="first_name">
					{({ field, form}) => (
					<FormControl flexGrow={1} w={["100%","100%","33%","33%", "33%"]} mr="5px" isRequired isInvalid={form.errors.first_name && form.touched.first_name}>
						<FormLabel fontFamily="Rubik" fontSize="15px">Име (на кирилица)</FormLabel>
						<Input _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} _focus={{borderColor:"#a5cf9f", boxShadow: "0px 2px 0px 0px #a5cf9f"}} variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="first_name" />
						<FormErrorMessage border={0}>{form.errors.first_name}</FormErrorMessage>
					</FormControl>
					)}
          		</Field>
				<Field name="last_name">
					{({ field, form }) => (
					<FormControl flexGrow={1} w={["100%","100%","33%","33%", "33%"]} mr="5px" isRequired isInvalid={form.errors.last_name && form.touched.last_name}>
						<FormLabel fontFamily="Rubik" fontSize="15px" htmlFor="text">Фамилия (на кирилица)</FormLabel>
							<Input _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} _focus={{borderColor:"#a5cf9f", boxShadow: "0px 2px 0px 0px #a5cf9f"}} variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="last_name" />
						<FormErrorMessage border={0}>{form.errors.last_name}</FormErrorMessage>
					</FormControl>
					)}
				</Field>
				<Field name="email">
					{({ field, form }) => (
					<FormControl flexGrow={1} w={["100%","100%","33%","33%","33%"]} mr="5px" isRequired isInvalid={form.errors.email && form.touched.email}>
						<FormLabel paddingTop="15px" paddingBottom="5px" fontFamily="Rubik" fontSize="15px" htmlFor="email">Имейл</FormLabel>
							<Input isDisabled _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} _focus={{borderColor:"#a5cf9f", boxShadow: "0px 2px 0px 0px #a5cf9f"}} variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="email" />
						<FormErrorMessage border={0}>{form.errors.email}</FormErrorMessage>
					</FormControl>
					)}
				</Field>
		  <Field name="form">
            {({ field, form }) => (
				<FormControl flexGrow={1} w={["100%","100%","100%","33%"]} mr="5px" isInvalid={form.errors.form && form.touched.form} {...field} isRequired>
  					<FormLabel paddingTop="15px" paddingBottom="5px" fontFamily="Rubik" fontSize="15px" htmlFor="form">Клас</FormLabel>
  					<Select borderRadius={0} _focus={{borderColor:"#a5cf9f", boxShadow: "0px 2px 0px 0px #a5cf9f"}} variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} variant="outline" id="form" fontFamily="Rubik" placeholder="">
					  	<option value="8А">8А</option>
  						<option value="8Б">8Б</option>
  						<option value="8В">8В</option>
						<option value="8Г">8Г</option>
					  	<option value="9А">9А</option>
  						<option value="9Б">9Б</option>
  						<option value="9В">9В</option>
						<option value="9Г">9Г</option>
					  	<option value="10А">10А</option>
  						<option value="10Б">10Б</option>
  						<option value="10В">10В</option>
						<option value="10Г">10Г</option>
					  	<option value="11А">11А</option>
  						<option value="11Б">11Б</option>
  						<option value="11В">11В</option>
						<option value="11Г">11Г</option>
					  	<option value="12А">12А</option>
  						<option value="12Б">12Б</option>
  						<option value="12В">12В</option>
						<option value="12Г">12Г</option>
					</Select>
				</FormControl>
            )}
          </Field>

		  	<Field name="phone" >
            	{({ field, form }) => (
				<FormControl  mr="5px" flexGrow={1} w={["100%","100%","100%","33%"]} width="auto" {...field} isRequired isInvalid={form.errors.phone && form.touched.phone}>
			  	<FormLabel paddingTop="15px" paddingBottom="5px" fontFamily="Rubik" fontSize="15px" htmlFor="number">Телефон</FormLabel>  					
				  <InputGroup>
			  		<InputLeftElement children={<PhoneIcon color="gray.300" />} />
    				<Input _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} id="phone" _focus={{borderColor:"#a5cf9f", boxShadow: "0px 2px 0px 0px #a5cf9f"}} variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field}/>
  					</InputGroup> 
              	</FormControl>
            )}
          	</Field>

			{/* <Field name="alergies" >
				{({ field, form }) => (
				<FormControl flexGrow={1} w={["100%","100%","33%","33%"]} mr="5px" {...field} isInvalid={form.errors.alergies && form.touched.alergies}>
				<FormLabel paddingTop="15px" paddingBottom="5px" fontFamily="Rubik" fontSize="15px" htmlFor="text">Алергии</FormLabel>
				<Input _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} id="alergies" _focus={{borderColor:"#a5cf9f", boxShadow: "0px 2px 0px 0px #a5cf9f"}} variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field}/>
				</FormControl>
				)}
			</Field> */}
			<Field name="tshirt_size">
				{({ field, form }) => (
					<FormControl flexGrow={1} w={["100%","100%","33%","33%"]} mr="5px" {...field} isInvalid={form.errors.tshirt && form.touched.tshirt} isRequired>
						<FormLabel paddingTop="15px" paddingBottom="5px" fontFamily="Rubik" fontSize="15px" htmlFor="text">Размер тениска</FormLabel>
						<Select borderRadius={0}  _focus={{borderColor:"#a5cf9f", boxShadow: "0px 2px 0px 0px #a5cf9f"}} variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="tshirt_size" type="text" fontFamily="Rubik" placeholder="">
							<option value="s">S</option>
							<option value="m">M</option>
							<option value="l">L</option>
							<option value="xl">XL</option>
						</Select>
					</FormControl>
				)}
			</Field>
				{/* <Field name="food_preferences">
				{({ field, form }) => (
							<FormControl flexGrow={1} w={["100%","100%","33%","33%"]} w="33%" mr="5px" {...field} isInvalid={form.errors.tshirt && form.touched.tshirt} isRequired>
								<FormLabel paddingTop="15px" paddingBottom="5px" fontFamily="Rubik" fontSize="15px" htmlFor="text">Консумирате ли месо?</FormLabel>
								<Select borderRadius={0}  _focus={{borderColor:"#a5cf9f", boxShadow: "0px 2px 0px 0px #a5cf9f"}} variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="food_preferences" type="text" fontFamily="Rubik" placeholder="">
									<option value={"0"}>Да</option>
									<option value={"Vgtn"}>Не, вегетарианец съм</option>
									<option value={"Vgn"}>Не, веган съм</option>
								</Select>
							</FormControl>
						)}
					</Field> */}
					<Flex flexDirection="row" flexWrap="wrap" w="100%">
					<Button mt={4} mr={3} colorScheme="red" border="0" cursor="pointer" onClick={onOpened}>Изтрий профила</Button>
					{/* <Button mt={4} colorScheme="green" border="0" cursor="pointer" onClick={onOpen}>Запази</Button> */}
					<AutoSave/>
					<Modal isOpen={isOpen} onClose={onClose}>
					  {/* <ModalOverlay /> */}
					  <ModalContent>
						<ModalCloseButton _focus={{outline:"none", border:"0", background:"transparent"}} />
						<ModalHeader>
						  Сигурни ли сте, че искате да запазите?
						</ModalHeader>

						<ModalFooter>
						  <Button colorScheme="green" border="0" cursor="pointer" mr={3} onClick={onClose}>
							Откажи
						  </Button>
						  <Button colorScheme="green" border="0" cursor="pointer" isLoading={props.isSubmitting} onClick={() => {props.submitForm(); router.reload()}} type="submit">Промени</Button>
						</ModalFooter>
					  </ModalContent>
					</Modal>

					<Modal isOpen={isOpened} onClose={onClosed}>
      					  {/* <ModalOverlay /> */}
      					  <ModalContent>
      					    <ModalCloseButton _focus={{outline:"none", border:"0", background:"transparent"}} />
      					    <ModalHeader>
      					      Сигурни ли сте, че искате да изтриете профила?
      					    </ModalHeader>

      					    <ModalFooter>
      					      <Button colorScheme="green" border="0" cursor="pointer" mr={3} onClick={onClosed}>
      					        Откажи
      					      </Button>
      					      <Link href="/">
								{/* <Link> */}
									<Button href="/" colorScheme="red" border="0" cursor="pointer" isLoading={props.isSubmitting} onClick={() => {handleDelete(); onClosed()}} type="submit">Изтрий</Button>
								{/* </Link> */}
								</Link>
      					    </ModalFooter>
      					  </ModalContent>
      					</Modal>

					</Flex>
        </Form>
				)}}
    </Formik>
	</Flex>
		<Flex flexDirection="column" p="15px" rounded="lg" margin={["25px","25px","50px","50px"]} background="white">
				<Text textColor="red" style={{color:"red"}} p={0} m={0} fontFamily="Rubik">ВАЖНО до 08.03!</Text><Text fontFamily="Rubik" mb="15px">Всеки участник в хакатона трябва да предаде декларация за участие по образец най-късно до 08.03. В противен случай няма да бъде допуснат до участие в Hack TUES GG. Декларация:</Text>
				<Text fontFamily="Rubik" p={0} m={0}>{'За пълнолетни'}&nbsp;<Link isExternal href="https://hacktues.pythonanywhere.com/static/frontend/%D0%94%D0%B5%D0%BA%D0%BB%D0%B0%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%D0%BF%D1%8A%D0%BB%D0%BD%D0%BE%D0%BB%D0%B5%D1%82%D0%BD%D0%B8.pdf" fontFamily="Rubik" color="green" textDecoration="underline">тук</Link></Text>
				<Text fontFamily="Rubik" p={0} m={0}>{'За непълнолетни'}&nbsp;<Link isExternal href="https://hacktues.pythonanywhere.com/static/frontend/%D0%94%D0%B5%D0%BA%D0%BB%D0%B0%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%D0%BD%D0%B5%D0%BF%D1%8A%D0%BB%D0%BD%D0%BE%D0%BB%D0%B5%D1%82%D0%BD%D0%B8.pdf" fontFamily="Rubik" color="green" textDecoration="underline">тук</Link></Text>
		</Flex>

	</Box>)
}

export async function getServerSideProps(ctx){

	const cookies = new Cookies(ctx.req.headers.cookie);

	if(jwt_decode(cookies.get('auth')).user_id == 3){
		return {
      		redirect: {
       		permanent: false,
        	destination: '/',
      	},
	}
}
	else{
		var response = await axios({
			method: 'get',
			url: `https://${process.env.hostname}/users/${jwt_decode(cookies.get('auth')).user_id}`,
			headers: 
			{ "Content-type": "Application/json",
			  "Authorization": `Bearer ${cookies.get('auth')}`}
			},
			)
			 
			return {props: {users: response.data}}
	}

}

const CheckboxArrayControl = (props, {children}) => {

	const [field] = useField(props);

	return (
	  <Switch colorScheme="green"  css={{boxShadow:"none", alignSelf: "center", outline: "none"}} {...field} isChecked={field.value} {...props}>
		{children}
	  </Switch>
	)
  }

const AutoSave = ({ debounceMs = 2000 }) => {
	const formik = useFormikContext();
	const [isSaved, setIsSaved] = useState(null);
	const debouncedSubmit = useCallback(
	  _.debounce(() => {
		  if(formik.isValid){ return formik.submitForm().then(() => setIsSaved(true),);}
	  }, debounceMs),
	  [formik.submitForm, debounceMs]
	);
  
	useEffect(() => debouncedSubmit, [debouncedSubmit, formik.values],);
	return <Text marginLeft="auto" fontFamily="Rubik" fontSize="17px" textAlign="center">
	{!!formik.isSubmitting
	  ? 'Запазване...'
	  : isSaved
	  ? 'Промените ти бяха направени.'
	  : null}
  </Text>
  };

export default Profile