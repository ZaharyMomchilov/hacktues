import About from "./about"
import { useEffect } from "react"
import { Box, Slide, Button } from "@chakra-ui/react";
import { useRouter } from 'next/router'
import {Link} from '@chakra-ui/react'
import Cookies from 'universal-cookie';
import axios from 'axios'
const cookies = new Cookies();
import Konami from 'react-konami-code';

const DiscordOauth2 = require("discord-oauth2");
const oauth = new DiscordOauth2();

import { motion } from "framer-motion"

import * as Scroll from 'react-scroll';
import { Link as ScrollLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


// import Example from './example'

export default function Home() {

    useEffect(() => {
        router.prefetch('/secret/verywellkeptsecret/indeed/secret')
      })
    var router = useRouter()
    const easterEgg = () => {
		router.push("/secret/verywellkeptsecret/indeed/secret")
	}

    return( 
        <Box zIndex={1}>
        	{/* <Example/> */}
            <Box></Box>
            <Box></Box>
            <Konami code={[71,71,87,80]} action={easterEgg}/>
            {/* <Link isExternal href='https://discord.com/api/oauth2/authorize?client_id=743157046677078016&redirect_uri=https%3A%2F%2Fhacktues-git-wave2.zaharymomchilov.vercel.app%2F&response_type=code&scope=identify'>xd</Link>             */}
        </Box>
    );
}

