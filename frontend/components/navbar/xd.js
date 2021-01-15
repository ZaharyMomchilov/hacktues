import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./dim";
import { MenuToggle } from "./button";
import { Navigation } from "./nav";
import { Box } from '@chakra-ui/react'

const sidebar = {
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
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const variant = {
  open: {
    width:"300px"
  },
  closed: {
    width:"0px"
    
  }
};



const Nav = motion.custom(Box)
const Div = motion.custom(Box)

export const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <Nav top="0" position = "absolute" left="0" bottom="0" variants={variant} initial={false} animate={isOpen ? "open" : "closed"} custom={height} ref={containerRef}>
      <Div position="absolute" top="0" left="0" bottom="0" width="300px" background="#fff" className="background" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </Nav>
  );
};