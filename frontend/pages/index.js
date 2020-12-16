import { useEffect } from "react"
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie';
import Konami from 'react-konami-code';
import ReactPageScroller from 'react-page-scroller';

import FirstComponent from "../components/index/FirstComponent";
import SecondComponent from "../components/index/SecondComponent";

import { motion } from "framer-motion"
const MotionBox = motion.custom(Box)


export default function Home() {

    useEffect(() => {
        router.prefetch('/secret/verywellkeptsecret/indeed/secret')
    })

    var router = useRouter()

    const easterEgg = () => {
		  router.push("/secret/verywellkeptsecret/indeed/secret")
    }

    return( 
        // <Box>
            // {/* <Konami code={[71,71,87,80]} action={easterEgg}/> */}
		// {/* </Box> */}
		<Box display="flex" justifyContent="center" alignItems="center" height="100vh" flexDirection="column" overflow="hidden" className="demo-page-contain">
        	<ReactPageScroller
        //   pageOnChange={handlePageChange}
        //   containerWidth={window.innerWidth * 0.4}
        //   containerHeight={window.innerHeight * 0.5}
        //   customPageNumber={this.state.currentPage}
        >
        {/* <MotionBox
      w="100%"
      height="100%"
      bg="red.300"
      outline="black"
      drag="y"
      dragConstraints={{top : 0, bottom : 900, right: 1900, left : 0 }}
      whileHover={{ scale: 5.1 }}
      whileTap={{ scale: 0.9 }}
    /> */}
          <FirstComponent />
          <SecondComponent />
        </ReactPageScroller>
      </Box>
    );
}
