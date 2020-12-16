import { Formik, Field } from 'formik';
import {FormControl, FormLabel, FormErrorMessage, Input} from '@chakra-ui/react'

const FormInput = (props) => {
    return(
    <Field name="first_name">
		{({ field, form }) => (
			<FormControl flexGrow={1} w={["100%","100%","100%","33%"]} mr="5px" isRequired isInvalid={form.errors.first_name && form.touched.first_name}>
				<FormLabel fontFamily="Rubik" fontSize="15px">Име (на кирилица)</FormLabel>
					<Input _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} _focus={{borderColor:"#a5cf9f", boxShadow: "0px 2px 0px 0px #a5cf9f"}} variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="first_name" />
				<FormErrorMessage color="green" >{form.errors.first_name}</FormErrorMessage>
			</FormControl>
		)}
    </Field>
    )
}

export default FormInput