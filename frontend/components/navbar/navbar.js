import React, {useEffect} from "react";
import { Box, Input, InputGroup, InputRightElement, Select, InputLeftElement, Switch, Heading, Flex, Button, useToast, Text, Icon, Link, IconButton, useControllableState} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider, MenuOptionGroup, MenuItemOption } from "@chakra-ui/react";
import { Modal, ModalOverlay,ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import { Slide } from "@chakra-ui/react"
import { Formik, Field } from 'formik';
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, CloseButton  } from "@chakra-ui/react";
import {PhoneIcon, ViewIcon, ViewOffIcon, CloseIcon} from '@chakra-ui/icons'
import Cookies from 'universal-cookie'

import * as Yup from 'yup';

import Router from 'next/router'
import {Link as NextLink} from 'next/link'
import { useRouter } from "next/router";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react"
const cookies = new Cookies();
const axios = require('axios');

import styled from '@emotion/styled'

import { Sidebar } from './sidebar'

import { motion, useSpring } from "framer-motion";
import { FiInstagram, FiFacebook, FiYoutube, FiMail } from 'react-icons/fi';

const MenuItems = ({ children }) => (
	<Button textDecoration="none" _active={{bg:"transparent"}}  _hover={{backgroundColor:"#85c59b", textDecoration:"none"}} background="none" _focus={{outline:"none"}} fontFamily="Rubik" color="white" border="0px" borderWidth="0px">
    {children}
  </Button>
);

function equalTo(ref, msg) {
	return Yup.mixed().test({
	  name: 'equalTo',
	  exclusive: false,
	  message: msg || '${path} must be the same as ${reference}',
	  params: {
		reference: ref.path,
	  },
	  test: function(value) {
		return value === this.resolve(ref);
	  },
	});
  }
Yup.addMethod(Yup.string, 'equalTo', equalTo);


const Navbar = (props) => {

	const { isOpen : isOpenx , onToggle : onTogglex} = useDisclosure();

	// if(localStorage.getItem == undefined){
	// 	onTogglex()
	// }
	// else if(localStorage.getItem == "true")
	// localStorage.setItem

  	const [show, setShow] = React.useState(false);
  	const handleToggle = () => setShow(!show);

  	const { isOpen, onOpen, onClose } = useDisclosure();
  	const firstField = React.useRef();
  	const btnRef = React.useRef();

	const { isMobile } = useDeviceDetect();
	
	var login;
	var logout;
	var team;

	var router = useRouter()

	function handleChildClick(event) {
		login = <ProfileButton marginLeft={["none","none","none","auto"]}/>
		logout = <LogoutButton/>
		Router.reload(window.location.pathname);
   }

   	if(props.loggedin == 0 && props.inteam == "false"){
		team = <MenuItems display="none"><Link display="none" href="/maketeam/"><a>Създай отбор</a></Link></MenuItems>
	   }
   	else if(props.loggedin == 1 && props.inteam == "false"){
		   team = <MenuItems><Link href="/maketeam/"><a>Създай отбор</a></Link></MenuItems>
	}
	else{
		team = <MenuItems><Link href={`/teams/${encodeURIComponent(props.inteam)}/`}><a>Моят отбор</a></Link></MenuItems>
	}

	if(props.loggedin && !isMobile){
		// login = <ProfileButton/>
		// logout = <LogoutButton click={onClose}/>
		login = "profile"
		logout = "logout"
	}
	else if(props.loggedin && isMobile){
		login = <ProfileButton click={onClose}/>
		logout = <LogoutButton click={onClose}/>	
	}
	else if(!isMobile && cookies.get('discord_auth') == undefined){
		login = 
			<>
				<MenuItems><Link href="/login"><a onClick={onClose}>Вход</a></Link></MenuItems>
				<MenuItems marginLeft={["none","none","none","auto"]}><Link _hover={{textDecoration:"none"}} onClick={() => {onClose(); router.push('/')}} href="/registration/first_step"><a textDecoration="none" onClick={() => {onClose(); router.push('/')}}>Регистрация</a></Link></MenuItems>
			</>;
			console.log("xd");
	}
	else if(isMobile){
		login = 
			<>
				<MenuItems><Link href="/login"><a onClick={onClose}>Вход</a></Link></MenuItems>
				<MenuItems marginLeft={["none","none","none","auto"]}><Link _hover={{textDecoration:"none"}} onClick={() => {onClose(); router.push('/')}} href="/registration/first_step"><a textDecoration="none" onClick={() => {onClose(); router.push('/')}}>Регистрация</a></Link></MenuItems>
			</>;
	}
	else{
		login = 
			<>
				<MenuItems><Link  _hover={{textDecoration:"none"}} href="/login"><a onClick={onClose}>Вход</a></Link></MenuItems>
				{/* <Login logIn={handleChildClick} /> */}
				<MenuItems marginLeft={["none","none","none","auto"]}><Link _hover={{textDecoration:"none"}} href="/registration/first_step"><a textDecoration="none">Регистрация</a></Link></MenuItems>
			</>;
	}
//    }, [router, isMobile, login, logout, props.loggedin])
	
  	return (
		<Sidebar login={login} logout={logout} team={team}/>
	// <Box>
    /* <Flex as="nav" align="center" justify="space-between" padding="10px" bg="#a5cf9f" color="white"{...props}>
      	<Flex width="auto" align="center" ml={5} mr={5}>
       		<Link textDecoration="none" href="/">
          		<a textDecoration="none">
            		<Heading textDecoration="none" fontFamily="llpixel" color="black" fontSize="1.25rem" fontWeight="200" size="lg">
              			Hack <span style={{"color":"green"}}>TUES 7</span>
            		</Heading>
          		</a>
        	</Link>
      	</Flex>

      <Flex flexWrap="wrap" display={{base:"none", sm:"none", md:"none", lg: "flex" }} alignItems="center" flexGrow={1}>
        <MenuItems><Link href="/schedule" ><a>Програма</a></Link></MenuItems>
        <MenuItems><Link href="/regulation"><a>Регламент</a></Link></MenuItems>
		<MenuItems><Link href="/archive"><a>Архив</a></Link></MenuItems>
        	<Menu>
        		<MenuButton cursor="pointer" _hover={{bg:"transparent"}}  _active={{background:"#a5cf9f"}} as={Button} color="white" background="transparent" _focus={{outline: "none", bg:"transparent"}} border="0px" borderWidth="0px" rightIcon={<ChevronDownIcon/>}>
    				Декларации
  				</MenuButton>
  				<MenuList p="0">
    				<a href="http://hacktues.pythonanywhere.com/static/frontend/Declaracia_pylnoletni%20uchenici_v.2.docx"><MenuItem fontSize="1rem" color="white" backgroundColor="#a5cf9f"   _focus={{outline: "none"}} border="0px" borderWidth="0px">Декларация за пълнолетни(docx)</MenuItem></a>
    				<a href="https://hacktues.pythonanywhere.com/static/frontend/Declaracia_pylnoletni%20uchenici_v.2.pdf"><MenuItem fontSize="1rem" color="white" backgroundColor="#a5cf9f"   _focus={{outline: "none"}} border="0px" borderWidth="0px">Декларация за пълнолетни(pdf)</MenuItem></a>
    				<a href="https://hacktues.pythonanywhere.com/static/frontend/Declaracia_uchenici%20pod%2018_v.2.docx"><MenuItem fontSize="1rem"  color="white" backgroundColor="#a5cf9f"   _focus={{outline: "none"}} border="0px" borderWidth="0px">Декларация за непълнолетни(docx)</MenuItem></a>
    				<a href="https://hacktues.pythonanywhere.com/static/frontend/Declaracia_uchenici%20pod%2018_v.2.pdf"><MenuItem fontSize="1rem" color="white"   backgroundColor="#a5cf9f"   _focus={{outline: "none"}} border="0px" borderWidth="0px">Декларация за непълнолетни(pdf)</MenuItem></a>
  				</MenuList>
			</Menu>
		<MenuItems><Link href="/about"><a>За Hack TUES</a></Link></MenuItems>
		{team}
		{login}
		{logout}
      </Flex>
	<Box width="auto" display={{ md:"flex", lg: "none" }}>
	<Button  _focus={{outline: "none"}} display="block" ref={btnRef} backgroundColor="transparent" colorScheme="lightgrey" border="0px" onClick={onOpen}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Button>
      </Box>
    </Flex> */


	/* <Flex zIndex="11" position="fixed" flexDirection="column" flexWrap="wrap" alignSelf="center" top="0" left="0" height="100vh" w="5%" backgroundColor="#76b48c">
		<IconButton _focus={{outline: "none"}} _hover={{backgroundColor:"#85c59b"}} colorScheme="white" marginTop="15px" backgroundColor="transparent" outline="none" border="none" zIndex="11" aria-label="Open Close" onClick={onTogglex} icon={<CloseIcon />} />
		<Flex zIndex="11" w="20px" margin="auto" alignItems="center" justifyContent="center" flexDirection="column" flexWrap="nowrap">
            <Text textAlign="center" alignSelf="center" fontWeight="300" color="white">
                <Link isExternal paddingRight="10px" _focus={{outline:"none"}} href="https://facebook.com/hacktues">
                    <Icon alignSelf="center" justifyContent="center" textAlign="center" marginBottom="5px" transform="rotate(-90deg)" as={FiInstagram} background="transparent" width="28px" height="28px"></Icon>
                </Link>
                <Link isExternal paddingRight="10px" _focus={{outline:"none"}} href="https://www.youtube.com/channel/UCQcbYkAKPEgfjzvwb2sUWSQ">
                    <Icon marginBottom="5px" transform="rotate(-90deg)" as={FiYoutube} background="transparent" width="28px" height="28px"></Icon>
                </Link>
                <Link isExternal paddingRight="10px" _focus={{outline:"none"}} href="mailto:hacktues@elsys-bg.org">
                    <Icon transform="rotate(-90deg)" as={FiMail} background="transparent" width="28px" height="28px"></Icon>
                </Link>
				<Link isExternal paddingRight="10px" _focus={{outline:"none"}} href="https://instagram.com/hacktues">
                    <Icon transform="rotate(-90deg)" as={FiFacebook} width="28px" height="28px"></Icon>
                </Link>
            </Text>
        </Flex>
		<Text cursor="pointer" onClick={() => {router.push('/')}} textAlign="center" textColor="#105231" fontFamily="llpixel" fontWeight="300" fontSize="30px">GG</Text>
	</Flex>
    <Slide direction="left" in={isOpenx} style={{position: "absolute",height:"100%", width: "auto", left: "5%", shadow:"md" }}>
      <Flex marginRight="50px" rounded="0" flexDirection="column" flexWrap="wrap" height="100%" p="40px" color="white" bg="#9accb7" shadow="md">
	{team}
	{login}
	{logout}
      </Flex>
    </Slide> */
    
	

	/* <Flex display={{ md:"flex", lg: "none" }} width={{ xl: "100%", md: "100%" }} alignItems="center" flexGrow={1}>
    	<Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        	<DrawerOverlay />
        	<DrawerContent style={{width:"200px", minWidth:"1rem"}} backgroundColor="#a5cf9f" color="#a5cf9f">
          	<DrawerCloseButton border="0px" color="white" backgroundColor="#a5cf9f" _focus={{outline: "none"}} />
          	<DrawerHeader color="black" fontFamily="llpixel" fontWeight="400">Hack &nbsp;<span style={{"color":"green"}}>TUES 7</span></DrawerHeader>
	  		<DrawerBody display="flex" flexDirection="column" flexWrap="wrap">
	  			<MenuItems>
					<Link href="/schedule" >
						<a onClick={onClose}>
							Програма
						</a>
					</Link>
				</MenuItems>
        	<MenuItems><Link href="/regulation"><a onClick={onClose}>Регламент</a></Link></MenuItems>
        	<MenuItems><Link href="/archive"><a onClick={onClose}>Архив</a></Link></MenuItems>
        		<Menu>
        			<MenuButton rightIcon={<ChevronDownIcon />} as={Button} _active={{background:"#a5cf9f"}}  _hover={{background:"#a5cf9f"}} color="white" bg="transparent" _focus={{outline: "none"}} border="0px" borderWidth="0px">
    					Декларации
  					</MenuButton>
  					<MenuList p="0">
    					<a href="http://hacktues.pythonanywhere.com/static/frontend/Declaracia_pylnoletni%20uchenici_v.2.docx"><MenuItem fontSize="1rem" color="white" backgroundColor="#a5cf9f" _focus={{outline: "none"}} border="0px" borderWidth="0px">Декларация за пълнолетни(docx)</MenuItem></a>
    					<a href="https://hacktues.pythonanywhere.com/static/frontend/Declaracia_pylnoletni%20uchenici_v.2.pdf"><MenuItem fontSize="1rem" color="white" backgroundColor="#a5cf9f" _focus={{outline: "none"}} border="0px" borderWidth="0px">Декларация за пълнолетни(pdf)</MenuItem></a>
    					<a href="https://hacktues.pythonanywhere.com/static/frontend/Declaracia_uchenici%20pod%2018_v.2.docx"><MenuItem fontSize="1rem"  color="white" backgroundColor="#a5cf9f" _focus={{outline: "none"}} border="0px" borderWidth="0px">Декларация за непълнолетни(docx)</MenuItem></a>
    					<a href="https://hacktues.pythonanywhere.com/static/frontend/Declaracia_uchenici%20pod%2018_v.2.pdf"><MenuItem fontSize="1rem" color="white" backgroundColor="#a5cf9f"   _focus={{outline: "none"}} border="0px" borderWidth="0px">Декларация за непълнолетни(pdf)</MenuItem></a>
  					</MenuList>
				</Menu>
				<MenuItems>
					<Link href="/about">
						<a onClick={onClose}>
							За Hack TUES
						</a>
					</Link>
				</MenuItems>
				{login}
				{logout}
			</DrawerBody>
        </DrawerContent>
    </Drawer>
	</Flex>
</Box> */
	// <Flex position="fixed" overflow="hidden" width="100%" height="auto" zIndex={999} color="black" backgroundColor="white" boxShadow="0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.24)" id="header">
		
	// </Flex>
  )
};

function ProfileButton(props){
	return(
	<Button marginLeft={["none","none","none","auto"]} _active={{bg:"transparent"}}  _hover={{backgroundColor:"#85c59b"}} cursor="pointer" fontFamily="Rubik" color="white" bg="transparent" _focus={{outline: "none"}} border="0px" borderWidth="0px" onClick={props.click}><Link href="/profile" ><a>Профил</a></Link></Button>
	)
}

function LogoutButton(props) {
	return(
	<Button _active={{bg:"transparent"}}  _hover={{backgroundColor:"#85c59b"}} cursor="pointer" fontFamily="Rubik" color="white" bg="transparent" _focus={{outline: "none"}} border="0px" borderWidth="0px" onClick={Logout}><Link href="/" ><a>Излез</a></Link></Button>
	)
}


function Logout() {
	// axios({
	// 	method: 'post',
	// 	url: 'https://hacktues.pythonanywhere.com/token/',
	// 	header: 'Content-Type: application/json',
	// 	data: {"email": "hacktues","password": "Go Green"}
	// })
	// .then(function (response) {
		cookies.remove('auth')
		cookies.remove('refresh')
		Router.reload(window.location.pathname);
	// })
}

function useDeviceDetect() {
	const [isMobile, setMobile] = React.useState(false);
  
	React.useEffect(() => {
	  const userAgent =
		typeof window.navigator === "undefined" ? "" : navigator.userAgent;
	  const mobile = Boolean(
		userAgent.match(
		  /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
		)
	  );
	  setMobile(mobile);
	}, []);
  
	return { isMobile };
  }

export default Navbar;