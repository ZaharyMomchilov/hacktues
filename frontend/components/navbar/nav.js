import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menuitem";
import { Flex, Divider, Avatar, Box } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import {isMobile} from 'react-device-detect';
import { useMediaQuery } from "@chakra-ui/react"
import {useRouter} from 'next/router'
import {GrSchedule, GrDocumentText} from 'react-icons/gr'
import {RiTeamLine} from 'react-icons/ri'
import {FiArchive} from 'react-icons/fi'
import {AiOutlineTeam, AiOutlineUserAdd} from 'react-icons/ai'
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


export default function Navigation(props){
  const [isSmalledThan480] = useMediaQuery("(max-width: 480px)")

  var router = useRouter()
  const cookies = new Cookies()

  var login
  var logout
  var team

  console.log(props)

  if(props.ctx.props.loggedin == 0 && props.ctx.props.inteam == null){
    team = <Box display="none" ></Box>
  }
  else if(props.ctx.props.loggedin == 1 && props.ctx.props.inteam == null){
    team = <MenuItem name="Създай отбор" icon={PhoneIcon} link="/maketeam"/> 
  }
  else{
    team = <MenuItem name="Моят отбор" icon={AiOutlineTeam} link={`/teams/${encodeURIComponent(props.ctx.props.inteam)}/`}/>
  }

  if(!props.ctx.props.loggedin){
    login= <MenuItem name="Вход" icon={BiLogIn} link="/login"/>
    logout= <MenuItem name="Регистрация" icon={AiOutlineUserAdd} link="/registration/first_step"/>
  }
  else{
    login= <MenuItem name="Профил" 
    // profile={<Avatar src={`https://cdn.discordapp.com/avatars/${props.ctx.props.avatar[0]}/${props.ctx.props.avatar[1]}.png`}/>} 
    link="/profile"/>
    logout= <MenuItem name="Излез" icon={BiExit}/>
  }



  return (<Li justifyContent="center" alignItems="center" zIndex="1" h="100%" w="100%" position="relative" flexDirection="column" borderRadius="5px" variants={variants}>
  {/* {props.xd[0]} */}
  <Flex marginTop="15px"  zIndex="1" position="relative" flexDirection="column" flexWrap="wrap">
      <MenuItem name="Програма" top="-1px" icon={GrSchedule} link="/schedule"/>
      {/* <MenuItem name="Теми" icon={PhoneIcon} link="/themes"/> */}
      {/* <MenuItem name="Ментори" icon={PhoneIcon} link="/mentors"/> */}
      <MenuItem name="Отбори" top="-1px" icon={RiTeamLine} link="/teams"/>
      <MenuItem name="Архив" icon={FiArchive} link="/archive"/>
      <MenuItem name="Регламент" icon={GrDocumentText} link="/regulation"/>
      <MenuItem name="За Hack TUES" icon={PhoneIcon} link="/about"/>
  </Flex>
  <Flex marginTop="auto" zIndex="1" position="relative" flexDirection="column" flexWrap="wrap">
      {team}
      {login}
      {logout}
    </Flex>
</Li>)
}

