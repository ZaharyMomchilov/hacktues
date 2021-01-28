import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menuitem";
import { Flex, Divider } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
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

export const Navigation = (props) => (
	<Li zIndex="1" h="100%" w="100%" position="relative" flexDirection="column" borderRadius="5px" variants={variants}>
		{/* {props.xd[0]} */}
		<Flex marginTop="auto" variants={variants} zIndex="1" position="relative" flexDirection="column" flexWrap="wrap">
    		<MenuItem name="Профил" icon={PhoneIcon} link="/profile"/>
    		<MenuItem name="Излез" icon={PhoneIcon} link="" onClick={() => {console.log("xd")}}/>
    	</Flex>
  </Li>
);

