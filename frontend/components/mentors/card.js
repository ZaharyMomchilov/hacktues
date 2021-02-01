import { Box, Flex, Text } from "@chakra-ui/react";
import { Tag, TagIcon, TagLabel, TagCloseButton, Icon, Avatar } from "@chakra-ui/react";
// import labels from './icons'
import Link from 'next/link'
import labels from '../teams/icons'

const Mentor = (props) => {

	var availability = props.availability.split(', ');
	let avail = []
	availability.map((data, index) => {
		avail.push(<Text key={index} pb="5px" fontSize="15px" fontFamily="Rubik" wordBreak="keep-all" m="0" fontWeight="300">{data}</Text>);
})

	var techs = props.technologies.split(', ');
	let tech = []
	techs.map((data, index) => {
		for(let j = 0; j < labels.length; j++)
			if(labels[j].label == data){
				tech.push(<Tag key={index} mr="5px" mb="5px" background={labels[j].color} key={j}><TagLabel textColor="white" fontFamily="Rubik" >{data}</TagLabel></Tag>);
}});

	let grad
	if(props.graduated){
		grad = <Text textAlign="center" fontSize="14px" fontFamily="Rubik" wordBreak="break-word" m="0" p="0" lineHeight="1.5" fontWeight="400">Випуск&nbsp;{props.graduated}</Text>
	}
	 


		return (
			<Flex width={["auto", "auto", "400px","400px"]} flexDirection="column" flexWrap="wrap" alignSelf="stretch" h="auto" m={["15px"]} padding="15px" backgroundColor="white" rounded="lg" overflow="hidden">
				<Flex paddingBottom="5px" flexDirection="column" alignItems="center"  flexWrap="wrap">
					<Avatar size="2xl" src={props.image}/>
					<Text pt="5px" fontSize="16px" fontFamily="Rubik" mb="auto" ml="15px" mt="auto">{props.name}</Text>
				</Flex>
				<Text textAlign="center" fontSize="14px" fontFamily="Rubik" wordBreak="break-word" m="0" p="0" lineHeight="1.5" fontWeight="400">{props.position}&nbsp;@&nbsp;{props.organization}</Text>
				{grad}
				<Flex paddingTop={["10px","10px","10px","15px"]} justifyContent="center" alignSelf="center" flexDirection="row" flexWrap="wrap">{tech}</Flex>
				<Flex paddingTop={["5px","5px","5px","10px"]} justifyContent="center" flexDirection="column">
						<Text pb="5px" fontSize="15px" fontFamily="Rubik" wordBreak="break-word" m="0" lineHeight="1.5" fontWeight="400"><strong fontWeight="700">Присъствие:</strong></Text>
						<Text fontSize="15px" fontFamily="Rubik" wordBreak="keep-all" m="0" fontWeight="300" as="h3">
							{avail}
						</Text>
				</Flex>
			</Flex>
		);
}

export default Mentor;