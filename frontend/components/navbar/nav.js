import * as React from "react";
import {useEffect} from 'react'
import { motion } from "framer-motion";
import { MenuItem } from "./menuitem";
import { Flex, Divider, Avatar, Box, Text } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import {isMobile} from 'react-device-detect';
import { useMediaQuery } from "@chakra-ui/react"
import {useRouter} from 'next/router'
import {GrSchedule, GrDocumentText} from 'react-icons/gr'
import {RiTeamLine} from 'react-icons/ri'
import {FiArchive} from 'react-icons/fi'
import {AiOutlineTeam, AiOutlineUserAdd, AiOutlineUsergroupAdd, AiOutlineUser} from 'react-icons/ai'
import {BiExit, BiLogIn} from 'react-icons/bi'
import Cookies from 'universal-cookie';
import Link from 'next/link'

const variants = {
  open: {
    transition: { staggerChildren: 0.07 }
  },
  closed: {
    transition: { when: "afterChildren" }
  }
};

const divider = {
  open: {
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: 100 }
    }
  },
  closed: {
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const Li = motion.custom(Flex)
const Divide = motion.custom(Divider)

const mlink = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const MotionText = motion.custom(Text)


export default function Navigation(props){
  const [isSmalledThan480] = useMediaQuery("(max-width: 480px)")

  var router = useRouter()
  const cookies = new Cookies()

  var login
  var logout
  var team

  console.log(props)

  // useEffect(() => {
    if(props.ctx.loggedin == 0 && props.ctx.inteam == null || props.ctx.inteam == "false"){
      team = <Box display="none" ></Box>
    }
    else if(props.ctx.loggedin == 1 && props.ctx.inteam == null || props.ctx.inteam == "false"){
      team = <MenuItem name="Създай отбор" icon={AiOutlineUsergroupAdd} link="/maketeam"/> 
    }
    else if(props.ctx.loggedin == 1 && props.ctx.inteam){
      team = <MenuItem name="Моят отбор" icon={AiOutlineTeam} link={`/teams/${encodeURIComponent(props.ctx.inteam)}/`}/>
    }
  
    if(!props.ctx.loggedin){
      login= <MenuItem name="Вход" icon={BiLogIn} link="/login"/>
      logout= <MenuItem name="Регистрация" reg icon={AiOutlineUserAdd} link="/registration/first_step"/>
    }
    else{
      login= <MenuItem name="Профил" icon={AiOutlineUser}
      // profile={<Avatar src={`https://cdn.discordapp.com/avatars/${props.ctx.props.avatar[0]}/${props.ctx.props.avatar[1]}.png`}/>} 
      link="/profile"/>
      logout= <MenuItem name="Излез" icon={BiExit}/>
    }
  // }, [login,team,logout, props])


  return (<Li justifyContent="center" alignItems="center" zIndex="1" h="100%" w="100%" position="relative" flexDirection="column" borderRadius="5px" variants={variants}>
  {/* {props.xd[0]} */}
  <Flex marginTop="15px"  zIndex="1" position="relative" flexDirection="column" flexWrap="wrap">
      <Link textDecoration="none" href="/">
          		<a textDecoration="none">
            		<MotionText variants={mlink}  textDecoration="none" fontFamily="llpixel" color="#009d60" fontSize="1.25rem" fontWeight="200" size="lg">
              			Hack TUES <span style={{"color":"#105231"}}>GG</span>
            		</MotionText>
          		</a>
        	</Link>
      <MenuItem name="Програма" top="-1px" icon={GrSchedule} link="/schedule"/>
      {/* <MenuItem name="Теми" icon={PhoneIcon} link="/themes"/> */}
      {/* <MenuItem name="Ментори" icon={PhoneIcon} link="/mentors"/> */}
      <MenuItem name="Отбори" top="-1px" icon={RiTeamLine} link="/teams"/>
      <MenuItem name="Архив" icon={FiArchive} link="/archive"/>
      <MenuItem name="Регламент" icon={GrDocumentText} link="/regulation"/>
      <MenuItem name="За Hack TUES" top="-1px" icon="GG" link="/about"/>
  </Flex>
  <Flex marginTop="auto" zIndex="1" position="relative" flexDirection="column" flexWrap="wrap">
      {team}
      {login}
      {logout}
    </Flex>
</Li>)
}

