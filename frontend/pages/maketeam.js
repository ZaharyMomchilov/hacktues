import axios from 'axios'
import Cookies from 'universal-cookie';
import jwt_decode from "jwt-decode";
import {Box, Avatar, Flex, Text, Input, InputGroup, InputLeftElement, Select, Switch, Textarea, Button, useToast } from "@chakra-ui/react";
import { Formik, Field, Form, useFormikContext, useField } from 'formik';
import { PhoneIcon } from '@chakra-ui/icons'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText,} from "@chakra-ui/react";
import {useCallback, useEffect, useState} from 'react'
import _ from 'lodash';
const cookies = new Cookies()
import { useRouter } from 'next/router'
import * as Yup from 'yup';
import { css } from '@emotion/css'
import { CUIAutoComplete } from 'chakra-ui-autocomplete'


const Teams = (props) => {


	var router = useRouter()
	const toast = useToast()

    // console.log(props);
    var users = props.users
    var items = []
    var i
    for(i = 0; i < users.length; i++){
        items.push({value: users[i].id, label: `${users[i].first_name} ${users[i].last_name} - ${users[i].form}`})
    }
    var people
    const [pickerItems, setPickerItems] = React.useState(items);
    const [selectedItems, setSelectedItems] = React.useState([]);

    people = selectedItems

    const handleCreateItem = (item) => {
        setPickerItems((curr) => [...curr, item]);
        setSelectedItems((curr) => [...curr, item]);
    };

    const handleSelectedItemsChange = (selectedItems) => {
        if (selectedItems) {
            setSelectedItems(selectedItems);
        }
    };

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

	return(
		<Box paddingBottom="300px" maxW="960px" marginLeft="auto" marginRight="auto">
		<Flex backgroundColor="white" p="25px" rounded="lg" flexDirection="column" flexWrap="wrap" margin="50px">
        <Formik initialValues={{name: '', project_name: '', project_description: '', github_link: ''}}
				onSubmit={(values, actions) => {
        			setTimeout(() => {
                            let selected = people.map(a => a.value);
                            values['users'] = selected
                            values['technologies'] = [1]
							var data = JSON.stringify(values, null, 1)
							console.log(data)
        					axios({
        						method: 'post',
        						url: 'https://hacktues.pythonanywhere.com/teams/',
        						headers: 
        						{ "Content-type": "Application/json",
        						  "Authorization": `Bearer ${cookies.get('auth')}`},
								data: data  
								  },)
        					    .then(function (response) {
        					        if(response.status == 201){
										toast({
        									  title: "Създаване на отбор",
        									  description: "Отборът беше успешно създаден.",
        									  status: "success",
        									  duration: 9000
        									});
											router.push('/')
        					    	}})
        					    // .catch(function (error) {
								// 	if (error.response) {
								// 		for (const [key, value] of Object.entries(error.response.data)) {
  								// 			console.log(`${key}: ${value}`);
								// 			actions.setFieldError(key, value)
								// 		}
								// }})						
											console.log(JSON.stringify(values, null, 1))
          									actions.setSubmitting(false)
        								}, 1000);
      							}}>
				
                {(props) => (
					<form style={{display:"flex",flexDirection:"row",flexWrap:"wrap", paddingTop:"10px"}} onSubmit={props.handleSubmit}>
					<Field name="name">
						{({ field, form}) => (
						<FormControl flexGrow={1} w={["100%","100%","33%","33%", "33%"]} mr="5px" isRequired isInvalid={form.errors.name && form.touched.name}>
							<FormLabel fontFamily="Rubik" fontSize="15px">Име на отбора</FormLabel>
							<Input _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} borderColor="#a5cf9f" boxShadow= "0px 1px 0px 0px #a5cf9f" variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="name" />
							<FormErrorMessage border={0}>{form.errors.name}</FormErrorMessage>
						</FormControl>
						)}
					  </Field>
					<Field name="project_name">
						{({ field, form}) => (
						<FormControl flexGrow={1} w={["100%","100%","33%","33%", "33%"]} mr="5px" isRequired isInvalid={form.errors.project_name && form.touched.project_name}>
							<FormLabel fontFamily="Rubik" fontSize="15px">Име на проекта</FormLabel>
							<Input _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} borderColor="#a5cf9f" boxShadow= "0px 1px 0px 0px #a5cf9f" variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="project_name" />
							<FormErrorMessage border={0}>{form.errors.project_name}</FormErrorMessage>
						</FormControl>
						)}
					  </Field>
					
					<Field name="project_description">
						{({ field, form }) => (
						<FormControl flexGrow={1} w="100%" mr="5px" isRequired isInvalid={form.errors.project_description && form.touched.project_description}>
							<FormLabel paddingTop="15px" paddingBottom="5px" fontFamily="Rubik" fontSize="15px" htmlFor="email">Описание на проекта</FormLabel>
								<Textarea  _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} borderColor="#a5cf9f" boxShadow= "0px 1px 0px 0px #a5cf9f" variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="project_description" />
							<FormErrorMessage border={0}>{form.errors.project_description}</FormErrorMessage>
						</FormControl>
						)}
					</Field>
					<Field name="github_link">
						{({ field, form }) => (
						<FormControl flexGrow={1} w="100%" mr="5px" isRequired isInvalid={form.errors.github_link && form.touched.github_link}>
							<FormLabel fontFamily="Rubik" fontSize="15px" htmlFor="text">Линк/ове към GitHub хранилище/а:</FormLabel>
								<Input  _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} borderColor="#a5cf9f" boxShadow= "0px 1px 0px 0px #a5cf9f" variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="github_link" />
							<FormErrorMessage border={0}>{form.errors.github_link}</FormErrorMessage>
						</FormControl>
						)}
				</Field>

                <Field name="users">
						{({ field, form }) => (
						<FormControl flexGrow={1} w="100%" mr="5px" isInvalid={form.errors.team && form.touched.team}>
							<CUIAutoComplete id="users" {...field} label="Избери участници" placeholder="Добави участници" toggleButtonStyleProps={{display:"none"}} tagStyleProps={{ padding: "5px",sx:{ "& button": { border: "none"},},
  }} items={pickerItems} selectedItems={selectedItems} onSelectedItemsChange={(changes) =>   handleSelectedItemsChange(changes.selectedItems)}/>
                            <FormErrorMessage border={0}>{form.errors.team}</FormErrorMessage>
                        </FormControl>
						)}
				</Field>

                <Button display="flex" flexGrow={1} w="33%" justifyContent="center" mt={4} colorScheme="green" border="0"
			 isLoading={props.isSubmitting} type="submit"
			>
				Продължи
			</Button>

            </form>
		  )}
		</Formik>
		</Flex>
		</Box>
	)
}

export async function getServerSideProps(ctx){
	
	const cookies = new Cookies(ctx.req.headers.cookie);

	var response = await axios({
			method: 'get',
			url: "https://hacktues.pythonanywhere.com/users/",
			headers: 
			{ "Content-type": "Application/json",
			  "Authorization": `Bearer ${cookies.get('auth')}`}
			},
			)
			
	return {props: {users: response.data}}	

}

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


export default Teams
