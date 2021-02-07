import '../styles/globals.css'
import { ChakraProvider, Box, Slide,SlideFade, Button, Text, Image, Flex } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react";
import 'keen-slider/keen-slider.min.css'
import '../styles/react-big-calendar.css'
import Navbar from '../components/navbar/navbar'
import {Sidebar} from '../components/navbar/sidebar'
import Footer from '../components/footer/footer'
import React, {useEffect, useRef, useContext} from 'react'
import Cookies from 'universal-cookie';
import axios from 'axios'
import jwt_decode from "jwt-decode";
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { useControllableState } from "@chakra-ui/react"
import Terms from '../components/termsofservice/terms'
import NextNprogress from 'nextjs-progressbar';
import { motion, useCycle } from "framer-motion";
import { AnimateSharedLayout } from "framer-motion"
import Router from 'next/router'
const cookies = new Cookies();
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

export const NavProvider = React.createContext(false);
import _ from 'lodash';
import { useDimensions } from "../components/navbar/dim";
import { MenuToggle } from "../components/navbar/button";
import Navigation from "../components/navbar/nav";
import { useMediaQuery } from "@chakra-ui/react"
import { useRouter } from 'next/router'
import routerEvents from 'next-router-events'


// axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
// axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

Sentry.init({
	dsn: "https://47d68f3b1c084b459d17b4013d403960@o516791.ingest.sentry.io/5623722",
	integrations: [new Integrations.BrowserTracing()],
  
	// We recommend adjusting this value in production, or using tracesSampler
	// for finer control
	tracesSampleRate: 1.0,
  });


const breakpoints = createBreakpoints({
	sm: "320px",
	md: "768px",
	lg: "1200px",
	xl: "1500px",
  })

const theme = extendTheme({
	styles: {
	  global: {
		body: {
		  bg: "https://hacktues.pythonanywhere.com/static/frontend/background.svg",
		  backgroundRepeat: "no-repeat",
		  backgroundPosition:"center",
		  backgroundSize: "cover",
		},
		},
	  }, breakpoints
	})

function checkToken(exp) {
    if (Date.now() - 36000000 <= exp.exp * 1000) {
		console.log('token is not expired')
		// console.log(exp/.exp * 1000 - Date.now() - 36000000);
		// console.log(cookies.get('auth'));
		// console.log(jwt_decode(cookies.get('auth')).user_id);
		// getUsers()
		// getNewToken()
		// refreshToken()
	}
	else{
		console.log('token is expired')
		// console.log(cookies.get('auth'));
		// getNewToken()
		refreshToken()
	}
}

function MyApp({ Component, pageProps }) {

	const [logged, setLogin] = useControllableState({defaultValue:0});
	const [inTeam, setTeam] = useControllableState({defaultValue:null});
	const [discord, setDiscord] = useControllableState({defaultValue: null});


	const div = {
		open: {
			opacity:1
			}, 
		closed:{
			opacity:1}}


		const [isLargerThan797] = useMediaQuery("(min-width: 797px)")
		// const { nav, setNav } = useContext(NavProvider);
		
		const [isOpen, toggleOpen] = useCycle(false, true);
		const containerRef = useRef(null);
		const { height } = useDimensions(containerRef);
		 
		// const handleNav = () => setNav(isOpen)
		 
		var sidebar
		var variant
		var dived
		 //   console.log(props);


	const onLoad = () => {
		console.log("fired");
		toggleOpen(false)
	}

	var router = useRouter()


  	useEffect(() => {

		if(cookies.get('auth')){
			if(jwt_decode(cookies.get('auth')).user_id == 3){
				setTeam(null)
				setLogin(0)
			}
		}

		if(cookies.get('CookieConsent')){
			if(cookies.get('auth')){
				checkToken(jwt_decode(cookies.get('auth')))
				if(jwt_decode(cookies.get('auth')).user_id != 3){
					setLogin(1)
					if(inTeam == null){
						axios({
						method: 'get',
						url: `https://${process.env.hostname}/users/${jwt_decode(cookies.get('auth')).user_id}/`,
						headers: 
						{ "Content-type": "Application/json",
						  "Authorization": `Bearer ${cookies.get('auth')}`
						  }
						  },)
						.then(function (response){
							console.log(_.isEmpty(response.data.team_set));
							if(_.isEmpty(response.data.team_set)){
								setTeam(null)
							}
							else{
								setDiscord([response.data.discord_id,response.data.avatar])
								setTeam(response.data.team_set[0])
						
							}
							
						})
					}
					

					// getUsers()
			}
		}
		else{
			getNewToken();
			setLogin(0)
			// getUsers()
		}
	}
}
	)

	// router.events.on('routeChangeStart', onLoad())
	const logUrl = url => toggleOpen(false)
	// const alertUrl = url => alert(url)
	
	routerEvents.once('routeChangeStart', logUrl)


  // useEffect(() => {
    if(!isLargerThan797){

		dived = {
			open: {
				display:"none",
				overflow:"hidden",
				transition:{
					transitionEnd:{opacity:0}
				}
				}, 
			closed:{
				// opacity:1,
				display:"initial",
				overflow:"visible",
				transition:{
					stiffness: 10000,
					when:"beforeChildren",
					delay: 0.6,
					transitionEnd:{opacity:1}
				}
			}
			}

      sidebar = {
        open: (height = 1000) => ({
          clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
          overflow:"hidden",
          transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
          }
        }),
        closed: {
          clipPath: "circle(30px at 40px 40px)",
          overflow:"visible",
          transition: {
            delay: 0.3,
            type: "spring",
            stiffness: 400,
            damping: 40
          }
        }
      }
  
      variant = {
        open: {
          height:"100vh",
          marginRight:"0px",
          overflow:"hidden"
        },
        closed: {
          // height:"0px",
          height:"80px",
          overflow:"visible",
          // marginRight:"20px",
        transition: {
          when: "afterChildren"
        }
        }
      };
    }
    else{

		dived = {}

      sidebar = {
        open: (height = 1000) => ({
          clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
          transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
          }
        }),
        closed: {
          clipPath: "circle(30px at 40px 40px)",
          transition: {
            delay: 0.3,
            type: "spring",
            stiffness: 400,
            damping: 40
          }
        }
      };
  
      variant = {
        open: {
          width:"300px",
          marginRight:"0px",
          height:"100vh",
        },
        closed: {
          width:"50px",
          marginRight:"20px",
        transition: {
          when: "afterChildren"
        }
        }
      };
    }
  // }, [isLargerThan428, sidebar, variant])

//   return (
//     <Flex layout as={motion.div} zIndex="15" flexDirection="column" flexWrap="nowrap" position="sticky" h="100vh" top="0" flexGrow="1" left="0" bottom="0" variants={variant} initial={false} animate={isOpen ? "open" : "closed"} custom={height} ref={containerRef}>
//       <MenuToggle toggle={() => {toggleOpen()}}  />
//       <Navigation ctx={props} />
//       <Box as={motion.div} h="100%" position="absolute" width={["100%","100%","300px","300px"]} background="#fff" className="background" variants={sidebar} />
//     </Flex>
//   );

	


  	return (
  	<ChakraProvider resetCSS={false} theme={theme}>
		<Flex flexDirection={["column","column","row","row"]} flexWrap="wrap">
			<NextNprogress color="#009d60" height='3' options={{ showSpinner: false }}/>
			{/* <NavProvider.Provider value={{xd, setXd}}> */}
  				{/* <AnimateSharedLayout> */}
					{/* <Sidebar layout as={motion.div} avatar={discord} inteam={inTeam} loggedin={logged} /> */}
					<Flex layout as={motion.div} zIndex="15" flexDirection="column" flexWrap="nowrap" position="sticky" h="100vh" top="0" flexGrow="1" left="0" bottom="0" variants={variant} initial={false} animate={isOpen ? "open" : "closed"} custom={height} ref={containerRef}>
    				  <MenuToggle toggle={() => {toggleOpen()}}  />
    				  <Navigation ctx={{avatar: discord, inteam: inTeam, loggedin:logged}} />
    				  <Box as={motion.div} h="100%" position="absolute" width={["100%","100%","300px","300px"]} background="#fff" className="background" variants={sidebar} />
    				</Flex>
					<Box animate={isOpen ? "open" : "closed"} as={motion.div} variants={dived} flexBasis="0" flexGrow="999" minW="50%" flexShrink="1">
						<Component {...pageProps} />
					</Box>
				  {/* </AnimateSharedLayout> */}
			{/* </NavProvider.Provider> */}
		</Flex>
		<Cookie/>
  	  	{/* <Footer/> */}
  	</ChakraProvider>) 
}

const Cookie = () => {
	
	const [value, setValue] = useControllableState({defaultValue: true})
	
	function cookieConsentHandler(){
		cookies.set('CookieConsent', true, { path: '/', maxAge: 604800});
	}
	if(!cookies.get('CookieConsent')){
		if(!cookies.get('auth')){
		return(
			<Slide direction="bottom" in={value} style={{zIndex:10}}>
				<Flex pb={["50px","50px","20px","20px"]} mr="50px" marginLeft={["0","0","auto","auto"]} w={["100%","100%","33%","33%"]} flexDirection="column" flexWrap="wrap" mb={["0px","0px","150px","150px"]} paddingLeft="20px" paddingRight="20px" paddingTop="20px" color="white" mt="4" rounded="lg" bg="#a5cf9f" shadow="md">
					<Text alignSelf="center">Съгласявам се с <Terms/> на HackTUES 7</Text>
					<Button alignSelf="center" border="0" colorScheme="white" backgroundColor="transparent" onClick={() => {setValue(false); cookieConsentHandler();getNewToken()}}>Съгласявам се</Button>
					</Flex>
			</Slide>
		)
		
	}
}
	return(<Box></Box>)
}


function getNewToken() {
	axios({
		method: 'post',
		url: `https://${process.env.hostname}/token/`,
		header: 'Content-Type: application/json',
		data: {"email": "hacktues","password": "Go Green"}
	})
	.then(function (response) {
		cookies.set('auth', response.data.access, { path: '/' })
		cookies.set('refresh', response.data.refresh, { path: '/' })
	})
}

function refreshToken() {
	axios({
		method: 'post',
		url: `https://${process.env.hostname}/token/refresh/`,
		headers: 
		{ "Content-type": "Application/json"},
		data: {refresh: `${cookies.get('refresh')}`}  
	})
	.then(function (response) {
		console.log(response);
		cookies.set('auth', response.data.access, { path: '/' })
		if(response.data.refresh != undefined){
			cookies.set('refresh', response.data.access, { path: '/' })
		}
	})
}

function getUsers() {
	axios({
		method: 'get',
		url: `https://${process.env.hostname}/users/`,
		headers: 
		{ "Content-type": "Application/json",
		  "Authorization": `Bearer ${cookies.get('auth')}`}
		  },)
		.then(function (response){
			console.log(response);
		})
}

// function getCurrTeamUser() {
// 	axios({
// 		method: 'get',
// 		url: `https://hacktues.pythonanywhere.com/users/${jwt_decode(cookies.get('auth')).user_id}/`,
// 		headers: 
// 		{ "Content-type": "Application/json",
// 		  "Authorization": `Bearer ${cookies.get('auth')}`}
// 		  },)
// 		.then(function (response){
// 			console.log(response.data.team_set[0]);
// 		})
// }

export default MyApp
