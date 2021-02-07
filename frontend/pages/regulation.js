import React from 'react'
import GetPanelData from '../components/regulation/panel'
import Markdown from 'markdown-to-jsx';
import txt from 'raw-loader!./regulation/regulation.md';
import { Accordion, Box } from '@chakra-ui/react'
var parts = txt.split(";;");

const panels = [
    { title: <Markdown >### КАКВО ПРЕДСТОИ ПРЕДИ HACK TUES GG</Markdown>, description: <Markdown options={{
        createElement(type, props, children) {
            return (
                <Box fontFamily="Rubik" className="parent">
                    {React.createElement(type, props, children)}
                </Box>
            );
        },
    }}>{parts[0]}</Markdown>},
    { title: <Markdown>### КАК ДА УЧАСТВАТЕ?</Markdown>, description: <Markdown options={{
        createElement(type, props, children) {
            return (
                <Box fontFamily="Rubik" className="parent">
                    {React.createElement(type, props, children)}
                </Box>
            );
        },
    }}>{parts[1]}</Markdown>},
    { title: <Markdown>### ПРОГРАМА ПРИ ОНЛАЙН ФОРМАТ</Markdown>, description: <Markdown options={{
        createElement(type, props, children) {
            return (
                <Box fontFamily="Rubik" className="parent">
                    {React.createElement(type, props, children)}
                </Box>
            );
        },
    }}>{parts[2]}</Markdown>},
    { title: <Markdown>### ХИБРИДЕН ФОРМАТ - ПРОГРАМА И ИНФОРМАЦИЯ</Markdown>, description: <Markdown options={{
        createElement(type, props, children) {
            return (
                <Box fontFamily="Rubik" className="parent">
                    {React.createElement(type, props, children)}
                </Box>
            );
        },
    }}>{parts[3]}</Markdown>},
    { title: <Markdown>### ВАЖНО ЗА ПРОЕКТИТЕ</Markdown>, description: <Markdown options={{
        createElement(type, props, children) {
            return (
                <Box fontFamily="Rubik" className="parent">
                    {React.createElement(type, props, children)}
                </Box>
            );
        },
    }}>{parts[4]}</Markdown>},
    { title: <Markdown>### ТЕХНИКА И ТЕХНОЛОГИИ</Markdown>, description: <Markdown options={{
        createElement(type, props, children) {
            return (
                <Box fontFamily="Rubik" className="parent">
                    {React.createElement(type, props, children)}
                </Box>
            );
        },
    }}>{parts[5]}</Markdown>},
    { title: <Markdown>### МЕНТОРИ</Markdown>, description: <Markdown options={{
        createElement(type, props, children) {
            return (
                <Box fontFamily="Rubik" className="parent">
                    {React.createElement(type, props, children)}
                </Box>
            );
        },
    }}>{parts[6]}</Markdown>},
    { title: <Markdown>### ОЦЕНЯВАНЕ ОТ МЕНТОРИТЕ</Markdown>, description: <Markdown options={{
        createElement(type, props, children) {
            return (
                <Box fontFamily="Rubik" className="parent">
                    {React.createElement(type, props, children)}
                </Box>
            );
        },
    }}>{parts[7]}</Markdown>},
    { title: <Markdown>### ПОЛУФИНАЛИ И ФИНАЛИ</Markdown>, description: <Markdown options={{
        createElement(type, props, children) {
            return (
                <Box fontFamily="Rubik" className="parent">
                    {React.createElement(type, props, children)}
                </Box>
            );
        },
    }}>{parts[8]}</Markdown>},
    { title: <Markdown>### ОЦЕНЯВАНЕ ОТ ЖУРИТО</Markdown>, description: <Markdown options={{
        createElement(type, props, children) {
            return (
                <Box fontFamily="Rubik" className="parent">
                    {React.createElement(type, props, children)}
                </Box>
            );
        },
    }}>{parts[9]}</Markdown>},
    { title: <Markdown>### ОТГОВОРНОСТ</Markdown>, description: <Markdown options={{
        createElement(type, props, children) {
            return (
                <Box fontFamily="Rubik" className="parent">
                    {React.createElement(type, props, children)}
                </Box>
            );
        },
    }}>{parts[10]}</Markdown>},
    { title: <Markdown>### ДИСКВАЛИФИКАЦИЯ</Markdown>, description: <Markdown options={{
        createElement(type, props, children) {
            return (
                <Box fontFamily="Rubik" className="parent">
                    {React.createElement(type, props, children)}
                </Box>
            );
        },
    }}>{parts[11]}</Markdown>},
    { title: <Markdown>### ТОРМОЗ</Markdown>, description: <Markdown options={{
        createElement(type, props, children) {
            return (
                <Box fontFamily="Rubik" className="parent">
                    {React.createElement(type, props, children)}
                </Box>
            );
        },
    }}>{parts[12]}</Markdown>},

];

export default function Regulation() {
    return (
        <Box pb={["200px", "50px"]} pt="50px">
            <Accordion allowToggle allowMultiple>
                <GetPanelData lenght={panels.length} panels={panels}/>
            </Accordion>
        </Box>
    )
}
