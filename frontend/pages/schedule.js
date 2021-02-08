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
        <a style={{textDecoration:"none"}}>{"Гледай ни"}&nbsp;-&gt;&nbsp;<Link textDecoration="underline" target="_blank" isExternal href={event.youtube}>{"Youtube"}</Link></a>
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
        <a style={{textDecoration:"none"}}>{"Нещо свързано с Discord"}&nbsp;-&gt;&nbsp;<Link textDecoration="underline" target="_blank" href={event.discord}>{"Discord"}</Link></a>
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