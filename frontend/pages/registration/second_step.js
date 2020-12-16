import { Box, Button, Input, InputGroup, InputLeftElement, InputRightElement, Icon, Select, Switch, useToast, Checkbox, Link, useDisclosure } from "@chakra-ui/react";
import { Formik, Field } from 'formik';
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
const axios = require('axios');
import Cookies from 'universal-cookie';
import {PhoneIcon, ViewIcon, ViewOffIcon} from '@chakra-ui/icons'
import { useRouter } from "next/router";
const cookies = new Cookies();
import * as Yup from 'yup';
import styled from '@emotion/styled'

import FormInput from '../../components/form/readwrite/wrapper'

export default function Register(props) {

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);

	var router = useRouter()
	const toast = useToast()

    const CLIENT_ID = '743157046677078016'
    const CLIENT_SECRET = 'zz8dSlB1maL4tUIWDCCLpIpn8MVPYqKP'

    var userID;

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

    return (
      <Box marginLeft="15px" marginRight="15px" paddingBottom="200px">
        <Box backgroundColor="white" margin="auto" marginTop="50px" padding="20px" rounded="lg" w={["100%","100%","33%","33%"]} minWidth={["none","none","55rem","55rem"]}>
			<Formik initialValues={{first_name: '', last_name: '', email: '', password: ''}} validationSchema={SignupSchema}
				onSubmit={(values, actions) => {
        			setTimeout(() => {
                            values["discord_id"] = userID;
							var data = JSON.stringify(values, null, 1)
							console.log(data)
        					axios({
        						method: 'post',
        						url: 'https://hacktues.pythonanywhere.com/users/',
        						headers: 
        						{ "Content-type": "Application/json",
        						  "Authorization": `Bearer ${cookies.get('auth')}`},
								data: data  
								  },)
        					    .then(function (response) {
        					        if(response.status == 201){
										toast({
        									  title: "Създаване на акаунт",
        									  description: "Акаунтът беше успешно създаден.",
        									  status: "success",
        									  duration: 9000
        									});
											

											router.push('/')
        					    	}})
        					    .catch(function (error) {
									if (error.response) {
										for (const [key, value] of Object.entries(error.response.data)) {
  											console.log(`${key}: ${value}`);
											actions.setFieldError(key, value)
										}
								}})						
											console.log(JSON.stringify(values, null, 1))
          									actions.setSubmitting(false)
        								}, 1000);
      							}}>
    {props => (
				<form style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}} onSubmit={props.handleSubmit}>
				{/* <Field name="first_name">
					{({ field, form }) => (
					<FormControl flexGrow={1} w={["100%","100%","100%","33%"]} mr="5px" isRequired isInvalid={form.errors.first_name && form.touched.first_name}>
						<FormLabel fontFamily="Rubik" fontSize="15px">Име (на кирилица)</FormLabel>
						<Input _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} _focus={{borderColor:"#a5cf9f", boxShadow: "0px 2px 0px 0px #a5cf9f"}} variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="first_name" />
						<FormErrorMessage color="green" >{form.errors.first_name}</FormErrorMessage>
					</FormControl>
					)}
          		</Field> */}
				  <FormInput></FormInput>
				<Field name="last_name">
					{({ field, form }) => (
					<FormControl flexGrow={1} w={["100%","100%","100%","33%"]} mr="5px" isRequired isInvalid={form.errors.last_name && form.touched.last_name}>
						<FormLabel fontFamily="Rubik" fontSize="15px" htmlFor="text">Фамилия (на кирилица)</FormLabel>
						<Input _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} _focus={{borderColor:"#a5cf9f", boxShadow: "0px 1px 0px 0px #a5cf9f"}} variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="last_name" />
						<FormErrorMessage>{form.errors.last_name}</FormErrorMessage>
					</FormControl>
					)}
				</Field>
				<Field name="email">
					{({ field, form }) => (
					<FormControl flexGrow={1} w={["100%","100%","100%","33%"]} mr="5px" isRequired isInvalid={form.errors.email && form.touched.email}>
						<FormLabel paddingTop="15px" paddingBottom="5px" fontFamily="Rubik" fontSize="15px" htmlFor="email">Имейл</FormLabel>
						<Input _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} id="email" _focus={{borderColor:"#a5cf9f", boxShadow: "0px 2px 0px 0px #a5cf9f"}} variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} type="email"/>
						<FormErrorMessage>{form.errors.email}</FormErrorMessage>
					</FormControl>
					)}
				</Field>

				<Field name="reemail">
					{({ field, form }) => (
					<FormControl flexGrow={1} w={["100%","100%","100%","33%"]} mr="5px" isRequired isInvalid={form.errors.reemail && form.touched.reemail}>
						<FormLabel paddingTop="15px" paddingBottom="5px" fontFamily="Rubik" fontSize="15px">Повторете имейла</FormLabel>
						<Input _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} _focus={{borderColor:"#a5cf9f", boxShadow: "0px 2px 0px 0px #a5cf9f"}} variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field}/>
						<FormErrorMessage>{form.errors.reemail}</FormErrorMessage>
					</FormControl>
					)}
          </Field>
			<Field name="password" >
				{({ field, form }) => (
				<FormControl flexGrow={1} w={["100%","100%","100%","33%"]} mr="5px" isRequired isInvalid={form.errors.password && form.touched.password}>
				<FormLabel paddingTop="15px" paddingBottom="5px" fontFamily="Rubik" fontSize="15px" htmlFor="password">Парола</FormLabel>
				<InputGroup size="md">
					<Input _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} pr="4.5rem" variant="flushed" type={show ? "text" : "password"} isRequired {...field} isInvalid={form.errors.password && form.touched.password}  _focus={{borderColor:"#a5cf9f", boxShadow: "0px 2px 0px 0px #a5cf9f"}} variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field}/>
					<InputRightElement width="4.5rem">
						<Button fontFamily="Rubik" fontSize="15px" border="0" colorScheme="green" _focus={{outline:"none"}} h="1.75rem" size="sm" onClick={handleClick}>
							{show ? <ViewOffIcon/> : <ViewIcon/>}
						</Button>
					</InputRightElement>
				</InputGroup>
				<FormErrorMessage>{form.errors.password}</FormErrorMessage>
				</FormControl>)}
		</Field>

		  <Field name="repassword">
            {({ field, form }) => (
              <FormControl flexGrow={1} w={["100%","100%","100%","33%"]} mr="5px" isRequired isInvalid={form.errors.repassword && form.touched.repassword}>
                <FormLabel paddingTop="15px" paddingBottom="5px" fontFamily="Rubik" fontSize="15px" htmlFor="password">Повторете паролата</FormLabel>
                <Input _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} _focus={{borderColor:"#a5cf9f", boxShadow: "0px 2px 0px 0px #a5cf9f"}} variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} type="password"/>
                <FormErrorMessage>{form.errors.repassword}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

		  <Field name="form">
            {({ field, form }) => (
				<FormControl flexGrow={1} w={["100%","100%","100%","33%"]} mr="5px" {...field} isRequired>
  					<FormLabel paddingTop="15px" paddingBottom="5px" fontFamily="Rubik" fontSize="15px" htmlFor="country">Клас</FormLabel>
  					<Select borderRadius={0} _focus={{borderColor:"#a5cf9f", boxShadow: "0px 2px 0px 0px #a5cf9f"}} variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} variant="outline" id="form" fontFamily="Rubik" placeholder="Избери клас">
					  	<option value="8a">8А</option>
  						<option value="8b">8Б</option>
  						<option value="8v">8В</option>
						<option value="8g">8Г</option>
					  	<option value="9a">9А</option>
  						<option value="9b">9Б</option>
  						<option value="9v">9В</option>
						<option value="9g">9Г</option>
					  	<option value="10a">10А</option>
  						<option value="10b">10Б</option>
  						<option value="10v">10В</option>
						<option value="10g">10Г</option>
					  	<option value="11a">11А</option>
  						<option value="11b">11Б</option>
  						<option value="11v">11В</option>
						<option value="11g">11Г</option>
					  	<option value="12a">12А</option>
  						<option value="12b">12Б</option>
  						<option value="12v">12В</option>
						<option value="12g">12Г</option>
					</Select>
				</FormControl>
            )}
          </Field>

		  	<Field name="phone" >
            	{({ field, form }) => (
              	<FormControl flexGrow={1} w={["100%","100%","100%","33%"]} mr="5px" {...field} isRequired isInvalid={form.errors.phone && form.touched.phone}>
			  	<FormLabel paddingTop="15px" paddingBottom="5px" fontFamily="Rubik" fontSize="15px" htmlFor="number">Телефон</FormLabel>
			  	<InputGroup>
			  		<InputLeftElement children={<PhoneIcon color="gray.300" />} />
    				<Input _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} id="phone" _focus={{borderColor:"#a5cf9f", boxShadow: "0px 2px 0px 0px #a5cf9f"}} variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field}/>
  					</InputGroup>
					<FormErrorMessage>{form.errors.phone}</FormErrorMessage>
              	</FormControl>
            )}
          	</Field>

			<Field name="alergies" >
				{({ field, form }) => (
				<FormControl flexGrow={1} w={["100%","100%","100%","33%"]} mr="5px" {...field} isInvalid={form.errors.alergies && form.touched.alergies}>
				<FormLabel paddingTop="15px" paddingBottom="5px" fontFamily="Rubik" fontSize="15px" htmlFor="text">Алергии</FormLabel>
				<Input type="text" id="alergies"  _focus={{borderColor:"#a5cf9f", boxShadow: "0px 2px 0px 0px #a5cf9f"}} variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field}/>
				</FormControl>
				)}
			</Field>
			<Field name="tshirt_size">
				{({ field, form }) => (
					<FormControl flexGrow={1} w={["100%","100%","100%","33%"]} mr="5px" {...field} isInvalid={form.errors.tshirt && form.touched.tshirt} isRequired>
						<FormLabel paddingTop="15px" paddingBottom="5px" fontFamily="Rubik" fontSize="15px" htmlFor="text">Размер тениска</FormLabel>
						<Select borderRadius={0}  _focus={{borderColor:"#a5cf9f", boxShadow: "0px 2px 0px 0px #a5cf9f"}} variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="tshirt_size" type="text" fontFamily="Rubik" placeholder="Избери размер">
							<option value="s">S</option>
							<option value="m">M</option>
							<option value="l">L</option>
							<option value="xl">XL</option>
						</Select>
					</FormControl>
				)}
			</Field>
				<Field name="food_preferences">
				{({ field, form }) => (
							<FormControl flexGrow={1} w={["100%","100%","100%","33%"]} mr="5px" {...field} isInvalid={form.errors.tshirt && form.touched.tshirt} isRequired>
								<FormLabel paddingTop="15px" paddingBottom="5px" fontFamily="Rubik" fontSize="15px" htmlFor="text">Консумирате ли месо?</FormLabel>
								<Select borderRadius={0}  _focus={{borderColor:"#a5cf9f", boxShadow: "0px 2px 0px 0px #a5cf9f"}} variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="food_preferences" type="text" fontFamily="Rubik" placeholder="">
									<option value={0}>Да</option>
									<option value={"Vgn"}>Не, веган съм</option>
									<option value={"Vgnt"}>Не, вегетарианец съм</option>
								</Select>
							</FormControl>
						)}
					</Field>
			<Field name="is_online">
				{({ field, form }) => (
					<FormControl display="flex" flexDirection="row" flexGrow={1} w={["100%","100%","100%","33%"]} mr="5px" {...field}>
					<FormLabel alignSelf="center" paddingTop="15px" paddingBottom="10px" fontFamily="Rubik" fontSize="15px" htmlFor="text">Искам да съм изцяло онлайн</FormLabel>
					<Switch colorScheme="green" alignSelf="center" css={{boxShadow:"none"}} id="is_online" />
					</FormControl>
				)}
			</Field>

			<Field name="regulation">
				{({ field, form }) => (
					<FormControl display="flex" flexDirection="row" flexGrow={1} w={["100%","100%","100%","33%"]} mr="5px">
					<CustomCheckbox jsx={{}} colorScheme="green" isRequired id="regulation" fontStyle="Rubik" >Съгласен съм с <Link href="/regulation"><a style={{color:"green", }} onClick={onClose}>регламента на хакатона</a></Link></CustomCheckbox>
					</FormControl>
				)}
			</Field>


			{/* <Button variant="ghost">Login with Discord</Button> */}

			<Button display="flex" flexGrow={1} w="33%" justifyContent="center" mt={4} colorScheme="green" border="0"
			 isLoading={props.isSubmitting} type="submit"
			>
				Продължи
			</Button>

        </form>
      )}
    </Formik>
	</Box>
      </Box>
    );
}

const CustomCheckbox = styled(Checkbox)`
  .chakra-checkbox__control{
    color: beige;
  }
`


function equalTo(ref, msg) {
	return Yup.mixed().test({
	  name: 'equalTo',
	  exclusive: false,
	  message: msg || '${path} must be the same as ${reference}',
	  params: {
		reference: ref.path,
	  },
	  test: function(value) {
		return value === this.resolve(ref);
	  },
	});
  }

Yup.addMethod(Yup.string, 'equalTo', equalTo);
