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
        <Box h="100vh" alignItems="center">
          	<Konami code={[71,71,87,80]} action={easterEgg}/>
            
			<Flex h="100vh" justifyContent="center" alignItems="center" marginLeft={["20px", "20px", "200px", "250px"]} marginRight={["20px", "20px", "200px", "250px"]} alignItems="center" paddingTop="20px" paddingBottom="20px" flexDirection="column" overflow="hidden" flexWrap="wrap">
            	<Flex padding="15px" backgroundColor="white"  marginBottom="20px" flexDirection="column" flexWrap="wrap" rounded="lg" w="100%" color="white">
                	<Text textAlign="center" marginTop="auto" marginBottom="0px" wordBreak="break-word" fontFamily="llpixel" textColor="#009d60" fontSize="calc(1em + 10vmin)">Hack TUES&nbsp;<span style={{display:"inline-block", color:"#105231"}}>GG</span></Text>
                    <Clock deadline="March, 11, 2021" />
                    <Flex justifyContent="space-around" flexDirection="row" flexWrap="wrap">
                      	<Button _hover={{background:"#009d60"}} border="0" textDecoration="none" fontStyle="Rubik" leftIcon={<MdPlace/>} colorScheme="#105231" variant="outline"><Link textDecoration="none" isExternal href="https://www.youtube.com/channel/UCQcbYkAKPEgfjzvwb2sUWSQ"><a style={{textDecoration:"none", fontFamily:"Rubik"}}>Онлайн</a></Link></Button>	
				    	<Button _hover={{background:"#009d60"}} border="0" textDecoration="none" fontStyle="Rubik" leftIcon={<AiOutlineCalendar/>} colorScheme="#105231" variant="outline"><Link textDecoration="none" href="https://www.youtube.com/channel/UCQcbYkAKPEgfjzvwb2sUWSQ"><a style={{textDecoration:"none", fontFamily:"Rubik"}}>11-14.03.2021</a></Link></Button>	
				    </Flex>
                </Flex>

           			
				{/* <Flex w="100%" rounded="lg" justifyContent="center" alignItems="center" padding="15px" background="#fff" flexDirection="column" flexWrap="wrap" justifyContent="center" alignItems="center"> */}
					{/* <Flex justifyContent="center" alignItems="center" flexDirection="column" flexWrap="wrap"> */}
						{/* <Text marginBottom="5px" fontFamily="Rubik" fontSize="1.4rem" textAlign="center">Alpha спонсори</Text> */}
						{/* <Flex wrap="wrap" rounded="lg" justifyContent="center" alignItems="center" background="#fff" justifyContent="center">		  			 */}
								
								
								{/* <Link marginBottom="-1rem" marginLeft="-1rem" isExternal href="https://www.chaosgroup.com/careers" transform="translate(0px, 10px)" display="flex" justifyContent="center" alignItems="center" h="100%"> */}
									{/* <Box marginBottom={["0rem","0rem","0rem","1rem"]}  marginLeft={["0rem","0rem","0rem","1rem"]}  width="calc(900px * 1 /3)" background="#fff" h="125px"> */}
										{/* <Image transform="scale(1)" display="block" width="100%" h="100%" objectFit="contain" title="Chaos Group" src="/FinalLogos/Chaos_Group_logo_b.svg"></Image> */}
									{/* </Box> */}
								{/* </Link> */}
								{/* <Link marginBottom="-1rem" marginLeft="-1rem" isExternal href="https://www.experian.bg/" display="flex" justifyContent="center" alignItems="center" h="100%"> */}
									{/* <Box transform={{sm:"translate(0px, -1px)", md: "translate(0px, 5px)", lg:"translate(40px, 5px)", xl:"translate(40px, 5px)"}} background="#fff" marginBottom={["0rem","0rem","0rem","1rem"]}  marginLeft={["0rem","0rem","0rem","1rem"]}  width="calc(900px * 1 /3)" h="125px"> */}
										{/* <Image transform="scale(0.9)" display="block" width="100%" h="100%" objectFit="contain" title="Experian" src="/FinalLogos/Experian BM TM CMYK N.svg"></Image> */}
									{/* </Box> */}
								{/* </Link> */}
								{/* //  */}
{/* //  */}
								{/* <Link marginBottom="-1rem" marginLeft="-1rem" isExternal href="https://www.sap.com/bulgaria/index.html" display="flex" justifyContent="center" alignItems="center" h="100%" > */}
									{/* <Box transform={{sm:"translate(0px, 5px)",md:"translate(25px, 5px)",lg:"translate(25px, 5px)",xl:"translate(25px, 5px)"}} marginBottom={["0rem","0rem","0rem","1rem"]}  marginLeft={["0rem","0rem","0rem","1rem"]}  width="calc(900px * 1 /3)" h="125px"> */}
										{/* <Image transform="scale(0.5)" display="block" width="100%" h="100%" objectFit="contain" title="SAP" src="/Logos/Alpha - SAP/SAP_grad_R_pref.png"></Image> */}
									{/* </Box> */}
								{/* </Link> */}
								{/*  */}
								{/* <Link marginBottom="-1rem" marginLeft="-1rem" isExternal href="http://telebid-pro.com/" display="flex" display="flex" justifyContent="center" alignItems="center" h="100%"> */}
									{/* <Box transform="translate(0px, 1px)" marginBottom={["0rem","0rem","0rem","1rem"]}  marginLeft={["0rem","0rem","0rem","1rem"]}  width="calc(900px * 1 /3)" h="125px"> */}
										{/* <Image  transform="scale(0.70)" display="block" width="300px" width="100%" h="100%" objectFit="contain" title="TelebidPro" src="/Logos/Alpha - TelebidPro/Telebid Pro light.svg"></Image> */}
									{/* </Box> */}
								{/* </Link> */}
{/* //  */}
								

								{/* <Link isExternal href="https://www.facebook.com/vmwarebg/" display="flex" justifyContent="center" alignItems="center" h="100%" > */}
									{/* <Box background="#fff" transform="translate(0px, 12px)" marginBottom={["0rem","0rem","0rem","1rem"]}  marginLeft={["0rem","0rem","0rem","1rem"]}  width="calc(900px * 1 /3)" h="125px"> */}
										{/* <Image transform="scale(0.8)" display="block" width="100%" h="100%" objectFit="contain" title="VMWare" src='/FinalLogos/VMW_09Q3_LOGO_Corp_Gray.svg'></Image> */}
									{/* </Box> */}
								{/* </Link> */}
						{/* </Flex> */}
					{/* // </Flex> */}
					{/* // <Flex justifyContent="center" alignItems="center" flexDirection="column" flexWrap="wrap"> */}
						{/* <Text marginBottom="5px" fontFamily="Rubik" fontSize="1.4rem" textAlign="center">Beta спонсори</Text> */}
						{/* <Flex rounded="lg" justifyContent="center" alignItems="center" background="#fff" flexDirection="row" flexWrap="wrap" >		  	 */}
{/*  */}
								{/* <Link isExternal href="https://www.nemetschek.bg/" display="flex" justifyContent="center" alignItems="center" h="100%"> */}
									{/* <Box transform="translate(0px, 5px)" background="#fff" marginBottom={["0rem","0rem","0rem","1rem"]} marginLeft={["0rem","0rem","0rem","1rem"]} width="calc(900px * 1 /3)" h="125px"> */}
										{/* <Image transform="scale(1.2)" display="block" width="100%" h="100%" objectFit="contain" title="Nemetschek" src="/Logos/Beta - Nemetschek/Nemetschek-logo 2.png"></Image> */}
									{/* </Box> */}
								{/* </Link> */}
{/* //  */}
								{/* <Link isExternal href="http://www.a1.bg/" display="flex" justifyContent="center" alignItems="center" h="100%"> */}
									{/* <Box transform={{sm:"translate(0px, 0px)",md:"translate(0px, 0px)",lg:"translate(0px, 0px)",xl:"translate(0px, 8px)"}} marginBottom={["0rem","0rem","0rem","1rem"]} marginLeft={["0rem","0rem","0rem","1rem"]} width="calc(900px * 1 /3)" h="125px"> */}
										{/* <Image transform="scale(0.5)" display="block" width="100%" h="100%" objectFit="contain" title="A1" src="/Logos/Beta - A1/A1_01_08RED_3_L_1.png"></Image> */}
									{/* </Box> */}
								{/* </Link> */}

								{/* <Link isExternal href="https://www.facebook.com/StrypesBulgaria" display="flex" justifyContent="center" alignItems="center" h="100%"> */}
									{/* <Box transform="translate(0px, 16px)" marginBottom={["0rem","0rem","0rem","1rem"]} marginLeft={["0rem","0rem","0rem","1rem"]} width="calc(900px * 1 /3)" h="125px"> */}
										{/* <Image transform="scale(0.75)" display="block" width="100%" h="100%" objectFit="contain" title="Strypes" src="/Logos/Beta - Strypes/strypes-logo-transparent.png"></Image> */}
									{/* </Box> */}
								{/* </Link> */}
								{/*  */}
						{/* </Flex> */}
					{/* // </Flex> */}
					{/* // <Flex justifyContent="center" alignItems="center" flexDirection="column" flexWrap="wrap"> */}
						{/* <Text marginBottom="5px" fontFamily="Rubik" fontSize="1.4rem" textAlign="center">Gamma спонсори</Text> */}
						{/* <Flex rounded="lg" justifyContent="center" alignItems="center" padding="15px" background="#fff" flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center" > */}
								{/*  */}
								{/* <Link isExternal href="https://asteasolutions.com/" display="flex" justifyContent="center" alignItems="center" h="100%"> */}
									{/* <Box transform={{sm:"translate(0px, 5px)",md:"translate(0px, -10px)",lg:"translate(0px, 3px)",xl:"translate(25px, 3px)"}} marginBottom={["0rem","0rem","0rem","1rem"]} marginLeft={["0rem","0rem","0rem","1rem"]} width="calc(900px * 1 /3)" h="100px"> */}
										{/* <Image transform="scale(0.85)" display="block" width="100%" h="100%" objectFit="contain" title="Astea Solutions" src="/Logos/Gamma - Astea Solutions/astea_logo.svg"></Image> */}
									{/* </Box> */}
								{/* </Link> */}
{/* //  */}
								{/* <Link isExternal href="http://web.cpdbg.com/" display="flex" justifyContent="center" alignItems="center" h="100%"> */}
							  		{/* <Box transform={["translate(0px, 0px)","translate(0px, 0px)","translate(0px, 12px)","translate(0px, 12px)"]} marginBottom={["0rem","0rem","0rem","1rem"]} marginLeft={["0rem","0rem","0rem","1rem"]} width="calc(900px * 1 /3)" h="150px" h="100px"> */}
										{/* <Image transform="scale(0.67)" display="block" width="100%" h="100%" objectFit="contain" title="CPD" src="/Logos/Gamma - CPD/CPD_a_DaisyTechCompany.png"></Image> */}
									{/* </Box> */}
								{/* </Link> */}
								{/* <Link isExternal href="https://devrix.com/" display="flex" justifyContent="center" alignItems="center" h="100%"> */}
									{/* <Box transform={{sm:"translate(0px, 0px)",md:"translate(0px, 0px)",lg:"translate(-8px, 8px)",xl:"translate(-8px, 8px)"}} marginBottom={["0rem","0rem","0rem","1rem"]} marginLeft={["0rem","0rem","0rem","1rem"]} width="calc(900px * 1 /3)" h="100px"> */}
										{/* <Image transform="scale(0.7)" display="block" width="100%" h="100%" objectFit="contain" title="DevriX" src="/FinalLogos/DevriX_Logo.svg"></Image> */}
									{/* </Box> */}
								{/* </Link> */}
								{/*  */}
								{/* <Link isExternal href="https://bosch.io/about-us/locations/sofia/" display="flex" justifyContent="center" alignItems="center" h="100%"> */}
									{/* <Box transform={{sm:"translate(-10px, 2px)",md:"translate(-10px, 2px)",lg:"translate(-25px, 10px)",xl:"translate(-25px, 10px)"}} marginBottom={["0rem","0rem","0rem","1rem"]} marginLeft={["0rem","0rem","0rem","1rem"]} width="calc(900px * 1 /3)" h="100px"> */}
										{/* <Image transform="scale(0.8)" display="block" width="100%" h="100%" objectFit="contain" title="Bosch" src="/Logos/Gamma - Bosch/BOSCH_ENGLISH_RGB.svg"></Image> */}
									{/* </Box> */}
								{/* </Link> */}
								
								{/* <Link isExternal href="https://careers.paysafe.com/locations/sofia/" display="flex" justifyContent="center" alignItems="center" h="100%"> */}
									{/* <Box transform={{sm:"translate(0px, 0px)",md:"translate(0px, 0px)",lg:"translate(-14px, 4px)",xl:"translate(-14px, 4px)"}} marginBottom={["0rem","0rem","0rem","1rem"]} marginLeft={["0rem","0rem","0rem","1rem"]} width="calc(900px * 1 /3)" h="100px"> */}
										{/* <Image transform="scale(0.7)"  display="block" width="100%" h="100%" objectFit="contain" title="Paysafe" src="/FinalLogos/Logo Paysafe_1.svg"></Image> */}
									{/* </Box> */}
								{/* </Link> */}
{/*  */}
								{/* <Link isExternal href="https://www.dopamine.bg/" display="flex" justifyContent="center" alignItems="center" h="100%"> */}
									{/* <Box transform={{sm:"translate(0px, 0px)",md:"translate(0px, 0px)",lg:"translate(-5px, 4px)",xl:"translate(-5px, 4px)"}} marginBottom={["0rem","0rem","0rem","1rem"]} marginLeft={["0rem","0rem","0rem","1rem"]} width="calc(900px * 1 /3)" h="100px"> */}
										{/* <Image transform="scale(0.96)" display="block" width="100%" h="100%" objectFit="contain" title="Dopamine" src="/Logos/Gamma - Dopamine/Копие на DOPAMINE logo Black.png"></Image> */}
									{/* </Box> */}
								{/* </Link> */}

						{/* </Flex> */}
					{/* </Flex> */}
{/*  */}
					{/* <Flex justifyContent="center" alignItems="center" flexDirection="column" flexWrap="wrap"> */}
						{/* <Text marginBottom="5px" fontFamily="Rubik" fontSize="1.4rem" textAlign="center">Партньори</Text> */}
						{/* <Flex rounded="lg" justifyContent="center" alignItems="center" padding="15px" background="#fff" flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center" > */}
								{/*  */}
								{/* <Link isExternal href="https://aztues.bg/" display="flex" justifyContent="center" alignItems="center" h="100%"> */}
									{/* <Box transform={{sm:"translate(0px, 5px)",md:"translate(0px, -10px)",lg:"translate(0px, 3px)",xl:"translate(25px, 3px)"}} marginBottom={["0rem","0rem","0rem","1rem"]} marginLeft={["0rem","0rem","0rem","1rem"]} width="calc(900px * 1 /3)" h="150px"> */}
										{/* <Image transform="scale(0.85)" display="block" width="100%" h="100%" objectFit="contain" title="AZTUES" src="/FinalLogos/AZ TUES - Logo BG (color - cmyk).svg"></Image> */}
									{/* </Box> */}
								{/* </Link> */}
{/*  */}
								{/* <Link isExternal href="https://www.comet.bg/" display="flex" justifyContent="center" alignItems="center" h="100%"> */}
							  		{/* <Box transform={["translate(0px, 0px)","translate(0px, 0px)","translate(0px, -4px)","translate(0px, -4px)"]} marginBottom={["0rem","0rem","0rem","1rem"]} marginLeft={["0rem","0rem","0rem","1rem"]} width="calc(900px * 1 /3)" h="150px" h="100px"> */}
										{/* <Image transform="scale(0.60)" display="block" width="100%" h="100%" objectFit="contain" title="Comet" src="/FinalLogos/Comet_new_logo.svg"></Image> */}
									{/* </Box> */}
								{/* </Link> */}
								{/* <Link isExternal href="https://devstyler.io/" display="flex" justifyContent="center" alignItems="center" h="100%"> */}
									{/* <Box transform={{sm:"translate(0px, 0px)",md:"translate(0px, 0px)",lg:"translate(-8px, 8px)",xl:"translate(-8px, 8px)"}} marginBottom={["0rem","0rem","0rem","1rem"]} marginLeft={["0rem","0rem","0rem","1rem"]} width="calc(900px * 1 /3)" h="150px"> */}
										{/* <Image transform="scale(0.65)" display="block" width="100%" h="100%" objectFit="contain" title="DevStyler" src="/FinalLogos/devstyler_logo.svg"></Image> */}
									{/* </Box> */}
								{/* </Link> */}
								{/*  */}
								{/* <Link isExternal href="https://www.dominos.bg/" display="flex" justifyContent="center" alignItems="center" h="100%"> */}
									{/* <Box transform={{sm:"translate(-10px, 2px)",md:"translate(-10px, 2px)",lg:"translate(0px, -10px)",xl:"translate(0px, -10px)"}} marginBottom={["0rem","0rem","0rem","1rem"]} marginLeft={["0rem","0rem","0rem","1rem"]} width="calc(900px * 1 /3)" h="150px"> */}
										{/* <Image transform="scale(0.85)" display="block" width="100%" h="100%" objectFit="contain" title="Dominos" src="/FinalLogos/Dominos.svg"></Image> */}
									{/* </Box> */}
								{/* </Link> */}
								
								{/* <Flex justifyContent="center" alignItems="center" flexDirection="row" flexWrap="wrap" width="100%"> */}
									{/* <Link isExternal href="https://galacticbanitsa.com/" display="flex" justifyContent="center" alignItems="center" h="100%"> */}
										{/* <Box transform={{sm:"translate(0px, 0px)",md:"translate(0px, 0px)",lg:"translate(0px, 5px)",xl:"translate(0px, 5px)"}} marginBottom={["0rem","0rem","0rem","1rem"]} marginLeft={["0rem","0rem","0rem","1rem"]} width="calc(900px * 1 /3)" h="150px"> */}
											{/* <Image transform="scale(0.85)" display="block" width="100%" h="100%" objectFit="contain" title="GalacticBanitsa" src="/Logos/Partners/Galactic Banitsa/98.galacticbanitsa.svg"></Image> */}
										{/* </Box> */}
									{/* </Link> */}
{/*  */}
									{/* <Link isExternal href="https://www.roobar.com/bg" display="flex" justifyContent="center" alignItems="center" h="100%"> */}
										{/* <Box transform={{sm:"translate(0px, 0px)",md:"translate(0px, 0px)",lg:"translate(0px, 10px)",xl:"translate(0px, 10px)"}} marginBottom={["0rem","0rem","0rem","1rem"]} marginLeft={["0rem","0rem","0rem","1rem"]} width="calc(900px * 1 /3)" h="150px"> */}
											{/* <Image transform="scale(0.6)" display="block" width="100%" h="100%" objectFit="contain" title="Roobar" src="/Logos/Partners/Roobar/roobar.svg"></Image> */}
										{/* </Box> */}
									{/* </Link> */}
{/*  */}
									{/* <Link isExternal href="https://elsys-bg.org/" display="flex" justifyContent="center" alignItems="center" h="100%"> */}
										{/* <Box transform={{sm:"translate(0px, 0px)",md:"translate(0px, 0px)",lg:"translate(0px, 5px)",xl:"translate(0px, 5px)"}} marginBottom={["0rem","0rem","0rem","1rem"]} marginLeft={["0rem","0rem","0rem","1rem"]} width="calc(900px * 1 /3)" h="150px"> */}
											{/* <Image transform="scale(0.45)" display="block" width="100%" h="100%" objectFit="contain" title="ELSYS" src="/Logos/Partners/ELSYS/ELSYS-30-Logo-Colour-Dark.svg"></Image> */}
										{/* </Box> */}
									{/* </Link> */}
{/*  */}
									{/* <Link isExternal href="https://www.cloudbalkan.com/" display="flex" justifyContent="center" alignItems="center" h="100%"> */}
										{/* <Box transform={{sm:"translate(0px, 0px)",md:"translate(0px, 0px)",lg:"translate(-5px, 5px)",xl:"translate(-5px, 5px)"}} marginBottom={["0rem","0rem","0rem","1rem"]} marginLeft={["0rem","0rem","0rem","1rem"]} width="calc(900px * 1 /3)" h="150px"> */}
											{/* <Image transform="scale(0.95)" display="block" width="100%" h="100%" objectFit="contain" title="CloudBalkan" src="/Logos/Partners/Cloud Balkan/logo1024.svg"></Image> */}
										{/* </Box> */}
									{/* </Link> */}
{/*  */}
{/*  */}
								{/* </Flex> */}
{/*  */}
								{/* <Link isExternal href="https://www.campusx.company/" display="flex" justifyContent="center" alignItems="center" h="100%"> */}
									{/* <Box transform={{sm:"translate(0px, 0px)",md:"translate(0px, 0px)",lg:"translate(-5px, 5px)",xl:"translate(-5px, 5px)"}} marginBottom={["0rem","0rem","0rem","1rem"]} marginLeft={["0rem","0rem","0rem","1rem"]} width="calc(900px * 1 /4)" h="150px"> */}
										{/* <Image transform="scale(0.9)" display="block" width="100%" h="100%" objectFit="contain" title="CampusX" src="/Logos/Partners/Campus X/Logo_Vertical@2x.png"></Image> */}
									{/* </Box> */}
								{/* </Link> */}
{/*  */}
								{/* <Link isExternal href="https://bulged.net/" display="flex" justifyContent="center" alignItems="center" h="100%"> */}
									{/* <Box transform={{sm:"translate(0px, 0px)",md:"translate(0px, 0px)",lg:"translate(-14px, 4px)",xl:"translate(-14px, 4px)"}} marginBottom={["0rem","0rem","0rem","1rem"]} marginLeft={["0rem","0rem","0rem","1rem"]} width="calc(900px * 1 /4)" h="150px"> */}
										{/* <Image transform="scale(0.65)"  display="block" width="100%" h="100%" objectFit="contain" title="Bulged" src="/Logos/Partners/Bulged/bulged_logo.png"></Image> */}
									{/* </Box> */}
								{/* </Link> */}
										{/* <Image transform="scale(0.65)" display="block" width="100%" h="100%" objectFit="contain" title="Ora" src="/Logos/Partners/Ora/ora-logo.svg"></Image> */}

								{/* <Link isExternal href="https://ora.pm/projects" display="flex" justifyContent="center" alignItems="center" h="100%"> */}
									{/* <Box transform={{sm:"translate(0px, 0px)",md:"translate(0px, 0px)",lg:"translate(-5px, 5px)",xl:"translate(-5px, 5px)"}} marginBottom={["0rem","0rem","0rem","1rem"]} marginLeft={["0rem","0rem","0rem","1rem"]} width="calc(900px * 1 /4)" h="150px"> */}
									{/* </Box> */}
								{/* </Link> */}
								{/* <Link isExternal href="https://initlab.org/" display="flex" justifyContent="center" alignItems="center" h="100%"> */}
									{/* <Box transform={{sm:"translate(0px, 0px)",md:"translate(0px, 0px)",lg:"translate(-5px, 5px)",xl:"translate(-5px, 5px)"}} marginBottom={["0rem","0rem","0rem","1rem"]} marginLeft={["0rem","0rem","0rem","1rem"]} width="calc(900px * 1 / 4)" h="150px"> */}
									{/* </Box> */}
										{/* <Image transform="scale(0.75)" display="block" width="100%" h="100%" objectFit="contain" title="initLab" src="/Logos/Partners/initLab/initlab-01.svg"></Image> */}
								{/* </Link> */}
{/*  */}
						{/* </Flex> */}
					{/* </Flex> */}


				{/* </Flex> */}
           </Flex>
        </Box>)
}
