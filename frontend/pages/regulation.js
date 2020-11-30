import React from 'react'
import GetPanelData from '../components/regulation/panel'
import Markdown from 'markdown-to-jsx';
import txt from 'raw-loader!./regulation/regulation.md';
import { Accordion, Box, chakra } from '@chakra-ui/react'
var parts = txt.split(";;");


import {RemoveScroll} from 'react-remove-scroll';
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";

const panels = [
    { title: <Markdown>### HACK TUES и COVID-19</Markdown>, description: <Markdown>{parts[0]}</Markdown>},
    { title: <Markdown>### Отговорност</Markdown>, description: <Markdown>{parts[1]}</Markdown>},
    { title: <Markdown>### Регистрация</Markdown>, description: <Markdown>{parts[2]}</Markdown>},
    { title: <Markdown>### Проекти</Markdown>, description: <Markdown>{parts[3]}</Markdown>},
    { title: <Markdown>### Техника и технологии</Markdown>, description: <Markdown>{parts[4]}</Markdown>},
    { title: <Markdown>### Оценяване от менторите</Markdown>, description: <Markdown>{parts[5]}</Markdown>},
    { title: <Markdown>### Оценяване от участниците</Markdown>, description: <Markdown>{parts[6]}</Markdown>},
    { title: <Markdown>### Оценяване от журито</Markdown>, description: <Markdown>{parts[7]}</Markdown>},
    { title: <Markdown>### Провеждане на четвъртфинали, полуфинали и финали</Markdown>, description: <Markdown>{parts[8]}</Markdown>},
    { title: <Markdown>### Дисквалификация</Markdown>, description: <Markdown>{parts[9]}</Markdown>},
    { title: <Markdown>### Тормоз</Markdown>, description: <Markdown>{parts[10]}</Markdown>},
];

export default function Regulation() {

	const MotionBox = chakra(motion.div);
    
    return (
        <RemoveScroll>
		<MotionBox position="absolute" blockScrollOnMount={true} preserveScrollBarGap={true} 
		h="100%"
		animate={{
			marginLeft: ["100%", "5%" ],
			width: ["300%", "100%"],
		}}
		backgroundColor="red.400" transition={{ duration: 1000 }}>
        <Box mr="20%" pb={["200px", "150px"]} pt="50px">
            <Accordion allowToggle allowMultiple>
                <GetPanelData lenght={panels.length} panels={panels}/>
            </Accordion>
        </Box>
        </MotionBox>
        </RemoveScroll>
    )
}
