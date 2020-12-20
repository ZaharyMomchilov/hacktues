import axios from 'axios'
import Cookies from 'universal-cookie';
import {Box, Avatar, Flex, Text, Input, Textarea, Tag, TagLabel } from "@chakra-ui/react";
import { Formik, Field, Form} from 'formik';
import { FormControl, FormLabel, FormErrorMessage} from "@chakra-ui/react";
import labels from '../../components/teams/icons'
import _ from 'lodash';
import jwt_decode from "jwt-decode";

function Teams(props) {

	var confirmed

	if(props.teams.confirmed){
		confirmed = <span style={{color: "red"}} >Да</span>
	}
	else if(!props.teams.confirmed){
		confirmed = <span style={{color: "red"}} >Не</span>
	}

	var j
	var tech = []

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
								<Textarea fontSize="14px" fontFamily="Rubik"  isDisabled _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} borderColor="#a5cf9f" boxShadow= "0px 1px 0px 0px #a5cf9f" variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="project_description" />
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

	return {props: {teams: response.data}}
	}

}

export default Teams