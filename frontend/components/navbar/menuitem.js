import * as React from "react";
import { motion } from "framer-motion";
import { List, Box } from '@chakra-ui/react'

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

const Boxed = motion.custom(Box)

export const MenuItem = () => {
  return (
    <Boxed margin="0" padding="0" listStyleType="none" marginBottom="20px" display="flex" alignItems="center" cursor="pointer"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Box border="2px solid #009d60" width="40px" height="40px" borderRadius="50%" flex="40px 0" marginRight="20px" className="icon-placeholder"></Box>
      <Box border="2px solid #009d60" border-radius="5px" width="200px" height="20px" flex="1" className="text-placeholder"></Box>
    </Boxed>
  );
};