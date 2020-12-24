import axios from 'axios'
import Cookies from 'universal-cookie';
import {Box, Avatar, Flex, Text, Input, Textarea, Tag, TagLabel, useToast, useControllableState } from "@chakra-ui/react";
import { Formik, Field, Form, useFormikContext} from 'formik';
import { FormControl, FormLabel, FormErrorMessage} from "@chakra-ui/react";
import labels from '../../components/teams/icons'
import _ from 'lodash';
import jwt_decode from "jwt-decode";
import {useRouter} from 'next/router'
import { CUIAutoComplete } from '../../components/autocomplete/chakra-ui-autocomplete.esm'
import {useState, useCallback, useEffect} from 'react'

function Teams(props) {
	
	console.log(props);

	const router = useRouter()
	const toast = useToast()
	const cookies = new Cookies();
	var confirmed

	if(props.teams.confirmed){
		confirmed = <span style={{color: "red"}} >Да</span>
	}
	else if(!props.teams.confirmed){
		confirmed = <span style={{color: "red"}} >Не</span>
	}

	var j
	var tech = []

	if(props.user.is_captain){
		if(router.query.id == props.user.team_set[0]){
			const technology = labels
			
			var tech = []
			
			var chosenTech = props.teams.technologies
			var alreadyChosenTech = props.teams.technologies

			const tagRefs = React.useRef([]);
			tagRefs.current = technology.map(
				(ref, index) =>   tagRefs.current[index] = React.createRef()
			)

			technology.map((data, index) => {
					if(alreadyChosenTech.includes(data.label)){
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
						}} ref={tagRefs.current[index]} cursor="pointer" key={data.id} mt="5px" mr="5px" boxShadow="0px 0px 5px" background="rgb(0, 255, 255)"><TagLabel textColor="white" fontFamily="Rubik">{data.label}</TagLabel></Tag>)	
					}
					else{
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
					}
					
			})


			return(
				<Box paddingBottom="300px" maxW="960px" marginLeft="auto" marginRight="auto">
				<Flex backgroundColor="white" p="25px" rounded="lg" flexDirection="column" flexWrap="wrap" margin="50px">
					<Flex>
						<Avatar name={props.teams.name}/>
						<Text fontSize="15px" fontFamily="Rubik" pl="15px">{props.teams.name}</Text>
					</Flex>
					<Formik initialValues={{ name: props.teams.name, project_name: props.teams.project_name , github_link: props.teams.github_link, project_description: props.teams.project_description}} onSubmit={(values, actions) => {
        			setTimeout(() => {
							// if(people.length > 4){
							// 	actions.setSubmitting(false);
							// 	actions.setFieldError("users", "Твърде много участници избрани")
							// }
                            // let selected = people.map(a => a.value);
                            // values['users'] = selected
							// values['users'].push(jwt_decode(cookies.get('auth')).user_id)
                            // values['technologies'] = chosenTech
							var data = JSON.stringify(values, null, 1)
        					axios({
        						method: 'patch',
        						url: `https://hacktues.pythonanywhere.com/teams/${router.query.id}/`,
        						headers: 
        						{ "Content-type": "Application/json",
        						  "Authorization": `Bearer ${cookies.get('auth')}`},
								data: data  
								  },)
        					    .then(function (response) {
        					        if(response.status == 200){
										toast({
        									  title: "Промени",
        									  description: "Промените бяха успешно запазени.",
        									  status: "success",
        									  duration: 9000
        									});
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
							<Form style={{display:"flex",flexDirection:"row",flexWrap:"wrap", paddingTop:"10px"}} onSubmit={props.handleSubmit}>
							<Field name="name">
								{({ field, form}) => (
								<FormControl flexGrow={1} w={["100%","100%","33%","33%", "33%"]} mr="5px" isRequired isInvalid={form.errors.first_name && form.touched.first_name}>
									<FormLabel fontFamily="Rubik" fontSize="15px">Име на отбора</FormLabel>
									<Input _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} borderColor="#a5cf9f" boxShadow= "0px 1px 0px 0px #a5cf9f" variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="name" />
									<FormErrorMessage border={0}>{form.errors.first_name}</FormErrorMessage>
								</FormControl>
								)}
							  </Field>
							<Field name="project_name">
								{({ field, form}) => (
								<FormControl flexGrow={1} w={["100%","100%","33%","33%", "33%"]} mr="5px" isRequired isInvalid={form.errors.first_name && form.touched.first_name}>
									<FormLabel fontFamily="Rubik" fontSize="15px">Име на проекта</FormLabel>
									<Input _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} borderColor="#a5cf9f" boxShadow= "0px 1px 0px 0px #a5cf9f" variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="project_name" />
									<FormErrorMessage border={0}>{form.errors.first_name}</FormErrorMessage>
								</FormControl>
								)}
							  </Field>
							
							<Field name="project_description">
								{({ field, form }) => (
								<FormControl flexGrow={1} w="100%" mr="5px" isRequired isInvalid={form.errors.email && form.touched.email}>
									<FormLabel paddingTop="15px" paddingBottom="5px" fontFamily="Rubik" fontSize="15px" htmlFor="email">Описание на проекта</FormLabel>
										<Textarea resize="none" fontSize="14px" fontFamily="Rubik"  _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} borderColor="#a5cf9f" boxShadow= "0px 1px 0px 0px #a5cf9f" variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="project_description" />
									<FormErrorMessage border={0}>{form.errors.email}</FormErrorMessage>
								</FormControl>
								)}
							</Field>
							<Field name="github_link">
								{({ field, form }) => (
								<FormControl flexGrow={1} w="100%" mr="5px" isRequired isInvalid={form.errors.last_name && form.touched.last_name}>
									<FormLabel fontFamily="Rubik" fontSize="15px" htmlFor="text">Линк/ове към GitHub хранилище/а:</FormLabel>
										<Input _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} borderColor="#a5cf9f" boxShadow= "0px 1px 0px 0px #a5cf9f" variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="github_link" />
									<FormErrorMessage border={0}>{form.errors.last_name}</FormErrorMessage>
								</FormControl>
								)}
						</Field>			
					<Flex flexDirection="column" flexWrap="wrap">
						<Text fontFamily="Rubik" fontSize="15px" m={0} p={0} pt="15px">Технологии</Text>
						<Flex paddingTop="15px" flexDirection="row" flexWrap="wrap">	
							  {tech}
						</Flex>
					</Flex>
						<AutoSave debounceMs={2000} />
					</Form>
				  )}
				</Formik>
				<Text fontFamily="Rubik" fontSize="15px">Потвърден:&nbsp;{confirmed}</Text>
				</Flex>
				</Box>
			)
		}
	}
	else{

		props.teams.technologies.map((data, index) => {
			for(j = 0; j < labels.length; j++)
				if(labels[j].label == data){
					tech[j] = <Tag key={index} mt="5px" mr="5px" background={labels[j].color} key={j}><TagLabel textColor="white" fontFamily="Rubik" >{data}</TagLabel></Tag>
	}});
	
		return(
			<Box paddingBottom="300px" maxW="960px" marginLeft="auto" marginRight="auto">
			<Flex backgroundColor="white" p="25px" rounded="lg" flexDirection="column" flexWrap="wrap" margin="50px">
				<Flex>
					<Avatar name={props.teams.name}/>
					<Text fontSize="md" pl="15px">{props.teams.name}</Text>
				</Flex>
				<Formik initialValues={{ name: props.teams.name, project_name: props.teams.project_name , github_link: props.teams.github_link, project_description: props.teams.project_description}}> 
					{(props) => (
						<Form style={{display:"flex",flexDirection:"row",flexWrap:"wrap", paddingTop:"10px"}} onSubmit={props.handleSubmit}>
						<Field name="name">
							{({ field, form}) => (
							<FormControl flexGrow={1} w={["100%","100%","33%","33%", "33%"]} mr="5px" isRequired isInvalid={form.errors.first_name && form.touched.first_name}>
								<FormLabel fontFamily="Rubik" fontSize="15px">Име на отбора</FormLabel>
								<Input isDisabled _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} borderColor="#a5cf9f" boxShadow= "0px 1px 0px 0px #a5cf9f" variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="name" />
								<FormErrorMessage border={0}>{form.errors.first_name}</FormErrorMessage>
							</FormControl>
							)}
						  </Field>
						<Field name="project_name">
							{({ field, form}) => (
							<FormControl flexGrow={1} w={["100%","100%","33%","33%", "33%"]} mr="5px" isRequired isInvalid={form.errors.first_name && form.touched.first_name}>
								<FormLabel fontFamily="Rubik" fontSize="15px">Име на проекта</FormLabel>
								<Input isDisabled _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} borderColor="#a5cf9f" boxShadow= "0px 1px 0px 0px #a5cf9f" variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="project_name" />
								<FormErrorMessage border={0}>{form.errors.first_name}</FormErrorMessage>
							</FormControl>
							)}
						  </Field>
						
						<Field name="project_description">
							{({ field, form }) => (
							<FormControl flexGrow={1} w="100%" mr="5px" isRequired isInvalid={form.errors.email && form.touched.email}>
								<FormLabel paddingTop="15px" paddingBottom="5px" fontFamily="Rubik" fontSize="15px" htmlFor="email">Описание на проекта</FormLabel>
									<Textarea resize="none" fontSize="14px" fontFamily="Rubik"  isDisabled _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} borderColor="#a5cf9f" boxShadow= "0px 1px 0px 0px #a5cf9f" variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="project_description" />
								<FormErrorMessage border={0}>{form.errors.email}</FormErrorMessage>
							</FormControl>
							)}
						</Field>
						<Field name="github_link">
							{({ field, form }) => (
							<FormControl flexGrow={1} w="100%" mr="5px" isRequired isInvalid={form.errors.last_name && form.touched.last_name}>
								<FormLabel fontFamily="Rubik" fontSize="15px" htmlFor="text">Линк/ове към GitHub хранилище/а:</FormLabel>
									<Input isDisabled _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} borderColor="#a5cf9f" boxShadow= "0px 1px 0px 0px #a5cf9f" variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="github_link" />
								<FormErrorMessage border={0}>{form.errors.last_name}</FormErrorMessage>
							</FormControl>
							)}
					</Field>
	
					<Flex paddingTop="15px" flexDirection="row" flexWrap="wrap" width="100%">
						  {tech}
					</Flex>
				</Form>
			  )}
			</Formik>
			<Text>Потвърден:&nbsp;{confirmed}</Text>
			</Flex>
			</Box>
		)
	}
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
		url: `https://hacktues.pythonanywhere.com/teams/${ctx.query.id}/`,
		headers: 
		{ "Content-type": "Application/json",
		  "Authorization": `Bearer ${cookies.get('auth')}`}
		},
		)


	  var res = await axios({
		method: 'get',
		url: `https://hacktues.pythonanywhere.com/users/${jwt_decode(cookies.get('auth')).user_id}`,
		headers: 
		{ "Content-type": "Application/json",
		  "Authorization": `Bearer ${cookies.get('auth')}`}
		},
		)

		var users = await axios({
			method: 'get',
			url: `https://hacktues.pythonanywhere.com/users/`,
			headers: 
			{ "Content-type": "Application/json",
			  "Authorization": `Bearer ${cookies.get('auth')}`}
			},
		)
				
	return {props: {teams: response.data,  user: res.data, users: users.data }}
	}

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
	return(<Box></Box>)
  };

export default Teams