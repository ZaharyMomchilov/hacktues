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
            
				      <Flex paddingTop="20px" paddingBottom="20px" flexDirection="row" flexWrap="wrap">
              <Flex padding="15px" w="100%" backgroundColor="white" marginTop="3%"  marginBottom="20px" flexDirection="column" flexWrap="wrap" marginLeft="5%"  marginRight="5%" rounded="lg" w="100%" color="white">
              {/* <ReactPageScroller containerWidth={inW * 0.4} containerHeight={inH * 0.5}> */}
                  {/* <Flex justifyContent="center"  flexDirection="column" flexWrap="wrap"> */}
                		<Text textAlign="center" marginTop="auto" marginBottom="0px" wordBreak="break-word" fontFamily="llpixel" textColor="#009d60" fontSize="calc(1em + 10vmin)">Hack TUES&nbsp;<span style={{display:"inline-block", color:"#105231"}}>GG</span></Text>
                    <Clock deadline="March, 11, 2021" />
                    <Flex justifyContent="space-around" flexDirection="row" flexWrap="wrap">
                      <Button _hover={{background:"#105231"}} border="0" textDecoration="none" fontStyle="Rubik" leftIcon={<MdPlace/>} colorScheme="#105231" variant="outline"><Link textDecoration="none" isExternal href="https://goo.gl/maps/24QCr5RqiSuG3jGC8"><a style={{textDecoration:"none"}}>Sofia Tech Park</a></Link></Button>	
				    		      <Button _hover={{background:"#105231"}} border="0" textDecoration="none" fontStyle="Rubik" leftIcon={<AiOutlineCalendar/>} colorScheme="#105231" variant="outline"><Link textDecoration="none" href="/schedule"><a style={{textDecoration:"none"}}>08-11.03.2021</a></Link></Button>	
				    	      </Flex>
                  </Flex>
				    	    {/* <Flex w="50%"> */}
                  {/* <Image src="/робот.png" height={1600} width={2140}></Image> */}
                  {/* </Flex> */}
                  
            <Flex padding="15px" backgroundColor="white" marginBottom="20px" marginTop="20px" rounded="lg" marginLeft="5%"  marginRight="5%" w="100%" alignItems="center"  flexDirection="column" flexWrap="wrap">
				    		      <Center marginBottom="20px" w="100%" backgroundColor="white" rounded="lg" padding="15px" alignItems="center" flexDirection="column" flexWrap="wrap">
                        <Text fontFamily="Rubik" fontSize="30px" border="0" textDecoration="none" fontStyle="Rubik" colorScheme="#105231" variant="outline">Alpha Sponsors</Text>			
                        <Center justifyContent="center" alignItems="center" flexDirection="row" flexWrap="wrap">
                          <Center width={["250px","295px","295px"]} h={"150px"}>
                        	  <Image objectFit="scale-down" width="100%" height="100%" title="Chaos Group" src="/Logos/Alpha - Chaos Group/Chaos_Group_logo_b.png"></Image>
                          </Center>
                          <Center marginRight="30px" width={["250px","295px","295px"]} h={"150px"}>
                        	  <Image objectFit="scale-down" width="100%" height="100%" title="Experian" src="/Logos/Alpha - Experian/Experian BM TM RGBsm.png"></Image>
                          </Center>
                          <Center width={["250px","295px","295px"]} h={"150px"}>
                        	  <Image objectFit="scale-down" width="100%" height="100%" title="TelebidPro" src="/Logos/Alpha - TelebidPro/Telebid Pro light.svg"></Image>
                          </Center>
					                <Center width={["250px","295px","295px"]} h={"150px"}>
                              <Image transform="scale(0.6)" objectFit="scale-down" width="100%" height="100%" title="SAP" src="/Logos/Alpha - SAP/SAP_grad_R_pref.png"></Image>
                        	  </Center>
                        
					                <Center marginRight="30px" width={["250px","295px","295px"]} h={"150px"}>
                        	  <Image objectFit="scale-down" width="100%" height="100%" title="VMWare" src="/Logos/Alpha - VMWare/VMW_09Q3_LOGO_Corp_Gray.png"></Image>
                          </Center>
                          {/* <Image quality={100} layout="fill" title="SAP" src="/Logos/Alpha - SAP/SAP_grad_R_pref.png"></Image> */}
                        </Center>
                      </Center>

                      <Flex marginTop="20px" marginBottom="20px" w="100%" backgroundColor="white" rounded="lg" padding="15px" alignItems="center" flexDirection="column" flexWrap="wrap">
                        <Text fontFamily="Rubik" fontSize="30px" border="0" textDecoration="none" fontStyle="Rubik" colorScheme="#105231" variant="outline">Beta Sponsors</Text>			
                        <Center justifyContent="center" alignItems="center" flexDirection="row" flexWrap="wrap">
                          <Center  width={["250px","295px","295px"]} h={"150px"}>
                        	  <Image transform="scale(1.25)" objectFit="scale-down" display="block" width="100%" height="100%" title="A1" src="/Logos/Beta - A1/A1_01_08RED_3_L.png"></Image>
                          </Center>
					                <Center width={["250px","295px","295px"]} h={"150px"}>
                        	  <Image objectFit="scale-down" display="block" width="100%" height="100%" title="Nemetschek" src="/Logos/Beta - Nemetschek/Nemetschek-logo 2.png"></Image>
                          </Center>
                          <Center  width={["250px","295px","295px"]} h={"150px"}>
                        	  <Image objectFit="scale-down" display="block" width="100%" height="100%" title="Strypes" src="/Logos/Beta - Nemetschek/Nemetschek-logo 2.png"></Image>
                          </Center>
                        </Center>
                      </Flex>

                      <Flex marginTop="20px" marginBottom="30px" w="100%" backgroundColor="white" rounded="lg" padding="15px" alignItems="center" flexDirection="column" flexWrap="wrap">
                        <Text fontFamily="Rubik" fontSize="30px" border="0" textDecoration="none" fontStyle="Rubik" colorScheme="#105231" variant="outline">Gamma Sponsors</Text>			
                        <Center justifyContent="center" alignItems="center" flexDirection="row" flexWrap="wrap">
                          <Center marginRight="40px" width={["250px","295px","295px"]} h={"150px"}>
                        	  <Image transform="scale(0.95)" objectFit="scale-down" display="block" width="100%" height="100%" title="Astea Solutions" src="/Logos/Gamma - Astea Solutions/astea_logo.svg"></Image>
                          </Center>
					                <Center marginRight="40px" width={["250px","295px","295px"]} h={"150px"}>
                        	  <Image objectPosition="0px 40px" objectFit="scale-down" display="block" width="100%" height="100%" title="Bosch" src="/Logos/Gamma - Bosch/BOSCH_ENGLISH_RGB.svg"></Image>
                          </Center>
                          <Center marginRight="40px" width={["250px","295px","295px"]} h={"150px"}>
                        	  <Image objectPosition="0px 40px" objectFit="scale-down" display="block" width="100%" height="100%" title="CPD" src="/Logos/Gamma - CPD/CPD_a_DaisyTechCompany.png"></Image>
                          </Center>
                          <Center marginRight="40px" width={["250px","295px","295px"]} h={"150px"}>
                        	  <Image objectFit="scale-down" display="block" width="100%" height="100%" title="DevriX" src="/Logos/Gamma - DevriX/devrix-logo-small.png"></Image>
                          </Center>
                          <Center width={["250px","295px","295px"]} h={"150px"}>
                        	  <Image objectPosition="0px 55px" objectFit="scale-down" display="block" width="100%" height="100%" title="Dopamine" src="/Logos/Gamma - Dopamine/Копие на Dopamine - image001.png"></Image>
                          </Center>
                          <Center  width={["250px","295px","295px"]} h={"300px"}>
                        	  <Image objectPosition="0px 120px" objectFit="scale-down" display="block" width="100%" height="100%" title="Paysafe" src="/Logos/Gamma - Paysafe/PAYSAFE_logo.png"></Image>
                          </Center>
                        </Center>
                      </Flex>
           </Flex>
            </Flex>
        </Box>)
}
