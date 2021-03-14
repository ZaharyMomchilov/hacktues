import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Flex,
    Box,
    Link
} from "@chakra-ui/react"

const axios = require("axios");

export default function Teams(props) {
    
    return (
        <Box marginTop="50px" marginBottom="50px" marginLeft="15px" marginRight="15px">

{/* <Table overflow="hidden" background="white" borderBottomRadius="lg" colorScheme="whatsapp" p="15px"
     variant="simple">
     <TableCaption background="white" borderTopRadius="lg" placement="top">Финали</TableCaption>
  <Thead>
    <Tr>
      <Th>Място</Th>
      <Th>Име</Th>
      <Th>линк към repo</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr style={{background:"#FFD700"}}>
      <Td>1</Td>
      <Td>789 2.0</Td>
      <Td><Link isExternal href="https://google.com"><a>github.com</a></Link></Td>
    </Tr>
    <Tr style={{background:"#D7D7D7"}}>
      <Td>2</Td>
      <Td>Кенара</Td>
      <Td><Link isExternal href="https://google.com"><a>github.com</a></Link></Td>
    </Tr>
    <Tr style={{background:"#A77044"}}>
      <Td>3</Td>
      <Td>Сметана</Td>
      <Td><Link isExternal href="https://google.com"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>1</Td>
      <Td>Ягодките</Td>
      <Td><Link isExternal href="https://google.com"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>2</Td>
      <Td>Кенара</Td>
      <Td><Link isExternal href="https://google.com"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>3</Td>
      <Td>Сметана</Td>
      <Td><Link isExternal href="https://google.com"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>1</Td>
      <Td>Ягодките</Td>
      <Td><Link isExternal href="https://google.com"><a>github.com</a></Link></Td>
    </Tr>
  </Tbody>
</Table> */}

<Table overflow="hidden" background="white" borderBottomRadius="lg" colorScheme="whatsapp" p="15px"
     variant="simple">
     <TableCaption background="white" borderTopRadius="lg" placement="top">Полуфинал №1</TableCaption>
  <Thead>
    <Tr>
      <Th>Място</Th>
      <Th>Име</Th>
      <Th>линк към repo</Th>
    </Tr>
  </Thead>
  <Tbody>
  <Tr style={{background:"#a6cf9f"}}>
      <Td>1</Td>
      <Td>789 2.0</Td>
      <Td><Link isExternal href="https://github.com/venelinatanasov/iot_stuff"><a>github.com</a></Link></Td>
    </Tr>
    <Tr style={{background:"#a6cf9f"}}>
      <Td>2</Td>
      <Td>False Positive</Td>
      <Td><Link isExternal href="https://github.com/false-positive/ecospace"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
    
      <Td>3</Td>
      <Td>Palomas</Td>
      <Td><Link isExternal href="https://github.com/KillLaker/HackTUES-GG"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>4</Td>
      <Td>Smertь</Td>
      <Td><Link isExternal href="https://github.com/YordanMarkov/Green-Force"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>5</Td>
      <Td>TTT</Td>
      <Td><Link isExternal href="https://github.com/fedarrdi/arduino"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>6</Td>
      <Td>Лек Живот 2</Td>
      <Td><Link isExternal href="https://github.com/marti456/HackTues-GG"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>7</Td>
      <Td>Крастави киселички</Td>
      <Td><Link isExternal href="https://github.com/ChrisY60/HackTues"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>8</Td>
      <Td>DiSableDMage</Td>
      <Td><Link isExternal href="https://github.com/SimeonTsekov/DiSableDMage"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>9</Td>
      <Td>Safety</Td>
      <Td><Link isExternal href="https://github.com/kiko1134/Safety"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>10</Td>
      <Td>Супер Абонати</Td>
      <Td><Link isExternal href="https://github.com/rollrack/game-about-recycling"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>11</Td>
      <Td>Hello There</Td>
      <Td><Link isExternal href="https://github.com/Mrgoblings/hello-there.git"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>12</Td>
      <Td>SKAM</Td>
      <Td><Link isExternal href="https://github.com/Kalo-commits/SKAM"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>13</Td>
      <Td>пекарна</Td>
      <Td><Link isExternal href="https://google.com"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>14</Td>
      <Td>NobleGnu</Td>
      <Td><Link isExternal href="https://github.com/y0608/druvche.bg"><a>github.com</a></Link></Td>
    </Tr>
  </Tbody>
</Table>

<Table overflow="hidden" background="white" borderBottomRadius="lg" colorScheme="whatsapp" p="15px"
     variant="simple">
     <TableCaption background="white" borderTopRadius="lg" placement="top">Полуфинал №2</TableCaption>
  <Thead>
    <Tr>
      <Th>Място</Th>
      <Th>Име</Th>
      <Th>линк към repo</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr style={{background:"#a6cf9f"}}>
      <Td>1</Td>
      <Td>Мечо Пух</Td>
      <Td><Link isExternal href="https://github.com/boki1/verda"><a>github.com</a></Link></Td>
    </Tr>
    <Tr style={{background:"#a6cf9f"}}>
      <Td>2</Td>
      <Td>6rek</Td>
      <Td><Link isExternal href="https://github.com/filio123321/hacktues"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>3</Td>
      <Td>3488</Td>
      <Td><Link isExternal href="https://github.com/MariVidkov/HackTues-3488"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>4</Td>
      <Td>C--</Td>
      <Td><Link isExternal href="https://github.com/C-Min-Min/Electry"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>5</Td>
      <Td>DDz</Td>
      <Td><Link isExternal href="https://github.com/Team-DDz/Eco-game.git"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>6</Td>
      <Td>Monke</Td>
      <Td><Link isExternal href="https://github.com/Easy-Recycling/Easy-Recycling"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>7</Td>
      <Td>На Уиндолс само филми</Td>
      <Td><Link isExternal href="https://github.com/Easy-Recycling/Easy-Recycling"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>8</Td>
      <Td>Калодрум</Td>
      <Td><Link isExternal href="https://github.com/MrSirene/Kalodrum"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>9</Td>
      <Td>hras4eta</Td>
      <Td><Link isExternal href="https://github.com/AvatarZorak/From_the_depths_to_the_sky.git"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>10</Td>
      <Td>404 TeamName NotFound</Td>
      <Td><Link isExternal href="https://github.com/ZariProjects/Hack_Tues_GG"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>11</Td>
      <Td>4i4kovite 4ervenotikveni4kov4eta</Td>
      <Td><Link isExternal href="https://github.com/Nasko14/4i4kovite-4ervenotikveni4kov4eta"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>12</Td>
      <Td>C-- 2.0</Td>
      <Td><Link isExternal href="https://github.com/simeonikratko/c--2.0"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>13</Td>
      <Td>The Quintessential Quintuplets</Td>
      <Td><Link isExternal href="https://hacktues.com/team/sOGStQXtWznYIu9bCDK8"><a>github.com</a></Link></Td>
    </Tr>
    <Tr>
      <Td>14</Td>
      <Td>Na promociq</Td>
      <Td><Link isExternal href="https://github.com/Viktordim/COMPOSTation"><a>github.com</a></Link></Td>
    </Tr>
  </Tbody>
</Table>

<Table overflow="hidden" background="white" borderBottomRadius="lg" colorScheme="whatsapp" p="15px" variant="simple">
     <TableCaption background="white" borderTopRadius="lg" placement="top">Полуфинал №3</TableCaption>
  <Thead>
    <Tr>
      <Th>Място</Th>
      <Th>Име</Th>
      <Th>линк към repo</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr style={{background:"#a6cf9f"}}>
      <Td>1</Td>
      <Td>Holdinga</Td>
      <Td><Link isExternal href="https://github.com/ManiacMaxo/CyclePath"><a>github.com/...</a></Link></Td>
    </Tr>
    <Tr style={{background:"#a6cf9f"}}>
      <Td>2</Td>
      <Td>magen7a</Td>
      <Td><Link isExternal href="https://github.com/VayerMaking/broaden"><a>github.com/...</a></Link></Td>
    </Tr>
    <Tr style={{background:"#add8e6"}}>
      <Td>3</Td>
      <Td>Dynamics</Td>
      <Td><Link isExternal href="https://github.com/Lilly7777/GRobot   https://github.com/Lilly7777/GRobot---Server"><a>github.com/...</a></Link></Td>
    </Tr>
    <Tr>
      <Td>4</Td>
      <Td>Memelin</Td>
      <Td><Link isExternal href="https://github.com/generot/Memelin_HackTUESGG"><a>github.com/...</a></Link></Td>
    </Tr>
    <Tr>
      <Td>5</Td>
      <Td>Gesko feat. PG</Td>
      <Td><Link isExternal href="https://github.com/pgmatev/WFP"><a>github.com/...</a></Link></Td>
    </Tr>
    <Tr>
      <Td>6</Td>
      <Td>Nice inc.</Td>
      <Td><Link isExternal href="https://github.com/TopchetoEU/Apollo"><a>github.com/...</a></Link></Td>
    </Tr>
    
    <Tr>
      <Td>7</Td>
      <Td>FAnton 👀</Td>
      <Td><Link isExternal href="https://github.com/braind3d/eleggo"><a>github.com/...</a></Link></Td>
    </Tr>
    <Tr>
      <Td>8</Td>
      <Td>bruhhh</Td>
      <Td><Link isExternal href="https://github.com/xcWhy/hacktuesProject.git"><a>github.com/...</a></Link></Td>
    </Tr>
    <Tr>
      <Td>9</Td>
      <Td>Provocateur</Td>
      <Td><Link isExternal href="https://github.com/1freshie/HACKTUES-GG"><a>github.com/...</a></Link></Td>
    </Tr>
    <Tr>
      <Td>10</Td>
      <Td>Still_thinking</Td>
      <Td><Link isExternal href="https://github.com/NikolayLazarov/Still_thinking"><a>github.com/...</a></Link></Td>
    </Tr>
    <Tr>
      <Td>11</Td>
      <Td>Chakalite&Co</Td>
      <Td><Link isExternal href="https://github.com/Marto113/HTGG"><a>github.com/...</a></Link></Td>
    </Tr>
    <Tr>
      <Td>12</Td>
      <Td>VoidPointer</Td>
      <Td><Link isExternal href="https://github.com/AlekoGeorgiev/HackTuesGG"><a>github.com/...</a></Link></Td>
    </Tr>
    <Tr>
      <Td>13</Td>
      <Td>Едни там</Td>
      <Td><Link isExternal href="https://github.com/yosko123/HackTUES"><a>github.com/...</a></Link></Td>
    </Tr>
    <Tr>
      <Td>14</Td>
      <Td>Lmao</Td>
      <Td><Link isExternal href="https://github.com/achkatanikolov/Flower-s-sprayer.git"><a>github.com/...</a></Link></Td>
    </Tr>
  </Tbody>
</Table>
        </Box>
        
    );
  }
export async function getServerSideProps(ctx) {
  
    var response = await axios({
      method: "get",
      url: `https://api.hacktues.com/teams/`,
      headers: { "Content-type": "Application/json" },
    }).catch(function (error) {
      console.log("get: " + error);
    });
  
    return { props: { teams: response.data } };
  }