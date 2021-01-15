import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menuitem";
import { Flex } from '@chakra-ui/react'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Li = motion.custom(Flex)
const itemIds = [0, 1, 2, 3, 4];

export const Navigation = () => (
  <Li position="absolute" flexDirection="column" borderRadius="5px" width="200px" height="20px" flex="1" variants={variants}>
    {itemIds.map(i => (
      <MenuItem key={i} />
    ))}
  </Li>
);

