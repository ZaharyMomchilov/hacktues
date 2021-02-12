import React, { useEffect } from "react";
import { useControllableState, Flex, Text } from "@chakra-ui/react";

const Clock = (props) => {
  const [state, setState] = useControllableState({
    defaultValue: { days: 0, hours: 0, minutes: 0, seconds: 0 },
  });

  useEffect(() => {
    getTimeUntil(props.deadline);
    setInterval(() => getTimeUntil(props.deadline), 1000);
  }, []);

  function getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      setState({ days, hours, minutes, seconds });
    }
  }

  function leading0(num) {
    return num < 10 ? "0" + num : num;
  }

  return (
    <Flex p="10px">
      <Flex
        marginLeft="auto"
        flexDirection="column"
        flexWrap="wrap"
        className="Clock-days"
      >
        <Text
          textColor="black"
          marginTop="0"
          marginBottom="0"
          textAlign="center"
          fontSize="2rem"
          fontFamily="Rubik"
        >
          {leading0(state.days)}
        </Text>
        <Text
          textColor="black"
          textAlign="center"
          fontSize="15px"
          fontFamily="Rubik"
        >
          ДЕНА
        </Text>
      </Flex>
      <Flex
        marginLeft="40px"
        marginRight="20px"
        flexDirection="column"
        flexWrap="wrap"
        className="Clock-hours"
      >
        <Text
          textColor="black"
          marginTop="0"
          marginBottom="0"
          textAlign="center"
          fontSize="2rem"
          fontFamily="Rubik"
        >
          {leading0(state.hours)}
        </Text>
        <Text
          textColor="black"
          textAlign="center"
          fontSize="15px"
          fontFamily="Rubik"
        >
          ЧАСА
        </Text>
      </Flex>
      <Flex
        marginLeft="20px"
        marginRight="40px"
        flexDirection="column"
        flexWrap="wrap"
        className="Clock-minutes"
      >
        <Text
          textColor="black"
          marginTop="0"
          marginBottom="0"
          textAlign="center"
          fontSize="2rem"
          fontFamily="Rubik"
        >
          {leading0(state.minutes)}
        </Text>
        <Text
          textColor="black"
          textAlign="center"
          fontSize="15px"
          fontFamily="Rubik"
        >
          МИНУТИ
        </Text>
      </Flex>
      <Flex
        marginRight="auto"
        flexDirection="column"
        flexWrap="wrap"
        className="Clock-seconds"
      >
        <Text
          textColor="black"
          marginTop="0"
          marginBottom="0"
          textAlign="center"
          fontSize="2rem"
          fontFamily="Rubik"
        >
          {leading0(state.seconds)}
        </Text>
        <Text
          textColor="black"
          textAlign="center"
          fontSize="15px"
          fontFamily="Rubik"
        >
          СЕКУНДИ
        </Text>
      </Flex>
    </Flex>
  );
};

export default Clock;
