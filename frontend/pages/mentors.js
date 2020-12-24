import { GoogleSpreadsheet } from "google-spreadsheet";
import {Flex} from '@chakra-ui/react'
import {useEffect} from 'react'
import Mentor from '../components/mentors/card'


const SPREADSHEET_ID = "1rOMB9_I1PL6qxDS6rN4rzg2LzCzIkB5TCCAPVt4gLMc"
const SHEET_ID = "1942458820"
const CLIENT_EMAIL = "mentors@hack-tues-mentors.iam.gserviceaccount.com"
const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCtJYSfE+3WBe79\nM7ge+ZMqfYHXcy7foGqWWr91dPkAN4nwHvKB2U9P46YJwk3zjfZl903mCzRfZZ4T\nZGHcTc7PLbSw3ztw3UJHxuU/u3d1AYyedH6ytqptM3i62sFjCUlUS8mtJ/Or0v7S\nehXCiP/q7RdbFBJF+p8F+VJYZSK8l4vGaAos4GdsVSJVXoOF6HU8x+tzp+C2ejFq\nrsJMjVaYsoFbx6G5TWnN9yFwSXO9ilWYhPNfB8uqH4TeLXAPU29HVMr1eEa4NdGJ\nbVTk8hukxJ7SmeoodPTSOisbogCnVhG6i8k8xLj5NyJvGCVeljbCbje41VufCuQR\nvFpe8qTHAgMBAAECggEAQYGYv8B/8kFzbfsTtTBSA7jRF0x+Ft/vg2vY1JzJGdJp\nTt2+fO7UyVJEvpty92qlpmUeZSKnEVJ2MDsBpSIQ1KQjoOkL6YLkMRioIekQZEWO\nSGKljoJ6Tu8yxWq+0HOyeQBlUCv1zfN5MfM7aUqAnAZQGEarNSuA33c4trWoozWI\nSduIPTKXJ8JxBQzB493zDbBC3V16jPyFd9nAsIGsdkuFhDELj++HTgWl2IALifWo\nOG/XB5b5PQi1p66t6N/jeCMKvy1OyBH6WcDq6dvKs4bZ9krznNUR5QEWhO3iau6r\nYlJmflnkB1hav/DE2VeFBrQ5qcZFvbGkS13cHVswyQKBgQDq7+4III3+38pQr+Xl\nk/5NtWj+iR02MHFk7AfjOk4IwGtCwvsjfCWLE/7stWBiwVVqQmrCft2ebmOF074G\nx+gDyl7sozosgyL5RaODZ7EmE3JUUc9uhON+tVncdzudOfYwmk6c2GxHyehVx2cC\nkv9x+VhI2Xnd1nCtt9fGFpag2QKBgQC8q2x57DP3j3FK//SZQERAA0a9KD1SyH6s\nVDQ6j/wmxUvTVwS27tXjWKcpiqXfJvMcovm62P0qzT+a/RzXoXG5jeCq4rpvVPww\nC2F9KxoPR0lS8TLeTj3ZJe+7eKeLiT2OZzWM5q7Dst+pWz8USaWKLzOCky5gbNiy\n0+PUs9PunwKBgQDFEin7S0ORLqwI7uPLpk7FZI0EJoQIdq5H1+3t33Shxrays9fy\nNitP9J/8c1C8xiweDER9jendAgAdvDZEfd/TfigOHAWqXP4zVwUILyzcIaffrxhv\nPq2OFhWg56tsAbjPoECdNLXvqiBoA/IWqLP6KQyzXynouf6e2f33ve7wUQKBgCH4\nW5e4R8MTOLrgSxIs2B0OefYlAKWfI++zWZQRyLzSWUy8JkUpy6kblT2NkUAUq0FE\ntuJFn4/NVN57JG5Oy0M1oHYkTJ0vGBkuc2cuE4scsr8UXqxYOhqXEgsXNlORalvx\niVrNTjo+QrcjjsAAYqX2ybeA+KCz+HB6ZlMt7cLRAoGBANskOE3UeIgHrSQENy3Y\nrax+HrCIa2r8WXbcijltwNo3tdNei256fcx2a86JZQ7v+rYnLs6orZxIX0MH9dtt\nS8Tse9rTip0uVDGc2LH5cEVmY9h2GNkNYH6JnXArEyYRwyVRRy3ovjV+LJzKE8Y1\njKMGmamOjEoyM8ceUTpPcJCi\n-----END PRIVATE KEY-----\n" 
const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const Mentors = () => {
  
  var cards = []

  const [rows, setRows] = React.useState([]);
  useEffect(() => {
    const getImages = async () => {
		await doc.useServiceAccountAuth({
			client_email: CLIENT_EMAIL,
			private_key: PRIVATE_KEY,
		  })

		  await doc.loadInfo();
		  const sheet = doc.sheetsByIndex[0];
		  
		  const rows = await sheet.getRows()		
		setRows(rows);
    };
    getImages();
  }, []);

    for(let i = 0; i < rows.length; i++){
      if(rows[i].valid == "x"){
        if(rows[i]._rawData[2] != undefined)
          var res = rows[i]._rawData[2].split("id=");
			if(res[1] != undefined){
				cards.push(<Mentor key={i} organization={rows[i]["Организация"]} graduated={rows[i]["Завършили ли сте ТУЕС?"]} position={rows[i]["Позиция"]} technologies={rows[i]["Технологии, които владеете:"]} availability={rows[i]["Моля отбележете кога ще можете да участвате"]} name={rows[i]["Име и фамилия"]}  image={"https://drive.google.com/uc?export=view&id=" + res[1]}></Mentor>)
			}
        }
    }

return <Flex justifyContent="center" alignItems="center" flexDirection={["column","column","row","row"]} flexWrap="wrap" pb={["300px", "300px", "300px", "200px"]} pt="25px">{cards}</Flex>
}

export default Mentors