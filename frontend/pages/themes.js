import { Flex, Text, Divider, Button, Icon} from '@chakra-ui/react'
import themes from "./theme.json";
import TextTruncate from 'react-text-truncate';
import Link from 'next/link'

import { FaFireAlt, FaWater,  } from 'react-icons/fa';
import { ImEarth } from 'react-icons/im'
import {RiPlantLine} from 'react-icons/ri'

var stringArchive = JSON.stringify(themes);
var data = JSON.parse(stringArchive);

export default function Archive() {
    return (
        <Flex justifyContent="center" alignItems="center" flexDirection={["column","column","column","row"]} flexWrap="wrap" pb={["300px", "300px", "300px", "200px"]} pt="25px">

			<Flex rounded="lg" flexGrow="0" flexShrink="0" flexBasis={["100%","100%","33%","33%"]} mt="25px" ml="50px" mr="50px" fontFamily="Rubik" h={["auto","auto","300px","300px"]} flexDirection="column" flexWrap="wrap" w={["auto","500px","500px","500px"]} backgroundColor="white">
			<Flex justifyContent="center" alignItems="center">
				<Icon marginTop="10px"  marginBottom="10px" color="#FF0800" w={10} h={10} as={FaFireAlt}></Icon>
			</Flex>
				<Flex justifyContent="center">
				<Text textAlign="center" m="0" pb="20px" pl="15px" fontFamily="Rubik" fontWeight="400" fontSize="30px"><span>Code</span>&nbsp;<span style={{"color":"#FF0800"}}>Red</span></Text>
			</Flex>
				<Divider w="auto" ml="15px" mr="15px" backgroundColor="black" orientation="horizontal"/>
				<Text pl="15px" pr="15px" w="100%">&emsp;{data[0].description}</Text>
            </Flex>
            <Flex rounded="lg" flexGrow="0" flexShrink="0" flexBasis={["100%","100%","33%","33%"]} mt="25px" ml="50px" mr="50px" fontFamily="Rubik" h={["auto","auto","300px","300px"]} flexDirection="column" flexWrap="wrap" w={["auto","500px","500px","500px"]} backgroundColor="white">
				<Flex justifyContent="center" alignItems="center">
					<Icon marginTop="10px"  marginBottom="10px" color="#1338BE" w={10} h={10} as={FaWater}></Icon>
				</Flex>
				<Flex justifyContent="center">
				<Text textAlign="center" m="0" pb="20px" pl="15px" fontFamily="Rubik" fontWeight="400" fontSize="30px"><span>Deep In The</span>&nbsp;<span style={{"color":"#1338BE"}}>Blue</span></Text>
				</Flex>
				<Divider w="auto" ml="15px" mr="15px" backgroundColor="black" orientation="horizontal"/>
				<Text pl="15px" pr="15px" w="100%">&emsp;{data[1].description}</Text>
            </Flex>
            <Flex rounded="lg" flexGrow="0" flexShrink="0" flexBasis={["100%","100%","33%","33%"]} mt="25px" ml="50px" mr="50px" fontFamily="Rubik" h={["auto","auto","300px","300px"]} flexDirection="column" flexWrap="wrap" w={["auto","500px","500px","500px"]} backgroundColor="white">
				<Flex justifyContent="center" alignItems="center">
					<Icon marginTop="10px"  marginBottom="10px" color="#4B371C" w={10} h={10} as={ImEarth}></Icon>
				</Flex>
				
				<Flex justifyContent="center">
				<Text textAlign="center" m="0"  pb="20px" pl="15px" fontFamily="Rubik" fontWeight="400" fontSize="30px"><span style={{"color":"#4B371C"}}>Browny</span>&nbsp;<span>Soil</span></Text>
				</Flex>
				<Divider w="auto" ml="15px" mr="15px" backgroundColor="black"  orientation="horizontal"/>
				<Text pl="15px" pr="15px" w="100%">&emsp;{data[2].description}</Text>
            </Flex>
            <Flex rounded="lg" flexGrow="0" flexShrink="0" flexBasis={["100%","100%","33%","33%"]} mt="25px" ml="50px" mr="50px" fontFamily="Rubik" h={["auto","auto","300px","300px"]} flexDirection="column" flexWrap="wrap" w={["auto","500px","500px","500px"]} backgroundColor="white">
			<Flex justifyContent="center" alignItems="center">
					<Icon marginTop="10px"  marginBottom="10px" w={10} h={10} color="#105231" as={RiPlantLine}></Icon>
				</Flex>
				<Flex justifyContent="center">
				<Text textAlign="center" m="0"  pb="20px" pl="15px" fontFamily="Rubik" fontWeight="400" fontSize="30px"><span>Pallete</span>&nbsp;<span style={{"color":"#105231"}}>Nature</span></Text>
				</Flex>
				<Divider w="auto" ml="15px" mr="15px" backgroundColor="black" orientation="horizontal"/>
				<Text pl="15px" pr="15px" w="100%">&emsp;{data[3].description}</Text>
            </Flex>
        </Flex>
    )
}
