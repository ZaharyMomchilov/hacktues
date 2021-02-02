import React from 'react'
import { useEffect } from "react"
import { Flex, Box, Text, Button, Link, Image, Img } from "@chakra-ui/react";
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
import { BiImageAlt } from 'react-icons/bi';

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
            
			<Flex marginLeft={["20px", "20px", "200px", "200px"]} marginRight={["20px", "20px", "200px", "200px"]} justifyContent="center" alignItems="center" paddingTop="20px" paddingBottom="20px" flexDirection="column" overflow="hidden" flexWrap="wrap">
            	<Flex padding="15px" backgroundColor="white"  marginBottom="20px" flexDirection="column" flexWrap="wrap" rounded="lg" w="100%" color="white">
                	<Text textAlign="center" marginTop="auto" marginBottom="0px" wordBreak="break-word" fontFamily="llpixel" textColor="#009d60" fontSize="calc(1em + 10vmin)">Hack TUES&nbsp;<span style={{display:"inline-block", color:"#105231"}}>GG</span></Text>
                    <Clock deadline="March, 11, 2021" />
                    <Flex justifyContent="space-around" flexDirection="row" flexWrap="wrap">
                      	<Button _hover={{background:"#009d60"}} border="0" textDecoration="none" fontStyle="Rubik" leftIcon={<MdPlace/>} colorScheme="#105231" variant="outline"><Link textDecoration="none" isExternal href="https://www.youtube.com/channel/UCQcbYkAKPEgfjzvwb2sUWSQ"><a style={{textDecoration:"none"}}>Онлайн</a></Link></Button>	
				    	<Button _hover={{background:"#009d60"}} border="0" textDecoration="none" fontStyle="Rubik" leftIcon={<AiOutlineCalendar/>} colorScheme="#105231" variant="outline"><Link textDecoration="none" href="/schedule"><a style={{textDecoration:"none"}}>11-14.03.2021</a></Link></Button>	
				    </Flex>
                </Flex>
           			
				<Flex w="100%" rounded="lg" justifyContent="center" alignItems="center" padding="15px" background="#fff" flexDirection="column" flexWrap="wrap" justifyContent="center" alignItems="center">
					<Flex justifyContent="center" alignItems="center" flexDirection="column" flexWrap="wrap">
						<Text marginBottom="5px" fontFamily="Rubik" fontSize="20px" textAlign="center">Alpha спонсори</Text>
						<Flex rounded="lg" justifyContent="center" alignItems="center" background="#fff" flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center" >		  			
								
								
								<Link isExternal href="https://www.chaosgroup.com/careers" transform="translate(0px, 10px)" display="flex" justifyContent="center" alignItems="center" h="100%">
									<Box marginRight="15px" background="#fff" w="350px" h="150px">
										<Image transform="scale(1)" display="block" width="100%" h="100%" objectFit="contain" title="Chaos Group" src="/FinalLogos/Chaos_Group_logo_b.svg"></Image>
									</Box>
								</Link>
								<Link isExternal href="https://www.experian.bg/" transform="translate(0px, 9px)" display="flex" justifyContent="center" alignItems="center" h="100%">
									<Box transform={["translate(0px, -1px)","translate(0px, -1px)","translate(15px, -1px)","translate(15px, -1px)"]} background="#fff" w="350px" h="150px">
										<Image transform="scale(0.9)" display="block" width="100%" h="100%" objectFit="contain" title="Experian" src="/FinalLogos/Experian BM TM CMYK N.svg"></Image>
									</Box>
								</Link>
								<Link isExternal href="https://www.sap.com/bulgaria/index.html" display="flex" justifyContent="center" alignItems="center" h="100%">
									<Box transform={["translate(0px, 5px)","translate(0px, 5px)","translate(-25px, 5px)","translate(-25px, 5px)"]} marginRight="15px" background="#fff" w="350px" h="150px">
										<Image transform="scale(0.5)" display="block" width="100%" h="100%" objectFit="contain" title="SAP" src="/Logos/Alpha - SAP/SAP_grad_R_pref.png"></Image>
									</Box>
								</Link>
								
								<Link isExternal href="http://telebid-pro.com/" display="flex" justifyContent="center" alignItems="center" h="100%">
									<Box transform="translate(0px, 1px)" marginRight="15px" background="#fff" w="350px" h="150px">
										<Image  transform="scale(0.70)" display="block" width="300px" width="100%" h="100%" objectFit="contain" title="TelebidPro" src="/Logos/Alpha - TelebidPro/Telebid Pro light.svg"></Image>
									</Box>
								</Link>

								
								
								<Link isExternal href="https://www.facebook.com/vmwarebg/" display="flex" justifyContent="center" alignItems="center" h="100%">
									<Box marginRight="15px" background="#fff" transform="translate(0px, 4px)" w="350px" h="150px">
										<Image transform="scale(0.8)" display="block" width="100%" h="100%" objectFit="contain" title="VMWare" src='/FinalLogos/VMW_09Q3_LOGO_Corp_Gray.svg'></Image>
									</Box>
								</Link>
						</Flex>
					</Flex>
					<Flex justifyContent="center" alignItems="center" flexDirection="column" flexWrap="wrap">
						<Text marginBottom="5px" fontFamily="Rubik" fontSize="20px" textAlign="center">Beta спонсори</Text>
						<Flex rounded="lg" justifyContent="center" alignItems="center" background="#fff" flexDirection="row" flexWrap="wrap" >		  	
								<Link isExternal href="http://www.a1.bg/" display="flex" justifyContent="center" alignItems="center" h="100%">
									<Box marginRight="15px" background="#fff" w="350px" h="150px">
										<Image transform="scale(0.6)" display="block" width="100%" h="100%" objectFit="contain" title="A1" src="/Logos/Beta - A1/A1_01_08RED_3_L_1.png"></Image>
									</Box>
								</Link>
								<Link isExternal href="https://www.nemetschek.bg/" display="flex" justifyContent="center" alignItems="center" h="100%">
									<Box background="#fff" w="350px" h="150px">
										<Image transform="scale(1.65)" display="block" width="100%" h="100%" objectFit="contain" title="Nemetschek" src="/FinalLogos/Nemetschek-logo (1).svg"></Image>
									</Box>
								</Link>
								<Link isExternal href="https://www.facebook.com/StrypesBulgaria" display="flex" justifyContent="center" alignItems="center" h="100%">
									<Box marginRight="15px" background="#fff" w="350px" h="150px">
										<Image transform="scale(0.90)" display="block" width="100%" h="100%" objectFit="contain" title="Strypes" src="/FinalLogos/strypes-logo.svg"></Image>
									</Box>
								</Link>
						</Flex>
					</Flex>
					<Flex justifyContent="center" alignItems="center" flexDirection="column" flexWrap="wrap">
						<Text marginBottom="5px" fontFamily="Rubik" fontSize="20px" textAlign="center">Gamma спонсори</Text>
						<Flex rounded="lg" justifyContent="center" alignItems="center" padding="15px" background="#fff" flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center" >
								
								<Link isExternal href="https://asteasolutions.com/" display="flex" justifyContent="center" alignItems="center" h="100%">
									<Box transform="translate(0px, -10px)" marginRight="15px" background="#fff" w="350px" h="150px">
										<Image transform="scale(0.70)" display="block" width="100%" h="100%" objectFit="contain" title="Astea Solutions" src="/Logos/Gamma - Astea Solutions/astea_logo.svg"></Image>
									</Box>
								</Link>

								<Link isExternal href="http://web.cpdbg.com/" display="flex" justifyContent="center" alignItems="center" h="100%">
							  		<Box transform="translate(0px, 2px)" marginRight="15px" background="#fff" w="350px" h="100px">
										<Image transform="scale(0.80)" display="block" width="100%" h="100%" objectFit="contain" title="CPD" src="/Logos/Gamma - CPD/CPD_a_DaisyTechCompany.png"></Image>
									</Box>
								</Link>
								<Link isExternal href="https://devrix.com/" display="flex" justifyContent="center" alignItems="center" h="100%">
									<Box transform="translate(0px, -7px)" marginRight="15px" background="#fff" w="350px" h="100px">
										<Image transform="scale(0.9)" display="block" width="100%" h="100%" objectFit="contain" title="DevriX" src="/FinalLogos/DevriX_Logo.svg"></Image>
									</Box>
								</Link>
								<Link isExternal href="https://bosch.io/about-us/locations/sofia/" display="flex" justifyContent="center" alignItems="center" h="100%">
									<Box transform="translate(-5px, 2px)" marginRight="15px" background="#fff" w="350px" h="100px">
										<Image transform="scale(0.90)" display="block" width="100%" h="100%" objectFit="contain" title="Bosch" src="/Logos/Gamma - Bosch/BOSCH_ENGLISH_RGB.svg"></Image>
									</Box>
								</Link>
								
								<Link isExternal href="https://www.dopamine.bg/" display="flex" justifyContent="center" alignItems="center" h="100%">
									<Box marginTop="10px" marginRight="15px" background="#fff" w="350px" h="100px">
										<Image display="block" width="100%" h="100%" objectFit="contain" title="Dopamine" src="/Logos/Gamma - Dopamine/Копие на DOPAMINE logo Black.png"></Image>
									</Box>
								</Link>
								<Link isExternal href="https://careers.paysafe.com/locations/sofia/" display="flex" justifyContent="center" alignItems="center" h="100%">
									<Box marginTop="15px" marginRight="15px" background="#fff" w="350px" h="100px">
										<Image display="block" width="100%" h="100%" objectFit="contain" title="Paysafe" src="/FinalLogos/Logo Paysafe_1.svg"></Image>
									</Box>
								</Link>
						</Flex>
					</Flex>
				</Flex>
           </Flex>
        </Box>)
}
