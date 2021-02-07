import { Box, Flex, Text } from "@chakra-ui/react";
import { Tag, TagIcon, TagLabel, TagCloseButton, Icon, Avatar } from "@chakra-ui/react";
import labels from './icons'
import Link from 'next/link'

const Card = (props) => {

		var j;
		const teammates = []
		props.teammates.map((data, index) =>
		{
			teammates.push(<Text p={0} m={0}>{`${data.first_name} ${data.last_name} - ${data.form}`}</Text>)
		}
    	);

		var tech = []
		props.label.map((data, index) => {
			for(j = 0; j < labels.length; j++)
				if(labels[j].label == data){
					tech[j] = <Tag key={index} mt="5px" mr="5px" background={labels[j].color} key={j}><TagLabel textColor="white" fontFamily="Rubik" >{data}</TagLabel></Tag>
		}});

		return (
			<Link display="flex" color="black" href={`/teams/${encodeURIComponent(props.id)}/`}>
			<Flex cursor="pointer" width="400px" flexDirection="column" flexWrap="wrap" alignSelf="stretch" h="auto" m="15px" padding="15px" backgroundColor="white" rounded="lg" overflow="hidden">
				<Flex paddingBottom="15px" flexDirection="row" flexWrap="wrap">
					<Avatar name={props.name} />
						<Text fontSize="15px" fontFamily="Rubik" mb="auto" ml="15px" mt="auto">{props.name}</Text>
				</Flex>
				<Text fontFamily="Rubik" wordBreak="break-word" m="0" p="0" lineHeight="1.5" fontWeight="400"><strong fontWeight="700">Технологии:</strong></Text>
				<Flex paddingTop={["10px","10px","10px","15px"]} flexDirection="row" flexWrap="wrap">{tech}</Flex>
				<Flex paddingTop={["10px","10px","10px","15px"]} justifyContent="center" flexDirection="column">
						<Text fontFamily="Rubik" wordBreak="break-word" m="0" lineHeight="1.5"><strong fontWeight="700">Участници:</strong></Text>
						<Text lineHeight="1.5" fontFamily="Rubik" wordBreak="keep-all" m="0" pt={["0","0","0","15px"]} >
							{teammates}
						</Text>
				</Flex>
			</Flex>
			</Link>
		);
}

export default Card;