import { useEffect } from "react"
import { Flex, Box, Text, Button, Link } from "@chakra-ui/react";
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie';
import Konami from 'react-konami-code';
import ReactPageScroller from 'react-page-scroller';
import Image from 'next/image'
import { motion } from "framer-motion"
// import Link from 'next/link';
const MotionBox = motion.custom(Box)

import {AiOutlineCalendar} from "react-icons/ai"
import {MdPlace} from "react-icons/md"

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
          	<Flex flexDirection="row" flexWrap="wrap" >
				<Flex flexDirection="row" flexWrap="wrap" margin="5%" marginLeft="10%" rounded="lg" w="100%" height="100vh" color="white" backgroundColor="white">
					<Flex w="50%" flexDirection="row" flexWrap="wrap">
            			<Text textAlign="center" marginTop="auto" marginBottom="50px" wordBreak="break-word" fontFamily="llpixel" textColor="#009d60" fontSize="calc(1em + 10vmin)">Hack TUES&nbsp;<span style={{display:"inline-block", color:"#105231"}}>GG</span></Text>
						<Button _hover={{background:"#105231"}} border="0" w="50%" textDecoration="none" fontStyle="Rubik" leftIcon={<MdPlace/>} colorScheme="#105231" variant="outline"><Link textDecoration="none" isExternal href="https://goo.gl/maps/24QCr5RqiSuG3jGC8"><a style={{textDecoration:"none"}}>Sofia Tech Park</a></Link></Button>	
						<Button _hover={{background:"#105231"}} border="0" w="50%" textDecoration="none" fontStyle="Rubik" leftIcon={<AiOutlineCalendar/>} colorScheme="#105231" variant="outline"><Link textDecoration="none" href="/schedule"><a style={{textDecoration:"none"}}>08-11.03.2021</a></Link></Button>	
					</Flex>
					<Flex w="50%">
            {/* <Image src="/робот.png" height={1600} width={2140}></Image> */}
          </Flex>
				</Flex>
				<Flex w="100%" backgroundColor="#FF0000" color="red">
					<Box colorScheme="red">xd</Box>
				</Flex>
          	</Flex>
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
