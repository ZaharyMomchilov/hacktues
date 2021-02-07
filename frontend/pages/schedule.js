// import React, {useEffect} from 'react'
// import Day from "../components/schedule/day"
// import { IoIosLaptop, IoMdPin } from "react-icons/io";
// import { Flex, Box, Button, chakra} from '@chakra-ui/react'
// import { AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
// import { IconButton } from "@chakra-ui/react"

// import Entry from "../components/schedule/entry"
// import { useKeenSlider } from 'keen-slider/react'
// import {ArrowForwardIcon, ArrowBackIcon} from '@chakra-ui/icons'
// var emojiLaptop = <IoIosLaptop/>;
// var emojiPin = <IoMdPin/>;
// var TechPark = "https://goo.gl/maps/dtZjXyfVKV42cetB9"

// const day1 = [
//   { title: 'Официално откриване на събитието', notime:0, time1: '17:30', time2:'18:00', link: TechPark, emoji:emojiPin, place:"Sofia Tech Park",}, 
//   { title: 'Образователна лекция', notime:0, time1: '18:15', time2: '19:00', link: TechPark, emoji: emojiPin, place:"Sofia Tech Park",}, 
//   { title: 'Образователна лекция (онлайн)', notime:0, time1: '19:15', time2: '20:30', link: TechPark, emoji: emojiPin, place:"Sofia Tech Park",},
//   { title: 'Образователни уъркшопи', notime:0, time1: '19:15', time2: '20:30', emoji: emojiPin, place:"Sofia Tech Park",},
//   { title: 'Образователни уъркшопи', notime:0, time1: '19:15', time2: '20:30', emoji: emojiPin, place:"Sofia Tech Park",},];

// const day2 = [
//   { title: 'Работа по проектите', notime:1, emoji:emojiLaptop, place:"Онлайн",},];

// export default function Schedule(){

//   const [currentSlide, setCurrentSlide] = React.useState(0);
//   const [pause, setPause] = React.useState(false);
//   const timer = React.useRef();
//   const [sliderRef, slider] = useKeenSlider()

//   useEffect(() => {
//     if (slider){slider.refresh()}
//   }, [slider])

//   	return (
//       <Flex flexShrink="1" flexBasis="auto" className="navigation-wrapper">
//     	<Box paddingBottom={["50px","50px","100px","100px", "200px"]} ref={sliderRef} className="keen-slider">
//     		<div  className={"keen-slider__slide number-slide1"}>{GetEntry(day1)}</div>
//     		<div  className={"keen-slider__slide number-slide2"}>{GetEntry(day2)}</div>
//     	</Box>
//       {/* {slider && (
//         <>
//           <ArrowLeft
//             onClick={e => e.stopPropagation() || slider.prev()}
//             disabled={currentSlide === 0}
//           />
//           <ArrowRight
//             onClick={e => e.stopPropagation() || slider.next()}
//             disabled={currentSlide === slider.details().size - 1}
//           />
//         </>
//       )} */}
//       {slider && (
//       <Box display={["block", "block", "block", "block", "none"]}>
//         <div style={{"justifyContent": "center", "textAlign":"center"}} className="dots">
//           {[...Array(slider.details().size).keys()].map((idx) => {
//             return (
//               <button style={{"outline":"none","border":"none","width":"10px","height":"10px","background":"#ffff","borderRadius":"50%","margin":"0 5px","padding":"5px","cursor":"pointer", "marginBottom":"250px"}}
//                 key={idx}
//                 onClick={() => {
//                   slider.moveToSlideRelative(idx)
//                 }}
//                 className={"dot" + (currentSlide === idx ? " active" : "")}
//               />
//             )
//           })}
//         </div>
//         </Box>
//       )}
//       </Flex>
//   );
// };

// function GetEntry(props) {
//   let content = [];
//     for (let x = 0; x < props.length; x++) { 
//         content.push(<Entry key={x} marginTop="25px" notime={props[x].notime} title={props[x].title} time1={props[x].time1} time2={props[x].time2} link={props[x].link} emoji={props[x].emoji} place={props[x].place}/>);
//     }
//     return content;
// }


// function ArrowLeft(props) {
//   const disabeld = props.disabled ? " arrow--disabled" : "";
//   return (
//     	<Box left="450px" style={{height:"auto", width:"auto", position:"absolute", top:"50%", transform:"translateY(-50%)"}}>
//       		<IconButton border="0" _hover={{background:"white"}} _focus={{outline:"none"}} display={{base:"none",sm:"none",md:"none",lg:"none",xl:"block"}} size="lg" backgroundColor="white" color="green.500" onClick={props.onClick} className={"arrow arrow--left" + disabeld} icon={<ArrowBackIcon height="35px" width="35px"/>} />
//     	</Box>
//   );
// }

// function ArrowRight(props) {
//   	const disabeld = props.disabled ? " arrow--disabled" : "";
//   	return (
//     	<Box minW="1091" right="450px" style={{height:"auto", width:"auto", position:"absolute", top:"50%", left:"auto", transform:"translateY(-50%)"}}>
//       		<IconButton border="0" _hover={{background:"white"}} _focus={{outline:"none"}} display={{base:"none",sm:"none",md:"none",lg:"none",xl:"block"}} size="lg" backgroundColor="white" color="green.500" onClick={props.onClick} className={"arrow arrow--left" + disabeld} icon={<ArrowForwardIcon height="35px" width="35px" />} />
//   		</Box>
//   );
// }

import React from 'react'
import { Calendar, momentLocalizer , Views } from 'react-big-calendar'
import events from '../components/schedule/events'
import {Link, Text} from '@chakra-ui/react'
import * as dates from '../components/schedule/dates'
// import moment from 'moment'
import 'moment/locale/bg' 
require("moment/min/locales.min");

var moment = require('moment');
moment.locale('bg');

const localizer = momentLocalizer(moment)

function Event({ event }) {
  return (
    <span>
      <strong>{event.title}</strong>
      {event.desc && ':  ' + event.desc}
    </span>
  )
}

function EventAgenda({ event }) {

  
  if(event.link){
    // var heading = "Очакваме те"
    // var place = "Google Meet"
    return (
      <span>
        <Link textDecoration="none" _hover={{textDecoration:"none"}} as="em" isExternal href={event.link} style={{ color: '#009d60' }}>{event.title}</Link>
        <Text>{event.desc}</Text>
        <a style={{textDecoration:"none"}}>{"Очакваме те"}&nbsp;-&gt;&nbsp;<Link textDecoration="underline" target="_blank" href={event.link}>{"Google Meet"}</Link></a>
      </span>
    )
  }
  else if(event.youtube){
    // var heading = "Гледай ни"
    // var place = "Youtube"
    return (
      <span>
        <Link textDecoration="none" _hover={{textDecoration:"none"}} as="em" isExternal href={event.youtube} style={{ color: '#009d60' }}>{event.title}</Link>
        <Text>{event.desc}</Text>
        <a style={{textDecoration:"none"}}>{"Гледай ни"}&nbsp;-&gt;&nbsp;<Link textDecoration="underline" target="_blank" href={event.link}>{"Youtube"}</Link></a>
      </span>
    )
  }
  else if(event.discord){
    // var heading = "Нещо свързано с Discord"
    // var place = "Discord"
    return (
      <span>
        <Link textDecoration="none" _hover={{textDecoration:"none"}} as="em" isExternal href={event.discord} style={{ color: '#009d60' }}>{event.title}</Link>
        <Text>{event.desc}</Text>
        <a style={{textDecoration:"none"}}>{"Нещо свързано с Discord"}&nbsp;-&gt;&nbsp;<Link textDecoration="underline" target="_blank" href={event.link}>{"Discord"}</Link></a>
      </span>
    )
  }
  else{
    return (
      <span>
        <Link textDecoration="none" _hover={{textDecoration:"none"}} as="em" isExternal style={{ color: '#009d60' }}>{event.title}</Link>
        <Text>{event.desc}</Text>
        <a style={{textDecoration:"none"}}><Link textDecoration="underline" target="_blank"></Link></a>
      </span>
    )
  
  }

}

let Schedule = () => (
  <Calendar
    culture='bg'
    formats={formats}
    length={500}
    toolbar={false}
    events={events}
    localizer={localizer}
    defaultView={Views.AGENDA}
    components={{
      event: Event,
      agenda: {
        event: EventAgenda,
      },
    
    }
    }
    messages={{event:"Събитие",date:"Дата",time:"Време"}}
    style={{fontFamily:"Rubik",background:"white", borderRadius:"10px", marginLeft:"25px", marginRight:"25px", height:"auto", border:"none", marginTop:"50px", marginBottom:"50px", padding:"5px"}}
  />
)

export default Schedule