import React from 'react'
import { useEffect } from "react"
import { Flex, Box, Text, Button, Link, Image } from "@chakra-ui/react";
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie';
import Konami from 'react-konami-code';
import ReactPageScroller from 'react-page-scroller';
import { motion } from "framer-motion"
// import Image from 'next/image';
const MotionBox = motion.custom(Box)
import {AiOutlineCalendar} from "react-icons/ai"
import {MdPlace} from "react-icons/md"
import Clock from '../components/countdown/clock'
import { Center } from "@chakra-ui/react"
import { List, ListItem, ListIcon, UnorderedList, Grid } from "@chakra-ui/react"

export default function Home() {

    var inW
    var inH 

    useEffect(() => {
        router.prefetch('/secret/verywellkeptsecret/indeed/secret')
        inW = window.innerWidth
        inH = window.innerHeight
    }, [inW, inH])

    var router = useRouter()

    // console.log(new Date(2021, 3, 11, 18, 0, 0, 0) / 1000);

    const easterEgg = () => {
		  router.push("/secret/verywellkeptsecret/indeed/secret")
    }

    // if(){
    //   return <Loader/>
    // }

    return( 
        <Box>
          	<Konami code={[71,71,87,80]} action={easterEgg}/>
            
			<Flex justifyContent="center" alignItems="center" paddingTop="20px" paddingBottom="20px" flexDirection="column" overflow="hidden" flexWrap="wrap">
            	<Flex padding="15px" backgroundColor="white" marginTop="3%"  marginBottom="20px" flexDirection="column" flexWrap="wrap" marginLeft="5%"  marginRight="5%" rounded="lg" w="100%" color="white">
                	<Text textAlign="center" marginTop="auto" marginBottom="0px" wordBreak="break-word" fontFamily="llpixel" textColor="#009d60" fontSize="calc(1em + 10vmin)">Hack TUES&nbsp;<span style={{display:"inline-block", color:"#105231"}}>GG</span></Text>
                    <Clock deadline="March, 11, 2021" />
                    <Flex justifyContent="space-around" flexDirection="row" flexWrap="wrap">
                      	<Button _hover={{background:"#105231"}} border="0" textDecoration="none" fontStyle="Rubik" leftIcon={<MdPlace/>} colorScheme="#105231" variant="outline"><Link textDecoration="none" isExternal href="https://goo.gl/maps/24QCr5RqiSuG3jGC8"><a style={{textDecoration:"none"}}>Sofia Tech Park</a></Link></Button>	
				    		<Button _hover={{background:"#105231"}} border="0" textDecoration="none" fontStyle="Rubik" leftIcon={<AiOutlineCalendar/>} colorScheme="#105231" variant="outline"><Link textDecoration="none" href="/schedule"><a style={{textDecoration:"none"}}>08-11.03.2021</a></Link></Button>	
				    </Flex>
                </Flex>
           			
				<Flex w="100%" marginRight="5%" marginLeft="5%" rounded="lg" justifyContent="center" alignItems="center" padding="15px" background="#fff" flexDirection="column" flexWrap="wrap" justifyContent="center" alignItems="center">
					<Flex rounded="lg" justifyContent="center" alignItems="center" padding="15px" background="#fff" flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center" >		  	
						<Box marginRight="15px" background="#fff">
							<Link display="flex" justifyContent="center" alignItems="center" h="100%">
								<Image display="block" width="250px" h="100px" objectFit="contain" title="Chaos Group" src="/Logos/Alpha - Chaos Group/Chaos_Group_logo_b.png"></Image>
							</Link>
						</Box>
						<Box background="#fff">
							<Link display="flex" justifyContent="center" alignItems="center" h="100%">
								<Image transform="scale(1.25)" display="block" width="250px" h="100px" objectFit="contain" title="Experian" src="/Logos/Alpha - Experian/Experian BM TM RGBsm.png"></Image>
							</Link>
						</Box>
						<Box background="#fff">
							<Link display="flex" justifyContent="center" alignItems="center" h="100%">
								<Image display="block" transform="scale(0.75)" h="100px" objectFit="contain" title="SAP" src="/Logos/Alpha - SAP/SAP_grad_R_pref.png"></Image>
							</Link>
						</Box>
						<Box marginRight="15px" background="#fff">
							<Link display="flex" justifyContent="center" alignItems="center" h="100%">
								<Image display="block" width="250px" h="100px" objectFit="contain" title="TelebidPro" src="/Logos/Alpha - TelebidPro/Telebid Pro light.svg"></Image>
							</Link>
						</Box>
						<Box marginRight="15px" background="#fff">
							<Link display="flex" justifyContent="center" alignItems="center" h="100%">
								<Image display="block" width="250px" h="100px" objectFit="contain" title="VMWare" src="/Logos/Alpha - VMWare/VMW_09Q3_LOGO_Corp_Gray.png"></Image>
							</Link>
						</Box>
					</Flex>
					<Flex rounded="lg" justifyContent="center" alignItems="center" padding="15px" background="#fff" flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center" >		  	
						<Box marginRight="15px" background="#fff">
							<Link display="flex" justifyContent="center" alignItems="center" h="100%">
								<Image display="block" width="250px" h="100px" objectFit="contain" title="A1" src="/Logos/Beta - A1/A1_01_08RED_3_L.png"></Image>
							</Link>
						</Box>
						<Box background="#fff">
							<Link display="flex" justifyContent="center" alignItems="center" h="100%">
								<Image display="block" width="250px" h="100px" objectFit="contain" title="Nemetschek" src="/Logos/Beta - Nemetschek/Nemetschek-logo 2.png"></Image>
							</Link>
						</Box>
						<Box marginRight="15px" background="#fff">
							<Link display="flex" justifyContent="center" alignItems="center" h="100%">
								<Image display="block" width="250px" h="100px" objectFit="contain" title="Strypes" src="/Logos/Beta - Strypes/strypes-logo-transparent.png"></Image>
							</Link>
						</Box>
					</Flex>
					<Flex rounded="lg" justifyContent="center" alignItems="center" padding="15px" background="#fff" flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center" >
						<Box background="#fff">
							<Link display="flex" justifyContent="center" alignItems="center" h="100%">
								<Image display="block" width="250px" h="100px" objectFit="contain" title="Astea Solutions" src="/Logos/Gamma - Astea Solutions/astea_logo.svg"></Image>
							</Link>
						</Box>
						<Box marginRight="15px" background="#fff">
							<Link display="flex" justifyContent="center" alignItems="center" h="100%">
								<Image display="block" width="250px" h="100px" objectFit="contain" title="Bosch" src="/Logos/Gamma - Bosch/BOSCH_ENGLISH_RGB.svg"></Image>
							</Link>
						</Box>
						  <Box marginRight="15px" background="#fff">
							<Link display="flex" justifyContent="center" alignItems="center" h="100%">
								<Image display="block" width="250px" h="100px" objectFit="contain" title="CPD" src="/Logos/Gamma - CPD/CPD_a_DaisyTechCompany.png"></Image>
							</Link>
						</Box>
						<Box marginRight="15px" background="#fff">
							<Link display="flex" justifyContent="center" alignItems="center" h="100%">
								<Image display="block" width="250px" h="100px" objectFit="contain" title="DevriX" src="/Logos/Gamma - DevriX/devrix-logo-small.png"></Image>
							</Link>
						</Box>
						<Box marginRight="15px" background="#fff">
							<Link display="flex" justifyContent="center" alignItems="center" h="100%">
								<Image display="block" width="250px" h="100px" objectFit="contain" title="Dopamine" src="/Logos/Gamma - Dopamine/Копие на DOPAMINE logo Black.png"></Image>
							</Link>
						</Box>
						<Box marginRight="15px" background="#fff">
							<Link display="flex" justifyContent="center" alignItems="center" h="100%">
								<Image display="block" width="250px" h="100px" objectFit="contain" title="Paysafe" src="/Logos/Gamma - Paysafe/PAYSAFE_logo.png"></Image>
							</Link>
						</Box>
					</Flex>
					</Flex>
           </Flex>
        </Box>)
}
