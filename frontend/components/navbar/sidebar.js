import React, { useState, Children } from "react"
import {Box, Text, Divider, Button} from '@chakra-ui/react'
import { motion, useSpring } from "framer-motion"


const Container = motion.custom(Box)
const SidebarContainer = motion.custom(Box)
const HamburgerContainer = motion.custom(Button)

const HamburgerButton = ({ x, width, isOpen, setOpen }) => {
    return (
      <HamburgerContainer
        onTap={() => {
          
          setOpen(!isOpen)
          console.log(isOpen)
          isOpen ? x.set(-width) : x.set(0)
        }}
      >
      </HamburgerContainer>
    )
  }

const Sidebar = ({ width = 320, color = "#1c2022", children }) => {
  const [isOpen, setOpen] = useState(false)
  const x = useSpring(0, { stiffness: 400, damping: 40 })

  return (
    <Container position="fixed"
    width="100vw"
    height="100vh"
    onPan={(e, pointInfo) => {
        if (pointInfo.point.x < width) x.set(pointInfo.point.x - width)
        // if (pointInfo.velocity.x < 0) x.set(pointInfo.point.x - width)

        // console.log("pointInfo.delta.x: ", pointInfo.delta.x)
        // console.log("pointInfo.offset.x: ", pointInfo.offset.x)
        // console.log("pointInfo.point.x: ", pointInfo.point.x)
        // console.log("pointInfo.velocity.x: ", pointInfo.velocity.x)
      }}
      onPanEnd={(e, pointInfo) => {
        if (Math.abs(pointInfo.velocity.x) > 1000 && !isOpen) {
          if (pointInfo.velocity.x > 0) {
            x.set(0)
          } else x.set(-width)
        } else {
          if (Math.abs(x.current) < width / 2) {
            x.set(0)
            setOpen(true)
          } else {
            x.set(-width)
            setOpen(false)
          }
        }
      }}
    >
    <HamburgerButton x={x} width={width} isOpen={isOpen} setOpen={setOpen} border-radius="32px"
      backgroundColor
  width="48px"
  height="48px"
  display="flex"
  flexDirection = "column"
  justifyContent= "center"
  position= "fixed"
  top="0"
  margin="24px"
  cursor= "pointer"
  zIndex="2"  x={x} width={width}/>
      <SidebarContainer zIndex="2" position= "fixed" backgroundColor={color} width={width} height="100%" box-sizing="border-box" box-shadow="16px 0 32px -16px #000" padding="64px"
        color={color}
        width={width}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 40
        }}
        initial={{ x: -width }}
        style={{ x }}
      >
        {/* {children} */}
        <Text textColor="white">xd</Text>
      </SidebarContainer>
    </Container>
  )
}

export default Sidebar
