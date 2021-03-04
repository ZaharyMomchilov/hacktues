// import { GoogleSpreadsheet } from "google-spreadsheet";
// import {Flex} from '@chakra-ui/react'
// import {useEffect} from 'react'
// import Mentor from '../components/mentors/card'


// const SPREADSHEET_ID = "1rOMB9_I1PL6qxDS6rN4rzg2LzCzIkB5TCCAPVt4gLMc"
// const SHEET_ID = "1942458820"
// const CLIENT_EMAIL = "mentors@hack-tues-mentors.iam.gserviceaccount.com"
// const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCrmM96YgkCEtDY\n+MYyyOpeDCi5R6jhw5SQCdZlXq7uRv4u/1GOR0iZ2AtWxnbMX2PHli+wxp/e1HSs\nFZVYa4Q4RjffxZsQC7GhkGYfAcnsX0HtqTogVCzCUtB4GDui20lgQJgpSDVJMk1L\nkD0nVPlgDbm1MsGGnUW3yFLyP7DNcc5sBD/MwE8dMCuHCJXfd/2icpBr+hf9GhTs\ndBle2li9OdQZfWyFLd+5APsp3E7ymhWxlGfzzvYIQyBbxpJUlNPNozGesG7xarhD\nAmprrAHW0lmqjAd0ZWb7tSJysF50lWW/n0exCPF30naTwJ8TNO69P0lo5dtxExH2\ncAeFDusnAgMBAAECggEAG6M/m5MJp2NXbvLWnVxd3yrvLjRb/4zMM0zaUrZmz2rw\nyqoFvTg++cRhwyaxAKbGf+FxKfQ70JyAdCz/wl+CyruIiUqe+H0hrYd/4zObDa6k\nBD7S5V0ZXm0PNaCVjlvqXA3bVB7UskbfSzHen6Sgi7d6NzSHFgLjtT+XGHxoohYU\nF5VdS8F6VOmIftiDAseAzq8GuYdiE84akTF7Ea97/fwK40AtCDhv4Ej/h6CcGUof\nZ1bKKaKACq331UtSXkAMXP4yMxP9mStWL5Ib7cYpD6x3QFyUbJFEzJqrnJAdq7QM\nM2rpvLn53Ufbtp/n1mLZDrnJf1IpMsXbtNd8ua+h9QKBgQDm6K+kBk6rA7TnjX3h\nshlV3vbY1W1LSHQ8uijpxzIDmlxf+05GXniipyPu4pG7ntCG2KRh9166yYPx8mso\n3mp0PcmTriNVsS21yAgDypvGDP57jqc9b6AqhGnIfmYe4G1jVi1dd+BRePzQEY8N\na4G6m1q8usnvDiyzI8pKEbQsbQKBgQC+PjYQqI7QoVlHC7HgINfFgU0wwOeiwYWK\n/iMQw1wW9wobI7lxix15fXnb0YQ7H1j1uoIALewWA0REm8yPLEHb/VypfUwlPXNp\ngiM+F++naf3/GM46Jc9mvdvFdglqQX9h3yD0mZ5uOPmkQ/6aS0rhu1sajl7ZMR6m\nQSaCKRiRYwKBgQCWxUgqKZQkRf9RUinnvIqebz9uxazfgyein0snmlEl2RyH72dk\nuzq5ubjUuku93iz6X2q2LPdFr17gFBG0VcXcsJt2OjYINfBKyZmyIBEmeEWSF8tL\nah+Co4MOzrmPX6sNOa/VX/iwOfeZRF3LvW6vkdDlenFwDilRrwTe6EBk4QKBgEL8\nXMUY1NCZP3pIn+UvK0qb8LYN9oHUalU6jtZEM5TSf3h258EXHtW8XMAN0eWPcB92\nAHhXsx09ITiXMzvmdXokiBAV0k36iTzJWedvPi9QnuLHtTW8Qn8Gsu+gVEhZr6Si\nkFQQEzz0StKQLoHdqQw6kCWVo8gOB6C6p/iEx+XJAoGBANXXLcfuMvoayzn51B5f\nvWyCpbQddIw8WxkFJMKEN+yugKcGjpTmd2SrCWSZ5Pz1a6POgUm+km1fwrpAHXxT\ngsTJVK2WlIiRPsgAyqzlBF9lqpBjey3CSJcmnrOzjKtcrUzK9rJ5H3zcXFrObKcF\n3F4rpgrYo15WR1ZrXtA10UAf\n-----END PRIVATE KEY-----\n"
// const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

// const Mentors = () => {
  
//   var cards = []

//   const [rows, setRows] = React.useState([]);
//   useEffect(() => {
//     const getImages = async () => {
// 		await doc.useServiceAccountAuth({
// 			client_email: CLIENT_EMAIL,
// 			private_key: PRIVATE_KEY,
// 		  })

// 		  await doc.loadInfo();
// 		  const sheet = doc.sheetsByIndex[0];
		  
// 		  const rows = await sheet.getRows()		
// 		setRows(rows);
//     };
//     getImages();
//   }, []);

//   for(let i = 0; i < rows.length; i++){
//     if(rows[i].valid == "x"){
//         if(rows[i]._rawData[2] != undefined)
//           var res = rows[i]._rawData[2].split("id=");
// 			if(res[1] != undefined){
// 				cards.push(<Mentor key={i} organization={rows[i]["Организация"]} graduated={rows[i]["Завършили ли сте ТУЕС?"]} position={rows[i]["Позиция"]} technologies={rows[i]["Технологии, които владеете:"]} availability={rows[i]["Моля отбележете кога ще можете да участвате"]} name={rows[i]["Име и фамилия"]}  image={"https://drive.google.com/uc?export=view&id=" + res[1]}></Mentor>)
// 			}
//     }
//   }

// return <Flex justifyContent="center" alignItems="center" flexDirection={["column","column","row","row"]} flexWrap="wrap" pb={["300px", "300px", "300px", "200px"]} pt="25px">{cards}</Flex>
// }


// export default Mentors

import { GoogleSpreadsheet } from "google-spreadsheet";
import {Flex} from '@chakra-ui/react'
import {useEffect} from 'react'
import Mentor from '../components/mentors/card'
const axios = require("axios");
const Mentors = (props) => {
  
  var cards = []


  for(let i = 0; i < props.mentors.length; i++){
    console.log(props.mentors[i].profile_picture);
    // if(rows[i].valid == "x"){
        // if(rows[i]._rawData[2] != undefined)
          // var res = rows[i]._rawData[2].split("id=");
			// if(res[1] != undefined){
				cards.push(<Mentor key={props.mentors[i].id} organization={props.mentors[i].organization} graduated={props.mentors[i].elsys} position={props.mentors[i].position} technologies={props.mentors[i].technologies} availability={props.mentors[i].free} name={props.mentors[i].full_name}  image={props.mentors[i].profile_picture}></Mentor>)
			// }
    // }
  }

return <Flex justifyContent="center" alignItems="center" flexDirection={["column","column","row","row"]} flexWrap="wrap" pb={["300px", "300px", "300px", "200px"]} pt="25px">{cards}</Flex>
}


export async function getServerSideProps(ctx) {
  
  var response = await axios({
    method: "get",
    url: `https://api.hacktues.com/mentors/`,
    headers: { "Content-type": "Application/json" },
  }).catch(function (error) {
    console.log("get: " + error);
  });

  return { props: { mentors: response.data } };
}

export default Mentors
