import { Flex, Text, Divider, Button} from '@chakra-ui/react'
import archive from "./archive/archive.json";
import TextTruncate from 'react-text-truncate';
import Link from 'next/link'

var stringArchive = JSON.stringify(archive);
var data = JSON.parse(stringArchive);

export default function Archive() {
    return (
        <Flex justifyContent="center" alignItems="center" flexDirection={["column","column","column","row"]} flexWrap="wrap" pb={["300px", "300px", "300px", "200px"]} pt="25px">
            <Flex mt="25px" ml="50px" mr="50px" fontFamily="Rubik" h={["325px","325px","300px","300px"]} flexDirection="column" flexWrap="wrap" w={["auto","400px","500px","500px"]} backgroundColor="white">
				<Flex>
				<Text m="0" pt="20px" pb="20px" pl="15px" fontFamily="llpixel" fontWeight="400" fontSize="30px"><span>Hack</span>&nbsp;<span style={{"color":"#446576"}}>TUES</span></Text>
				</Flex>
				<Flex w="100%" ml="0" mr="0">
					<Divider ml="15px" mr="15px" backgroundColor="black" w="100%" orientation="horizontal"/>
				</Flex>
				<Flex pl="15px" pr="15px" w="100%">
					<TextTruncate pl="15px" pr="15px" w="100%" line={4} element="p" truncateText="..." text={data[0].description}/>
				</Flex>
				<Link href="/archive/hacktues">
					<a><Button as="button" bg="#446576" fontFamily="Rubik" fontWeight="600" fontSize="1rem" fontWeight="semibold" rounded="md" color="white" h="2.5rem" px={4} ml={3} border="0" colorScheme="#09c0de" color="#fff" ml="15px" >Научи повече</Button></a>
				</Link>
            </Flex>
            <Flex mt="25px" ml="50px" mr="50px" fontFamily="Rubik" h={["325px","325px","300px","300px"]} flexDirection="column" flexWrap="wrap" w={["auto","400px","500px","500px"]} backgroundColor="white">
				<Flex>
				<Text m="0" pt="20px" pb="20px" pl="15px" fontFamily="llpixel" fontWeight="400" fontSize="30px"><span>Hack</span>&nbsp;<span style={{"color":"#446576"}}>TUES</span>&nbsp;<span>2</span></Text>
				</Flex>
				<Flex w="100%" ml="0" mr="0">
					<Divider ml="15px" mr="15px" backgroundColor="black" w="100%" orientation="horizontal"/>
				</Flex>
				<Flex pl="15px" pr="15px" w="100%">
					<TextTruncate pl="15px" pr="15px" w="100%" line={4} element="p" truncateText="..." text={data[1].description}/>
				</Flex>
				<Link href="/archive/hacktues2">
					<a><Button as="button" bg="#446576" fontFamily="Rubik" fontWeight="600" fontSize="1rem" fontWeight="semibold" rounded="md" color="white" h="2.5rem" px={4} ml={3} border="0" colorScheme="#09c0de" color="#fff" ml="15px" >Научи повече</Button></a>
				</Link>
            </Flex>
            <Flex mt="25px" ml="50px" mr="50px" fontFamily="Rubik" h={["325px","325px","300px","300px"]} flexDirection="column" flexWrap="wrap" w={["auto","400px","500px","500px"]} backgroundColor="#232323">
				<Flex>
				<Text m="0" pt="20px" pb="20px" pl="15px" fontFamily="llpixel" fontWeight="400" fontSize="30px"><span style={{"color":"#fff"}}>Hack</span>&nbsp;<span style={{"color":"#09c0de"}}>TUES</span >&nbsp;<span style={{"color":"#b2006e"}}>3</span></Text>
				</Flex>
				<Flex w="100%" ml="0" mr="0">
					<Divider ml="15px" mr="15px" style={{"color":"white"}} w="100%" orientation="horizontal"/>
				</Flex>
				<Flex pl="15px" pr="15px" w="100%">
					<TextTruncate style={{"color":"white"}} pl="15px" pr="15px" w="100%" line={4} element="p" truncateText="..." text={data[2].description}/>
				</Flex>
				<Link href="/archive/hacktues3">
					<a><Button as="button" bg="#09c0de" fontFamily="Rubik" fontWeight="600" fontSize="1rem" fontWeight="semibold" rounded="md" color="white" h="2.5rem" px={4} ml={3} border="0" colorScheme="#09c0de" color="#fff" ml="15px" >Научи повече</Button></a>
				</Link>
            </Flex>
            <Flex mt="25px" ml="50px" mr="50px" fontFamily="Rubik" h={["325px","325px","300px","300px"]} flexDirection="column" flexWrap="wrap" w={["auto","400px","500px","500px"]} backgroundColor="#232323">
				<Flex>
				<Text m="0" pt="20px" pb="20px" pl="15px" fontFamily="llpixel" fontWeight="400" fontSize="30px"><span style={{"color":"cyan"}}>Hack&nbsp;<sup>30x</sup>TUES</span></Text>
				</Flex>
				<Flex w="100%" ml="0" mr="0">
					<Divider ml="15px" mr="15px" style={{"color":"white"}} w="100%" orientation="horizontal"/>
				</Flex>
				<Flex pl="15px" pr="15px" w="100%">
					<TextTruncate style={{"color":"white"}} pl="15px" pr="15px" w="100%" line={4} element="p" truncateText="..." text={data[3].description}/>
				</Flex>
				<Link href="/archive/hacktues30">
					<a><Button as="button" bg="#09c0de" fontFamily="Rubik" fontWeight="600" fontSize="1rem" fontWeight="semibold" rounded="md" color="white" h="2.5rem" px={4} ml={3} border="0" colorScheme="#09c0de" color="#fff" ml="15px" >Научи повече</Button></a>
				</Link>
            </Flex>
            <Flex mt="25px" ml="50px" mr="50px" fontFamily="Rubik" h={["325px","325px","300px","300px"]} flexDirection="column" flexWrap="wrap" w={["auto","400px","500px","500px"]} backgroundColor="#343a40">
				<Flex>
				<Text m="0" pt="20px" pb="20px" pl="15px" fontFamily="llpixel" fontWeight="400" fontSize="30px"><span style={{"color":"#d6c6ad"}}>Hack</span>&nbsp;<span style={{"color":"#99d02b"}}>&nbsp;TUES&nbsp;</span><span style={{"color":"#99d02b"}} ><sup>^365</sup></span></Text>
				</Flex>
				<Flex w="100%" ml="0" mr="0">
					<Divider ml="15px" mr="15px" style={{"color":"white"}} w="100%" orientation="horizontal"/>
				</Flex>
				<Flex pl="15px" pr="15px" w="100%">
					<TextTruncate style={{"color":"white"}} pl="15px" pr="15px" w="100%" line={4} element="p" truncateText="..." text={data[4].description}/>
				</Flex>
				<Link href="/archive/hacktues365">
					<a><Button as="button" bg="#99d02b" fontFamily="Rubik" fontWeight="600" fontSize="1rem" fontWeight="semibold" rounded="md" color="white" h="2.5rem" px={4} ml={3} border="0" colorScheme="#09c0de" color="#fff" ml="15px" >Научи повече</Button></a>
				</Link>
            </Flex>
        </Flex>
    )
}
