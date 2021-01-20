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

    return( 
        <Box>
          	<Konami code={[71,71,87,80]} action={easterEgg}/>
            
				      <Flex flexDirection="row" flexWrap="wrap">
              <Flex w="100%" backgroundColor="white" marginTop="3%" flexDirection="column" flexWrap="wrap" marginLeft="5%"  marginRight="5%" rounded="lg" w="100%" color="white">
              {/* <ReactPageScroller containerWidth={inW * 0.4} containerHeight={inH * 0.5}> */}
                  <Flex justifyContent="center"  flexDirection="column" flexWrap="wrap">
                		<Text textAlign="center" marginTop="auto" marginBottom="50px" wordBreak="break-word" fontFamily="llpixel" textColor="#009d60" fontSize="calc(1em + 10vmin)">Hack TUES&nbsp;<span style={{display:"inline-block", color:"#105231"}}>GG</span></Text>
				    		    <Flex flexDirection="row" flexWrap="wrap">
                      <Button _hover={{background:"#105231"}} border="0" w="50%" textDecoration="none" fontStyle="Rubik" leftIcon={<MdPlace/>} colorScheme="#105231" variant="outline"><Link textDecoration="none" isExternal href="https://goo.gl/maps/24QCr5RqiSuG3jGC8"><a style={{textDecoration:"none"}}>Sofia Tech Park</a></Link></Button>	
				    		      <Button _hover={{background:"#105231"}} border="0" w="50%" textDecoration="none" fontStyle="Rubik" leftIcon={<AiOutlineCalendar/>} colorScheme="#105231" variant="outline"><Link textDecoration="none" href="/schedule"><a style={{textDecoration:"none"}}>08-11.03.2021</a></Link></Button>	
				    	      </Flex>
                    <Clock deadline="March, 11, 2021" />
                  </Flex>
				    	    {/* <Flex w="50%"> */}
                  {/* <Image src="/робот.png" height={1600} width={2140}></Image> */}
                  </Flex>
                  
            <Flex marginLeft="5%"  marginRight="5%" w="100%" height="100vh" alignItems="center" backgroundColor="white" flexDirection="column" flexWrap="wrap">
				    		      <Text fontFamily="Rubik" fontSize="20px" border="0" textDecoration="none" fontStyle="Rubik" colorScheme="#105231" variant="outline">Alpha Sponsors</Text>			
                      <Flex justifyContent="center" alignItems="center" flexDirection="row" flexWrap="wrap">
                        <Box width={"395px"} h={"300px"}>
                      	  <Image maxH="100%" maxW="100%" title="TelebidPro" src="/Logos/Alpha - TelebidPro/Telebid Pro light.svg"></Image>
                        </Box>
					              <Box width={"395px"} h={"300px"}>
                      	  <Image maxH="100%" maxW="100%" title="SAP" src="/Logos/Alpha - SAP/SAP_grad_R_pref.png"></Image>
                        </Box>
                        <Box width={"395px"} h={"300px"}>
                      	  <Image maxH="100%" maxW="100%" title="TelebidPro" src="/Logos/Alpha - Experian/Experian BM TM RGBsm.png"></Image>
                        </Box>
					              <Box width={"395px"} h={"300px"}>
                      	  <Image position="relative" top="0px" left="0px" maxH="100%" maxW="100%" title="SAP" src="/Logos/Alpha - VMWare/VMW_09Q3_LOGO_Corp_Gray.png"></Image>
                        </Box>
                        {/* <Image quality={100} layout="fill" title="SAP" src="/Logos/Alpha - SAP/SAP_grad_R_pref.png"></Image> */}
                      </Flex>
           </Flex>
          {/* <FirstComponent />
          <SecondComponent /> */}
        
            {/* </ReactPageScroller> */}
            </Flex>
        </Box>)
}
