import { Flex, Text, Divider, Button, Icon, Box} from '@chakra-ui/react'
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
        <Flex zIndex={11} justifyContent="center" alignItems="center" flexDirection={["column","column","column","row"]} flexWrap="wrap" pb={["300px", "300px", "300px", "200px"]} pt="25px">
			<Flex rounded="lg" flexGrow="0" flexShrink="0" flexBasis={["100%","100%","100%","35%"]} mt="25px" ml="50px" mr="50px" fontFamily="Rubik" maxW="1470px" h={["auto","auto","450px","450px","400px"]} flexDirection="column" flexWrap="wrap" w={["auto","auto","450px","450px"]} backgroundColor="white">
			<Flex justifyContent="center" alignItems="center">
				<Icon marginTop="10px"  marginBottom="10px" color="#FF0800" w={10} h={10} as={FaFireAlt}></Icon>
			</Flex>
				<Flex justifyContent="center">
				<Text textAlign="center" m="0" pb="20px" pl="15px" fontFamily="Rubik" fontWeight="400" fontSize="30px"><span>Code</span>&nbsp;<span style={{"color":"#FF0800"}}>Red</span></Text>
			</Flex>
				<Divider w="auto" ml="15px" mr="15px" backgroundColor="black" orientation="horizontal"/>
				<Text textAlign="justify" wordBreak="break-word" pl="15px" pr="15px" w="100%">&emsp;{data[0].description}</Text>
            </Flex>
            <Flex rounded="lg" flexGrow="0" flexShrink="0" flexBasis={["100%","100%","100%","35%"]} mt="25px" ml="50px" mr="50px" fontFamily="Rubik" h={["auto","auto","450px","450px","400px"]} flexDirection="column" flexWrap="wrap" w={["auto","auto","450px","450px"]} backgroundColor="white">
				<Flex justifyContent="center" alignItems="center">
					<Icon marginTop="10px"  marginBottom="10px" color="#1338BE" w={10} h={10} as={FaWater}></Icon>
				</Flex>
				<Flex justifyContent="center">
				<Text textAlign="center" m="0" pb="20px" pl="15px" fontFamily="Rubik" fontWeight="400" fontSize="30px"><span>Deep In The</span>&nbsp;<span style={{"color":"#1338BE"}}>Blue</span></Text>
				</Flex>
				<Divider w="auto" ml="15px" mr="15px" backgroundColor="black" orientation="horizontal"/>
				<Text textAlign="justify" pl="15px" pr="15px" w="100%">&emsp;{data[1].description}</Text>
            </Flex>
            <Flex rounded="lg" flexGrow="0" flexShrink="0" flexBasis={["100%","100%","100%","35%"]} mt="25px" ml="50px" mr="50px" fontFamily="Rubik" h={["auto","auto","450px","450px","400px"]} flexDirection="column" flexWrap="wrap" w={["auto","auto","450px","450px"]} backgroundColor="white">
				<Flex justifyContent="center" alignItems="center">
					<Icon marginTop="10px"  marginBottom="10px" color="#4B371C" w={10} h={10} as={ImEarth}></Icon>
				</Flex>
				
				<Flex justifyContent="center">
				<Text textAlign="center" m="0"  pb="20px" pl="15px" fontFamily="Rubik" fontWeight="400" fontSize="30px"><span style={{"color":"#4B371C"}}>Browny</span>&nbsp;<span>Soil</span></Text>
				</Flex>
				<Divider w="auto" ml="15px" mr="15px" backgroundColor="black"  orientation="horizontal"/>
				<Text textAlign="justify" pl="15px" pr="15px" w="100%">&emsp;{data[2].description}</Text>
            </Flex>
            <Flex rounded="lg" flexGrow="0" flexShrink="0" flexBasis={["100%","100%","100%","35%"]} mt="25px" ml="50px" mr="50px" fontFamily="Rubik" h={["auto","auto","450px","450px","400px"]} flexDirection="column" flexWrap="wrap" w={["auto","auto","450px","450px"]} backgroundColor="white">
			<Flex justifyContent="center" alignItems="center">
					{/* <Icon fill="purple" marginTop="10px"  marginBottom="10px" w={10} h={10} color="purple" as={RiPlantLine}></Icon> */}
					
  						<svg style={{width:0,height:0,position:"absolute"}} aria-hidden="true" focusable="false">
  						  <linearGradient id="gradient">
  						    <stop offset="0%" stop-color="#FF0080" />
  						    <stop offset="100%" stop-color="#7928CA" />
  						  </linearGradient>
  						</svg>
  					<Icon
					  as={RiPlantLine}
  					  boxSize={16}
  					  fill="url(#gradient) #FF0080;"
  					//   stroke-linecap="round"
  					//   stroke-linejoin="round"
  					//   stroke-width="1"
  					//   stroke="url(#gradient) #FF0080;"
  					>
     			</Icon>
				</Flex>
				<Flex justifyContent="center">
				<Text textAlign="center" m="0"  pb="20px" bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text" pl="15px" fontFamily="Rubik" fontWeight="400" fontSize="30px"><span>Pallete</span>&nbsp;<span style={{bgGradient:"linear(to-l, #7928CA,#FF0080)",bgClip:"text"}}>Nature</span></Text>
				</Flex>
				<Divider w="auto" ml="15px" mr="15px" backgroundColor="black" orientation="horizontal"/>
				<Text textAlign="justify" pl="15px" pr="15px" w="100%">&emsp;{data[3].description}</Text>
            </Flex>
        </Flex>
    )
}
