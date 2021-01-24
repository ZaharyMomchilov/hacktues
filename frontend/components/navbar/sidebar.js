import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./dim";
import { MenuToggle } from "./button";
import { Navigation } from "./nav";
import { Box, Flex } from '@chakra-ui/react'

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
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const variant = {
  open: {
    width:"300px",
    when: "beforeChildren"
  },
  closed: {
    width:"50px",
  transition: {
    when: "afterChildren"
  }
  }
};



const Nav = motion.custom(Flex)
const Div = motion.custom(Box)

export const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <Nav flexDirection="column" flexWrap="nowrap" position="sticky" h="100vh" top="0" flexGrow="1" left="0" bottom="0" variants={variant} initial={false} animate={isOpen ? "open" : "closed"} custom={height} ref={containerRef}>
      <MenuToggle toggle={() => toggleOpen()} />
      <Navigation />
      <Div w="100%"  h="100%" position="absolute" width="300px" background="#fff" className="background" variants={sidebar} />
    </Nav>
  );
};