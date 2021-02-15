import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import axios from "axios";

import Cookies from "universal-cookie";
const cookies = new Cookies();
const Player = (props) => {
  var router = useRouter();

  function leave() {
    axios({
      method: "post",
      url: `https://${process.env.hostname}/users/${props.user_id}/leave_team/`,
      headers: {
        "Content-type": "Application/json",
        Authorization: `Bearer ${cookies.get("auth")}`,
      },
    }).then(function (response) {
      router.push("/?t=success");
    });
  }

  function makecaptain(props) {
    axios({
      method: "post",
      url: `https://${process.env.hostname}/teams/${props.team_id}/change_captain/`,
      headers: {
        "Content-type": "Application/json",
        Authorization: `Bearer ${cookies.get("auth")}`,
      },
      data: { users: props.user_id },
    }).then(function (response) {
      router.reload();
    });
  }

  const deletePlayer = props => {
    console.log(props);
    console.log(
      props.teammates.filter(function(value, index, arr){ 
      return value != props.user_id}))
    axios({
      method: "patch",
      url: `https://${process.env.hostname}/teams/${props.team_id}`,
      headers: {
        "Content-type": "Application/json",
        Authorization: `Bearer ${cookies.get("auth")}`,
      },
      data: { users: props.teammates.filter(function(value, index, arr){ 
        return value != props.user_id;
    }) },
    }).then(function (response) {
      router.reload();
    })
    .catch(function (error) {
			if (error.response) {
				console.log(error.response);
			}
			})
  }

  var captain;
  var position;
  var remove;


  // const { isOpen: , onOpen, onClose } = useDisclosure();
  // const { isOpen: isOpened, onOpen: onOpened, onClose: onClosed,} = useDisclosure();

  if (props.captain) {
    // leave = <Button colorScheme="green" border="0" cursor="pointer" onClick={() => leave()}>Напусни</Button>
    position = "Капитан";
  } else if (props.player) {
    captain = (
      <Button
        colorScheme="red"
        border="0"
        cursor="pointer"
        onClick={() => leave()}
      >
        Напусни
      </Button>
    );
    position = "Участник";
  } else if (props.teammate) {
    captain = (
      <Button
        mb={3}
        colorScheme="green"
        border="0"
        cursor="pointer"
        onClick={() => makecaptain(props)}
      >
        Направи капитан
      </Button>
    );
    remove = (
      <Button
        colorScheme="red"
        border="0"
        cursor="pointer"
        onClick={() => deletePlayer(props)}
      >
        Премахни
      </Button>
    );
    position = "Участник";
  } else if (props.outside) {
    position = "Участник";
  }

  return (
    <Flex
      background="white"
      p="15px"
      flexDirection="column"
      flexWrap="wrap"
      justifyContent="center"
      w="350px"
      h="auto"
      m="15px"
      rounded="lg"
      overflow="hidden"
    >
      <Flex
        paddingBottom={["10px", "10px", "10px", "25px"]}
        justifyContent="center"
        flexDirection="column"
      >
        <Text
          wordBreak="break-word"
          m="0"
          pt={["0", "0", "0", "15px"]}
          fontFamily="Rubik"
        >
          {props.name}
        </Text>
        <Text
          wordBreak="break-word"
          m="0"
          pt={["5px", "5px", "10px", "15px"]}
          fontFamily="Rubik"
        >
          {position}
        </Text>
      </Flex>
      <Flex flexDirection="column">
        {captain}
        {remove}
        {leave}

        {/* <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalCloseButton
                            _focus={{
                              outline: "none",
                              border: "0",
                              background: "transparent",
                            }}
                          />
                          <ModalHeader>
                            Сигурни ли сте, че искате да запазите?
                          </ModalHeader>

                          <ModalFooter>
                            <Button
                              colorScheme="red"
                              border="0"
                              cursor="pointer"
                              mr={3}
                              onClick={onClose}
                            >
                              Откажи
                            </Button>
                            <Button
                              colorScheme="green"
                              border="0"
                              cursor="pointer"
                              isLoading={props.isSubmitting}
                              onClick={() => {
                                props.submitForm();
                                onClose();
                                router.reload();
                              }}
                              type="submit"
                            >
                              Промени
                            </Button>
                          </ModalFooter>
                        </ModalContent>
        </Modal>
        <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalCloseButton
                            _focus={{
                              outline: "none",
                              border: "0",
                              background: "transparent",
                            }}
                          />
                          <ModalHeader>
                            Сигурни ли сте, че искате да запазите?
                          </ModalHeader>

                          <ModalFooter>
                            <Button
                              colorScheme="red"
                              border="0"
                              cursor="pointer"
                              mr={3}
                              onClick={onClose}
                            >
                              Откажи
                            </Button>
                            <Button
                              colorScheme="green"
                              border="0"
                              cursor="pointer"
                              isLoading={props.isSubmitting}
                              onClick={() => {
                                props.submitForm();
                                onClose();
                                router.reload();
                              }}
                              type="submit"
                            >
                              Промени
                            </Button>
                          </ModalFooter>
                        </ModalContent>
        </Modal>

                      <Modal isOpen={isOpened} onClose={onClosed}>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalCloseButton
                            _focus={{
                              outline: "none",
                              border: "0",
                              background: "transparent",
                            }}
                          />
                          <ModalHeader>
                            Сигурни ли сте, че искате да изтриете отбора?
                          </ModalHeader>

                          <ModalFooter>
                            <Button
                              colorScheme="green"
                              border="0"
                              cursor="pointer"
                              mr={3}
                              onClick={onClosed}
                            >
                              Откажи
                            </Button>
                            <Button
                              colorScheme="red"
                              border="0"
                              cursor="pointer"
                              isLoading={props.isSubmitting}
                              onClick={() => {
                                handleDelete();
                                onClosed();
                                router.push("/?t=success");
                              }}
                              type="submit"
                            >
                              Изтрий
                            </Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal> */}
      </Flex>
    </Flex>
  );
};

export default Player;
