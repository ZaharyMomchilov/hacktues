import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./dim";
import { MenuToggle } from "./button";
import Navigation from "./nav";
import { Box, Flex } from '@chakra-ui/react'
import { useMediaQuery } from "@chakra-ui/react"
import { useRouter } from 'next/router'



const Nav = motion.custom(Flex)
const Div = motion.custom(Box)

export const Sidebar = (props, onShowClick) => {

  const [isLargerThan428] = useMediaQuery("(min-width: 428px)")

  var sidebar
  var variant

  console.log(props);


  if(!isLargerThan428){
    sidebar = {
      open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        overflow:"hidden",
        transition: {
          type: "spring",
          stiffness: 20,
          restDelta: 2
        }
      }),
      closed: {
        clipPath: "circle(30px at 40px 40px)",
        overflow:"visible",
        transition: {
          delay: 0.3,
          type: "spring",
          stiffness: 400,
          damping: 40
        }
      }
    }

    variant = {
      open: {
        height:"100vh",
        marginRight:"0px",
        overflow:"hidden"
      },
      closed: {
        // height:"0px",
        height:"70px",
        overflow:"visible",
        // marginRight:"20px",
      transition: {
        when: "afterChildren"
      }
      }
    };
  }
  else{
    sidebar = {
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

    variant = {
      open: {
        width:"300px",
        marginRight:"0px",
        height:"100vh",
      },
      closed: {
        width:"50px",
        marginRight:"20px",
      transition: {
        when: "afterChildren"
      }
      }
    };
  }


  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <Nav zIndex="15" flexDirection="column" flexWrap="nowrap" position="sticky" h="100vh" top="0" flexGrow="1" left="0" bottom="0" variants={variant} initial={false} animate={isOpen ? "open" : "closed"} custom={height} ref={containerRef}>
      <MenuToggle toggle={() => {toggleOpen()}}  />
      <Navigation ctx={props} />
      <Div  h="100%" position="absolute" width={["100%","100%","300px","300px"]} background="#fff" className="background" variants={sidebar} />
    </Nav>
  );
};