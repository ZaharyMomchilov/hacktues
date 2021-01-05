import { useEffect } from "react"
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie';
import Konami from 'react-konami-code';
import ReactPageScroller from 'react-page-scroller';

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
        <Box>
          <Konami code={[71,71,87,80]} action={easterEgg}/>
		    
            {/* <MotionBox
      w="200px"
      height="200px"
      bg="red.300"
      outline="black"
      drag="y"
      dragConstraints={{top : 0, bottom : 900, right: 1900, left : 0 }}
    /> */}
		{/* // <Box display="flex" justifyContent="center" alignItems="center" height="100vh" flexDirection="column" overflow="hidden" className="demo-page-contain"> */}
    {/* //     	<ReactPageScroller
    //     //   pageOnChange={handlePageChange}
    //     //   containerWidth={window.innerWidth * 0.4}
    //     //   containerHeight={window.innerHeight * 0.5}
    //     //   customPageNumber={this.state.currentPage}
    //     >
        
    //       <FirstComponent />
    //       <SecondComponent />
    //     </ReactPageScroller> */}
      </Box>
    );
}
