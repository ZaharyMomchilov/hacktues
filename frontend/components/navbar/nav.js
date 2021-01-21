import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menuitem";
import { Flex } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
const variants = {
  // open: {
  //   transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  // },
  // closed: {
  //   transition: { staggerChildren: 0.05, staggerDirection: -1 }
  // }
};

const Li = motion.custom(Flex)
const itemIds = [0, 1, 2, 3, 4];

export const Navigation = () => (
  <Li position="relative" justifyContent="center" alignSelf="center" marginTop="auto" marginBottom="auto" flexDirection="column" borderRadius="5px" variants={variants}>
    <MenuItem name="xd" icon={PhoneIcon} link="/xd"/>
  </Li>
);

