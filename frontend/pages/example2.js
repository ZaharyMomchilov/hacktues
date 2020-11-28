import React, {useEffect} from "react";
import { Box, chakra, Text } from "@chakra-ui/react";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";

// 1. Create a custom motion component from Box
const MotionBox = chakra(motion.div);

// 2. You'll get access to `motion` and `chakra` props in `MotionBox`


function Example() {
return(
    <MotionBox
    animate={{
        marginLeft: ["100%", "10%" ],
        // width: ["300%", "100%"],
    }}
    transition={{ duration: 1000 }} backgroundColor="blue.400"
    >
        xd
    </MotionBox>
)
}


export default Example;