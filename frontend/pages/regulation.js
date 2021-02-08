import React from 'react'
import GetPanelData from '../components/regulation/panel'
import Markdown from 'markdown-to-jsx';
import txt from 'raw-loader!./regulation/regulation.md';
import { Accordion, Box, Text, Flex } from '@chakra-ui/react'
var parts = txt.split(";;");

const panels = [
    { title: <Markdown  >### КАКВО ПРЕДСТОИ ПРЕДИ HACK TUES GG</Markdown>, description: <Markdown options={ {
        forceBlock: true,
        createElement(type, props, children) {
            return (
                <Box fontFamily="Rubik" className="parent">
                    {React.createElement(type, props, children)}
                </Box>
            );
        },
    }
    }>{parts[0]}</Markdown>},
    { title: <Markdown>### КАК ДА УЧАСТВАТЕ?</Markdown>, description: <Markdown options={{
        createElement(type, props, children) {
            return (
                <Box fontFamily="Rubik" className="parent">
                    {React.createElement(type, props, children)}
                </Box>
            );
        },
    }}>{parts[1]}</Markdown>},
    { title: <Markdown>### ПРОГРАМА</Markdown>, description: <Markdown options={{
        createElement(type, props, children) {
            return (
                <Box fontFamily="Rubik" className="parent">
                    {React.createElement(type, props, children)}
                </Box>
            );
        },
    }}>{parts[2]}</Markdown>},
    { title: <Markdown>### ПРОЕКТИ</Markdown>, description: <Markdown options={{
        createElement(type, props, children) {
            return (
                <Box fontFamily="Rubik" className="parent">
                    {React.createElement(type, props, children)}
                </Box>
            );
        },
    }}>{parts[3]}</Markdown>},
    { title: <Markdown>### ТЕХНОЛОГИИ</Markdown>, description: <Markdown options={{
        createElement(type, props, children) {
            return (
                <Box fontFamily="Rubik" className="parent">
                    {React.createElement(type, props, children)}
                </Box>
            );
        },
    }}>{parts[4]}</Markdown>},
    { title: <Markdown>### МЕНТОРИ</Markdown>, description: <Markdown options={{
        createElement(type, props, children) {
            return (
                <Box fontFamily="Rubik" className="parent">
                    {React.createElement(type, props, children)}
                </Box>
            );
        },
    }}>{parts[5]}</Markdown>},
    { title: <Markdown>### ОЦЕНЯВАНЕ ОТ МЕНТОРИТЕ</Markdown>, description: <Markdown options={{
        createElement(type, props, children) {
            return (
                <Box fontFamily="Rubik" className="parent">
                    {React.createElement(type, props, children)}
                </Box>
            );
        },
    }}>{parts[6]}</Markdown>},
    { title: <Markdown>### ПОЛУФИНАЛИ И ФИНАЛИ</Markdown>, description: <Markdown options={{
        createElement(type, props, children) {
            return (
                <Box fontFamily="Rubik" className="parent">
                    {React.createElement(type, props, children)}
                </Box>
            );
        },
    }}>{parts[7]}</Markdown>},
    { title: <Markdown>### ОЦЕНЯВАНЕ ОТ ЖУРИТО</Markdown>, description: <Markdown options={{
        createElement(type, props, children) {
            return (
                <Box fontFamily="Rubik" className="parent">
                    {React.createElement(type, props, children)}
                </Box>
            );
        },
    }}>{parts[8]}</Markdown>},
    { title: <Markdown>### ОТГОВОРНОСТ</Markdown>, description: <Markdown options={{
        createElement(type, props, children) {
            return (
                <Box fontFamily="Rubik" className="parent">
                    {React.createElement(type, props, children)}
                </Box>
            );
        },
    }}>{parts[9]}</Markdown>},
    { title: <Markdown>### ДИСКВАЛИФИКАЦИЯ</Markdown>, description: <Markdown options={{
        createElement(type, props, children) {
            return (
                <Box fontFamily="Rubik" className="parent">
                    {React.createElement(type, props, children)}
                </Box>
            );
        },
    }}>{parts[10]}</Markdown>},
    { title: <Markdown>### ТОРМОЗ</Markdown>, description: <Markdown options={{
        createElement(type, props, children) {
            return (
                <Box fontFamily="Rubik" className="parent">
                    {React.createElement(type, props, children)}
                </Box>
            );
        },
    }}>{parts[11]}</Markdown>},
];

export default function Regulation() {
    return (
        <Box pb={["200px", "50px"]} pt="50px">
            <Flex marginLeft={["25px", "25px", "100px", "250px"]} marginRight={["25px", "25px", "100px", "250px"]} mb="50px" background="white" p="15px" rounded="lg">
                <Text textAlign="justify" fontFamily="Rubik" fontSize="17px">&emsp;
                {`Скъпи съученици, поздравяваме Ви за избора да участвате в седмото издание на училищния хакатон Hack TUES GG. Тук ще намерите цялата информация, необходима за участие в хакатона и неговото провеждане. Поради епидемичната обстановка в страната Hack TUES GG ще бъде за първи път изцяло онлайн. Важното е, че хакатон ще има независимо от обстоятелствата!`}
                </Text>
            </Flex>
            <Accordion allowToggle allowMultiple>
                <GetPanelData lenght={panels.length} panels={panels}/>
            </Accordion>
            <Flex marginLeft={["25px", "25px", "100px", "250px"]} marginRight={["25px", "25px", "100px", "250px"]} mt="50px" background="white" p="15px" rounded="lg">
                <Text textAlign="justify" fontFamily="Rubik" fontSize="17px">
                    {"Искрено се надяваме, че ще се забавлявате и че ще измислите уникални проекти и решения."}
                </Text>
            </Flex>
        </Box>
    )
}
