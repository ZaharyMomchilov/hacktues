import * as React from "react";
import { motion } from "framer-motion";
import { Icon, Box, Button } from '@chakra-ui/react'
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
  return (
    <MotionBox rounded="lg" _hover={{backgroundColor:"#85c59b", textDecoration:"none"}} margin="0" padding="0" marginBottom="20px" display="flex" alignItems="center" cursor="pointer"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon marginRight="5px" as={props.icon} />
      <Button textColor="black" textDecoration="none" _active={{bg:"transparent"}} _hover={{backgroundColor:"#85c59b", textDecoration:"none"}} background="none" _focus={{outline:"none"}} fontFamily="Rubik"  border="0px" borderWidth="0px"><Link href={props.link}>{props.name}</Link></Button>
    </MotionBox>
  );
};