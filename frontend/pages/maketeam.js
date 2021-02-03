import React from 'react'
import axios from 'axios'
import {Box, Flex, Text, Input, InputGroup, InputLeftElement, Select, Switch, Textarea, Button, useToast, Tag, TagLabel, Checkbox } from "@chakra-ui/react";
import { Formik, Field } from 'formik';
import { FormControl, FormLabel, FormErrorMessage} from "@chakra-ui/react";
import _ from 'lodash';
import { useRouter } from 'next/router'
import * as Yup from 'yup';
import { CUIAutoComplete } from '../components/autocomplete/chakra-ui-autocomplete.esm'
import labels from '../components/teams/icons'
import jwt_decode from "jwt-decode";
import Cookies from 'universal-cookie';

const Teams = (props) => {

	const technology = labels
	const cookies = new Cookies()
	var router = useRouter()
	const toast = useToast()
	var tech = []
	var chosenTech = []

	const tagRefs = React.useRef([]);
	tagRefs.current = technology.map(
		(ref, index) =>   tagRefs.current[index] = React.createRef()
	)
	
	technology.map((data, index) => {
		
		tech.push(<Tag onClick={function(){
			if(!chosenTech.includes(data.label)){
				chosenTech.push(data.label)
				tagRefs.current[index].current.style.background = "rgb(0, 255, 255)"
				tagRefs.current[index].current.style.boxShadow = "0px 0px 5px"
			}
			else if(chosenTech.includes(data.label)){
				chosenTech.indexOf(data.label) !== -1 && chosenTech.splice(chosenTech.indexOf(data.label), 1)
				tagRefs.current[index].current.style.background = data.color
				tagRefs.current[index].current.style.boxShadow = "none"
			}		
		}} ref={tagRefs.current[index]} cursor="pointer" key={data.id} mt="5px" mr="5px" background={data.color}><TagLabel textColor="white" fontFamily="Rubik">{data.label}</TagLabel></Tag>)	
	});

    var users = props.users
    var items = []
	var i
	
	// try {
	// 	console.log(jwt_decode(cookies.get('auth')))
	// 	// valid token format
	//   } catch(error) {
	// 	console.log(error);
	//   }

	// console.log(jwt_decode(cookies.get('auth')));

	// && item.id != jwt_decode(cookies.get('auth')).user_id



    for(i = 0; i < users.length; i++){
        items.push({value: users[i].id, label: `${users[i].first_name} ${users[i].last_name} - ${users[i].form}`})
    }
    var people
    const [pickerItems, setPickerItems] = React.useState(items);
    const [selectedItems, setSelectedItems] = React.useState([]);

    people = selectedItems

    const handleSelectedItemsChange = (selectedItems) => {
        if (selectedItems) {
            setSelectedItems(selectedItems);
        }
    };

	return(
		<Box paddingBottom="300px" maxW="960px" marginLeft="auto" marginRight="auto">
		<Flex backgroundColor="white" p="25px" rounded="lg" flexDirection="column" flexWrap="wrap" margin="50px">
        <Formik justifyContent="center" initialValues={{name: '', project_name: '', project_description: '', github_link: ''}}
				onSubmit={(values, actions) => {
        			setTimeout(() => {
							if(people.length > 4){
								actions.setSubmitting(false);
								actions.setFieldError("users", "Твърде много участници избрани")
							}
                            let selected = people.map(a => a.value);
                            values['users'] = selected
							values['users'].push(jwt_decode(cookies.get('auth')).user_id)
                            values['technologies'] = chosenTech
							var data = JSON.stringify(values, null, 1)
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
        					    .catch(function (error) {
									if (error.response) {
										for (const [key, value] of Object.entries(error.response.data)) {
  											console.log(`${key}: ${value}`);
											actions.setFieldError(key, value)
										}
								}})						
          									actions.setSubmitting(false)
        								}, 1000);
      							}}>
				
                {(props) => (
					<form style={{display:"flex",flexDirection:"row",flexWrap:"wrap", paddingTop:"10px"}} onSubmit={props.handleSubmit}>
					<Field name="name">
						{({ field, form}) => (
						<FormControl paddingTop={["15px","15px","15px","0px"]} flexGrow={1} w={["100%","100%","33%","33%", "33%"]} mr="5px" isRequired isInvalid={form.errors.name && form.touched.name}>
							<FormLabel fontFamily="Rubik" fontSize="15px">Име на отбора</FormLabel>
							<Input _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} borderColor="#a5cf9f" boxShadow= "0px 1px 0px 0px #a5cf9f" variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="name" />
							<FormErrorMessage border={0}>{form.errors.name}</FormErrorMessage>
						</FormControl>
						)}
					  </Field>
					<Field name="project_name">
						{({ field, form}) => (
						<FormControl paddingTop={["15px","15px","15px","0px"]} flexGrow={1} w={["100%","100%","33%","33%", "33%"]} mr="5px"  isInvalid={form.errors.project_name && form.touched.project_name}>
							<FormLabel fontFamily="Rubik" fontSize="15px">Име на проекта</FormLabel>
							<Input _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} borderColor="#a5cf9f" boxShadow= "0px 1px 0px 0px #a5cf9f" variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="project_name" />
							<FormErrorMessage border={0}>{form.errors.project_name}</FormErrorMessage>
						</FormControl>
						)}
					  </Field>
					
					<Field name="project_description">
						{({ field, form }) => (
						<FormControl paddingTop="15px" flexGrow={1} w="100%" mr="5px"  isInvalid={form.errors.project_description && form.touched.project_description}>
							<FormLabel paddingTop="15px" paddingBottom="5px" fontFamily="Rubik" fontSize="15px" htmlFor="email">Описание на проекта</FormLabel>
								<Textarea resize="none" fontSize="14px" fontFamily="Rubik" _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} borderColor="#a5cf9f" boxShadow= "0px 1px 0px 0px #a5cf9f" variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="project_description" />
							<FormErrorMessage border={0}>{form.errors.project_description}</FormErrorMessage>
						</FormControl>
						)}
					</Field>
					<Field name="github_link">
						{({ field, form }) => (
						<FormControl paddingTop="15px" flexGrow={1} w="100%" mr="5px"  isInvalid={form.errors.github_link && form.touched.github_link}>
							<FormLabel fontFamily="Rubik" fontSize="15px" htmlFor="text">Линк/ове към GitHub хранилище/а:</FormLabel>
								<Input  _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} borderColor="#a5cf9f" boxShadow= "0px 1px 0px 0px #a5cf9f" variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="github_link" />
							<FormErrorMessage border={0}>{form.errors.github_link}</FormErrorMessage>
						</FormControl>
						)}
				</Field>
				
                <Field name="users">
						{({ field, form }) => (
						<FormControl paddingTop="15px" flexGrow={1} w="100%" mr="5px" isInvalid={form.errors.users && form.touched.users}>
						<FormLabel fontFamily="Rubik" fontSize="15px" htmlFor="text">Избери участници</FormLabel>
							<CUIAutoComplete id="users" {...field} placeholder="Добави участници" toggleButtonStyleProps={{display:"none"}} tagStyleProps={{ padding: "5px",sx:{ "& button": { border: "none"},},
  }} items={pickerItems} selectedItems={selectedItems} onSelectedItemsChange={(changes) =>   handleSelectedItemsChange(changes.selectedItems)}/>
                            <FormErrorMessage paddingBottom="15px" border={0}>{form.errors.users}</FormErrorMessage>
                        </FormControl>
						)}
				</Field>
  				<Flex paddingBottom="15px" flexDirection="row" flexWrap="wrap" width="100%">
				  	{tech}
				</Flex>
  				
                <Button _focus={{outline:"none"}} display="flex" w="33%" justifyContent="center" mt={4} colorScheme="green" border="0"
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
			url: "https://hacktues.pythonanywhere.com/users/",
			headers: 
			{ "Content-type": "Application/json",
			  "Authorization": `Bearer ${cookies.get('auth')}`}
			},
		)

		// console.log(response);
		

		for(var i = 0; i < response.data.length; i++){
			if(response.data[i].id == jwt_decode(cookies.get('auth')).user_id){
				if(response.data[i].team_set.length > 0){
					return {
						redirect: {
						permanent: true,
					  	destination: '/',
					}
				}
			}
		}
		else{
			var users = response.data.filter(function(item) {
				return item.email !== "hacktues" && item.team_set.length == 0 && item.id != jwt_decode(cookies.get('auth')).user_id})
			}
			return {props: {users: users}}
		}
	}

		// if(jwt_decode(cookies.get('auth')).user_id == ){
		// 	return {
		// 		  redirect: {
		// 		   permanent: false,
		// 		destination: '/',
		// 	  },
		// }
	
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
