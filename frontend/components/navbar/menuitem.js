import * as React from "react";
import { motion } from "framer-motion";
import { Icon, Box, Button, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie';
import Link from 'next/link'

const variants = {
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

const MotionBox = motion.custom(Box)

export const MenuItem = (props) => {

  var router = useRouter()
  const cookies = new Cookies()


  if(props.profile){
    var avatar = <Avatar src={`https://cdn.discordapp.com/avatars/${props.ctx.props.avatar[0]}/${props.ctx.props.avatar[1]}.png`}/>
  }

  if(!props.link){
    var link = <Text  cursor="pointer" onClick={() => {cookies.remove('auth'); cookies.remove('refresh'); router.reload("/");}}>{props.name}</Text>
  }
  else{
    var link = <Link cursor="pointer" href={props.link}>{props.name}</Link>
  }

  if(props.icon == "GG"){
   var icon = <Text  position="relative" top={props.top} fontFamily="llpixel" marginRight="10px" fontSize="17px" textColor="currentColor">GG</Text>
  }
  else{
   var icon = <Icon  left="0px" position="relative" top={props.top} as={props.icon} />
  }

  return (
    <MotionBox w="80%" _active={{bg:"transparent"}} background="none"  justifyContent="center" rounded="lg" margin="0" padding="0" marginBottom="20px" display="flex" alignItems="center" cursor="pointer"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      {avatar}
      <Button textAlign="center" textColor="black" textDecoration="none" background="none"  fontFamily="Rubik"  border="0px" borderWidth="0px">{link}</Button>
    </MotionBox>
  );
};