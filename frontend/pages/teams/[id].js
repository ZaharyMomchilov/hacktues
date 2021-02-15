import axios from "axios";
import Cookies from "universal-cookie";
import {
  Box,
  Avatar,
  Flex,
  Text,
  Input,
  Textarea,
  Tag,
  TagLabel,
  useToast,
  Button,
} from "@chakra-ui/react";
import { Formik, Field, Form, useFormikContext } from "formik";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import labels from "../../components/teams/icons";
import _ from "lodash";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import { CUIAutoComplete } from "../../components/autocomplete/chakra-ui-autocomplete.esm";
import { useState, useCallback, useEffect } from "react";
import Player from "../../components/teams/player";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import React, { useMemo } from "react";

function Teams(props) {
  const router = useRouter();
  const toast = useToast();
  const cookies = new Cookies();
  var confirmed;

  if (props.teams.confirmed) {
    confirmed = <span style={{ color: "green" }}>Да</span>;
  } else if (!props.teams.confirmed) {
    confirmed = <span style={{ color: "red" }}>Не</span>;
  }

  var j;
  var tech = [];

  var players = [];
  var ids = [];

  if (cookies.get("auth")) {
    if (props.user.is_captain && props.user.team_set[0] == router.query.id) {
      for (var j = 0; j < props.teams.users.length; j++) {
        // console.log(props.teams.users[j].id);
        ids.push(props.teams.users[j].id);
      }

      players.push(
        <Player
          captain={props.user.is_captain}
          user_id={props.user.id}
          team_id={props.user.team_set[0]}
          name={`${props.user.first_name} ${props.user.last_name}`}
        ></Player>
      );

      for (var k = 0; k < props.teams.users.length; k++) {
        if (props.user.id != props.teams.users[k].id) {
          players.push(
            <Player
              key={k}
              teammates={ids}
              teammate
              user_id={props.teams.users[k].id}
              team_id={props.teams.id}
              name={`${props.teams.users[k].first_name} ${props.teams.users[k].last_name} - ${props.teams.users[k].form}`}
            ></Player>
          );
        }
      }

      if (router.query.id == props.user.team_set[0]) {
        const technology = labels;

        var tech = [];

        var chosenTech = props.teams.technologies;
        var alreadyChosenTech = props.teams.technologies;

        const tagRefs = React.useRef([]);
        tagRefs.current = technology.map(
          (ref, index) => (tagRefs.current[index] = React.createRef())
        );

        technology.map((data, index) => {
          if (alreadyChosenTech.includes(data.label)) {
            tech.push(
              <Tag
                type="submit"
                onClick={function () {
                  if (!chosenTech.includes(data.label)) {
                    chosenTech.push(data.label);
                    tagRefs.current[index].current.style.background =
                      "rgb(0, 255, 255)";
                    tagRefs.current[index].current.style.boxShadow =
                      "0px 0px 5px";
                  } else if (chosenTech.includes(data.label)) {
                    chosenTech.indexOf(data.label) !== -1 &&
                      chosenTech.splice(chosenTech.indexOf(data.label), 1);
                    tagRefs.current[index].current.style.background =
                      data.color;
                    tagRefs.current[index].current.style.boxShadow = "none";
                  }
                }}
                ref={tagRefs.current[index]}
                cursor="pointer"
                key={data.id}
                mt="5px"
                mr="5px"
                boxShadow="0px 0px 5px"
                background="rgb(0, 255, 255)"
              >
                <TagLabel textColor="white" fontFamily="Rubik">
                  {data.label}
                </TagLabel>
              </Tag>
            );
          } else {
            tech.push(
              <Tag
                type="submit"
                onClick={function () {
                  if (!chosenTech.includes(data.label)) {
                    chosenTech.push(data.label);
                    tagRefs.current[index].current.style.background =
                      "rgb(0, 255, 255)";
                    tagRefs.current[index].current.style.boxShadow =
                      "0px 0px 5px";
                  } else if (chosenTech.includes(data.label)) {
                    chosenTech.indexOf(data.label) !== -1 &&
                      chosenTech.splice(chosenTech.indexOf(data.label), 1);
                    tagRefs.current[index].current.style.background =
                      data.color;
                    tagRefs.current[index].current.style.boxShadow = "none";
                  }
                }}
                ref={tagRefs.current[index]}
                cursor="pointer"
                key={data.id}
                mt="5px"
                mr="5px"
                background={data.color}
              >
                <TagLabel textColor="white" fontFamily="Rubik">
                  {data.label}
                </TagLabel>
              </Tag>
            );
          }
        });

        const { isOpen, onOpen, onClose } = useDisclosure();
        const {
          isOpen: isOpened,
          onOpen: onOpened,
          onClose: onClosed,
        } = useDisclosure();

        var users = props.users;
        var items = [];
        var i;

        for (i = 0; i < users.length; i++) {
          items.push({
            value: users[i].id,
            label: `${users[i].first_name} ${users[i].last_name} - ${users[i].form}`,
          });
        }
        var people;
        const [pickerItems, setPickerItems] = React.useState(items);
        const [selectedItems, setSelectedItems] = React.useState([]);

        people = selectedItems;
		
		const reachedMax = React.useMemo(() => selectedItems.length >= 4 || props.teams.users.length == 5 || selectedItems.length + props.teams.users.length == 5 , [
			selectedItems,
		  ]);
		  const [autocomplete, setAutocomplete] = React.useState(null);
		
		  React.useEffect(() => {
			const nodeList = document.querySelectorAll(
			  "input[id^=downshift][id*=input]"
			);
			if (nodeList && nodeList.length > 0) {
			  setAutocomplete(nodeList[0]);
			}
		  }, []);
		
		  React.useEffect(() => {
			if (!autocomplete) {
			  return;
			}
			autocomplete.value = "";
			if (reachedMax) {
			  autocomplete.blur();
			}
		  }, [selectedItems]);

        const handleSelectedItemsChange = (selectedItems) => {
          if (selectedItems) {
            setSelectedItems(selectedItems);
          }
        };

        const handleDelete = (props) => {
          axios({
            method: "delete",
            url: `https://${process.env.hostname}/teams/${router.query.id}/`,
            headers: {
              "Content-type": "Application/json",
              Authorization: `Bearer ${cookies.get("auth")}`,
            },
          }).catch(function (error) {
            if (error.response) {
              console.log(error.response);
              // for (const [key, value] of Object.entries(error.response.data)) {
              // 	console.log(`${key}: ${value}`);
              // 	actions.setFieldError(key, value)
              // }
            }
          });
        };

        return (
          <Box
            paddingBottom="300px"
            maxW="960px"
            marginLeft="auto"
            marginRight="auto"
          >
            <Flex
              backgroundColor="white"
              p="25px"
              rounded="lg"
              flexDirection="column"
              flexWrap="wrap"
              margin="50px"
            >
              <Flex>
                <Avatar name={props.teams.name} />
                <Text fontSize="15px" fontFamily="Rubik" pl="15px">
                  {props.teams.name}
                </Text>
              </Flex>
              <Formik
                initialValues={{
                  name: props.teams.name,
                  project_name: props.teams.project_name,
                  github_link: props.teams.github_link,
                  project_description: props.teams.project_description,
                }}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    if (people.length > 4) {
                      actions.setSubmitting(false);
                      actions.setFieldError(
                        "users",
                        "Твърде много участници избрани"
                      );
                    }
					var alreadySelected = []
					for(let k = 0; k < props.teams.users.length; k++){	
						alreadySelected.push(props.teams.users[k].id)
					}
					values["users"] = alreadySelected
                    // let selected = selectedItems.map((a) => a.value);
					for(let p = 0; p < selectedItems.length; p++){
						// console.log(selectedItems[p])
						values["users"].push(selectedItems[p].value)
					}
                    values["technologies"] = chosenTech;
                    var data = JSON.stringify(values, null, 1);
					console.log("data: " + data)
                    axios({
                      method: "put",
                      url: `https://${process.env.hostname}/teams/${router.query.id}/`,
                      headers: {
                        "Content-type": "Application/json",
                        Authorization: `Bearer ${cookies.get("auth")}`,
                      },
                      data: data,
                    })
                      .then(function (response) {
                        // toast({ title: "Промени по отбора", description: "Промените бяха направени успешно.", status: "success", duration: 4500})
                      })
                      .catch(function (error) {
                        if (error.response) {
                          console.log(error.response);
                          // for (const [key, value] of Object.entries(error.response.data)) {
                          // 	console.log(`${key}: ${value}`);
                          // 	actions.setFieldError(key, value)
                          // }
                        }
                      });
                    actions.setSubmitting(false);
                  }, 1000);
                }}
              >
                {(props) => (
                  <Form
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      paddingTop: "10px",
                    }}
                    onSubmit={props.handleSubmit}
                  >
                    <Field name="name">
                      {({ field, form }) => (
                        <FormControl
                          isDisabled
                          flexGrow={1}
                          w={["100%", "100%", "33%", "33%", "33%"]}
                          mr="5px"
                          isRequired
                          isInvalid={
                            form.errors.first_name && form.touched.first_name
                          }
                        >
                          <FormLabel fontFamily="Rubik" fontSize="15px">
                            Име на отбора
                          </FormLabel>
                          <Input
                            _invalid={{
                              boxShadow: "0 1px 0 0 #E53E3E",
                              borderColor: "#E53E3E",
                            }}
                            borderColor="#a5cf9f"
                            boxShadow="0px 1px 0px 0px #a5cf9f"
                            variant="flushed"
                            borderTop={0}
                            borderRight={0}
                            borderLeft={0}
                            {...field}
                            id="name"
                          />
                          <FormErrorMessage border={0}>
                            {form.errors.first_name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="project_name">
                      {({ field, form }) => (
                        <FormControl
                          flexGrow={1}
                          w={["100%", "100%", "33%", "33%", "33%"]}
                          mr="5px"
                          isInvalid={
                            form.errors.first_name && form.touched.first_name
                          }
                        >
                          <FormLabel fontFamily="Rubik" fontSize="15px">
                            Име на проекта
                          </FormLabel>
                          <Input
                            _invalid={{
                              boxShadow: "0 1px 0 0 #E53E3E",
                              borderColor: "#E53E3E",
                            }}
                            borderColor="#a5cf9f"
                            boxShadow="0px 1px 0px 0px #a5cf9f"
                            variant="flushed"
                            borderTop={0}
                            borderRight={0}
                            borderLeft={0}
                            {...field}
                            id="project_name"
                          />
                          <FormErrorMessage border={0}>
                            {form.errors.first_name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="project_description">
                      {({ field, form }) => (
                        <FormControl
                          flexGrow={1}
                          w="100%"
                          mr="5px"
                          isInvalid={form.errors.email && form.touched.email}
                        >
                          <FormLabel
                            paddingTop="15px"
                            paddingBottom="5px"
                            fontFamily="Rubik"
                            fontSize="15px"
                            htmlFor="email"
                          >
                            Описание на проекта
                          </FormLabel>
                          <Textarea
                            resize="none"
                            fontSize="14px"
                            fontFamily="Rubik"
                            _invalid={{
                              boxShadow: "0 1px 0 0 #E53E3E",
                              borderColor: "#E53E3E",
                            }}
                            borderColor="#a5cf9f"
                            boxShadow="0px 1px 0px 0px #a5cf9f"
                            variant="flushed"
                            borderTop={0}
                            borderRight={0}
                            borderLeft={0}
                            {...field}
                            id="project_description"
                          />
                          <FormErrorMessage border={0}>
                            {form.errors.email}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="github_link">
                      {({ field, form }) => (
                        <FormControl
                          flexGrow={1}
                          w="100%"
                          mr="5px"
                          isInvalid={
                            form.errors.last_name && form.touched.last_name
                          }
                        >
                          <FormLabel
                            fontFamily="Rubik"
                            fontSize="15px"
                            htmlFor="text"
                          >
                            Линк/ове към GitHub хранилище/а:
                          </FormLabel>
                          <Input
                            _invalid={{
                              boxShadow: "0 1px 0 0 #E53E3E",
                              borderColor: "#E53E3E",
                            }}
                            borderColor="#a5cf9f"
                            boxShadow="0px 1px 0px 0px #a5cf9f"
                            variant="flushed"
                            borderTop={0}
                            borderRight={0}
                            borderLeft={0}
                            {...field}
                            id="github_link"
                          />
                          <FormErrorMessage border={0}>
                            {form.errors.last_name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="users">
                      {({ field, form }) => (
                        <FormControl
                          paddingTop="15px"
                          flexGrow={1}
                          w="100%"
                          mr="5px"
                          isInvalid={form.errors.users && form.touched.users}
                        >
                          <FormLabel
                            fontFamily="Rubik"
                            fontSize="15px"
                            htmlFor="text"
                          >
                            Избери участници
                          </FormLabel>
                          <CUIAutoComplete
                            id="users"
                            {...field}
                            placeholder={
                        reachedMax
                          ? "Достигнат е лимитът на участници"
                          : "Добави участници"
                      }
                      inputStyleProps={
                        reachedMax
                          ? {
                              pointerEvents: "none",
                            }
                          : {}
                      }
                      listStyleProps={
                        reachedMax
                          ? {
                              display: "none",
                            }
                          : {}
                      }
                            toggleButtonStyleProps={{ display: "none" }}
                            tagStyleProps={{
                              padding: "5px",
                              sx: { "& button": { border: "none" } },
                            }}
                            items={pickerItems}
                            selectedItems={selectedItems}
                            onSelectedItemsChange={(changes) =>
                              handleSelectedItemsChange(changes.selectedItems)
                            }
                          />
                          <FormErrorMessage paddingBottom="15px" border={0}>
                            {form.errors.users}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="tech">
                      {({ field, form }) => (
                        <FormControl
                          flexGrow={1}
                          w="100%"
                          mr="5px"
                          isInvalid={
                            form.errors.last_name && form.touched.last_name
                          }
                        >
                          <FormLabel
                            fontFamily="Rubik"
                            fontSize="15px"
                            htmlFor="text"
                          >
                            Технологии
                          </FormLabel>
                          {/* <Input _invalid={{boxShadow: "0 1px 0 0 #E53E3E", borderColor:"#E53E3E"}} borderColor="#a5cf9f" boxShadow= "0px 1px 0px 0px #a5cf9f" variant="flushed" borderTop={0} borderRight={0} borderLeft={0} {...field} id="github_link" /> */}
                          	<Flex flexDirection="row" flexWrap="wrap">
						  		{tech}
						  	</Flex>
                          <FormErrorMessage border={0}>
                            {form.errors.last_name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    {/* <Flex flexDirection="column" flexWrap="wrap">
						<Text fontFamily="Rubik" fontSize="15px" m={0} p={0} pt="15px">Технологии</Text>
						<Flex paddingTop="15px" flexDirection="row" flexWrap="wrap">	
							  {tech}
						</Flex>
					</Flex> */}

                    <Flex flexDirection="column" flexWrap="wrap">
                      <Text fontFamily="Rubik" fontSize="15px">
                        Потвърден:&nbsp;{confirmed}
                      </Text>
                      {/* <AutoSave props={props} debounceMs={2000} /> */}

                      <Flex flexDirection="row" wrap="wrap">
                        <Button
                          mt={4}
                          mr={3}
                          colorScheme="red"
                          border="0"
                          cursor="pointer"
                          onClick={onOpened}
                        >
                          Изтрий отбора
                        </Button>
                        <Button
                          mt={4}
                          colorScheme="green"
                          border="0"
                          cursor="pointer"
                          onClick={onOpen}
                        >
                          Запази промените
                        </Button>
                      </Flex>

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
                      </Modal>
                    </Flex>
                  </Form>
                )}
              </Formik>
            </Flex>
            <Flex
              margin="50px"
              p="25px"
              rounded="lg"
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
            >
              {players}
            </Flex>
          </Box>
        );
      }
    } else if (
      props.user.is_captain == false &&
      props.user.team_set[0] == router.query.id
    ) {
      players.push(
        <Player
          player
          user_id={props.user.id}
          team_id={props.user.team_set[0]}
          name={`${props.user.first_name} ${props.user.last_name}`}
        ></Player>
      );
      console.log(props.user.id);
      for (var k = 0; k < props.teams.users.length; k++) {
        if (
          props.user.id != props.teams.users[k].id &&
          props.user.is_captain == props.teams.users[k].is_captain
        ) {
          // console.log(props);

          players.push(
            <Player
              key={k}
              outside
              user_id={props.teams.users[k].id}
              team_id={props.teams.id}
              name={`${props.teams.users[k].first_name} ${props.teams.users[k].last_name} - ${props.teams.users[k].form}`}
            ></Player>
          );
        } else if (props.teams.users[k].is_captain) {
          players.push(
            <Player
              key={k}
              captain
              user_id={props.teams.users[k].id}
              team_id={props.teams.id}
              name={`${props.teams.users[k].first_name} ${props.teams.users[k].last_name} - ${props.teams.users[k].form}`}
            ></Player>
          );
        }
      }

      props.teams.technologies.map((data, index) => {
        for (j = 0; j < labels.length; j++)
          if (labels[j].label == data) {
            tech[j] = (
              <Tag
                key={index}
                mt="5px"
                mr="5px"
                background={labels[j].color}
                key={j}
              >
                <TagLabel textColor="white" fontFamily="Rubik">
                  {data}
                </TagLabel>
              </Tag>
            );
          }
      });

      return (
        <Box
          paddingBottom="300px"
          maxW="960px"
          marginLeft="auto"
          marginRight="auto"
        >
          <Flex
            backgroundColor="white"
            p="25px"
            rounded="lg"
            flexDirection="column"
            flexWrap="wrap"
            margin="50px"
          >
            <Flex>
              <Avatar name={props.teams.name} />
              <Text fontSize="md" pl="15px">
                {props.teams.name}
              </Text>
            </Flex>
            <Formik
              initialValues={{
                name: props.teams.name,
                project_name: props.teams.project_name,
                github_link: props.teams.github_link,
                project_description: props.teams.project_description,
              }}
            >
              {(props) => (
                <Form
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    paddingTop: "10px",
                  }}
                  onSubmit={props.handleSubmit}
                >
                  <Field name="name">
                    {({ field, form }) => (
                      <FormControl
                        flexGrow={1}
                        w={["100%", "100%", "33%", "33%", "33%"]}
                        mr="5px"
                        isDisabled
                        isInvalid={
                          form.errors.first_name && form.touched.first_name
                        }
                      >
                        <FormLabel fontFamily="Rubik" fontSize="15px">
                          Име на отбора
                        </FormLabel>
                        <Input
                          isDisabled
                          _invalid={{
                            boxShadow: "0 1px 0 0 #E53E3E",
                            borderColor: "#E53E3E",
                          }}
                          borderColor="#a5cf9f"
                          boxShadow="0px 1px 0px 0px #a5cf9f"
                          variant="flushed"
                          borderTop={0}
                          borderRight={0}
                          borderLeft={0}
                          {...field}
                          id="name"
                        />
                        <FormErrorMessage border={0}>
                          {form.errors.first_name}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="project_name">
                    {({ field, form }) => (
                      <FormControl
                        flexGrow={1}
                        w={["100%", "100%", "33%", "33%", "33%"]}
                        mr="5px"
                        isDisabled
                        isInvalid={
                          form.errors.first_name && form.touched.first_name
                        }
                      >
                        <FormLabel fontFamily="Rubik" fontSize="15px">
                          Име на проекта
                        </FormLabel>
                        <Input
                          isDisabled
                          _invalid={{
                            boxShadow: "0 1px 0 0 #E53E3E",
                            borderColor: "#E53E3E",
                          }}
                          borderColor="#a5cf9f"
                          boxShadow="0px 1px 0px 0px #a5cf9f"
                          variant="flushed"
                          borderTop={0}
                          borderRight={0}
                          borderLeft={0}
                          {...field}
                          id="project_name"
                        />
                        <FormErrorMessage border={0}>
                          {form.errors.first_name}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="project_description">
                    {({ field, form }) => (
                      <FormControl
                        flexGrow={1}
                        w="100%"
                        mr="5px"
                        isDisabled
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <FormLabel
                          paddingTop="15px"
                          paddingBottom="5px"
                          fontFamily="Rubik"
                          fontSize="15px"
                          htmlFor="email"
                        >
                          Описание на проекта
                        </FormLabel>
                        <Textarea
                          resize="none"
                          fontSize="14px"
                          fontFamily="Rubik"
                          isDisabled
                          _invalid={{
                            boxShadow: "0 1px 0 0 #E53E3E",
                            borderColor: "#E53E3E",
                          }}
                          borderColor="#a5cf9f"
                          boxShadow="0px 1px 0px 0px #a5cf9f"
                          variant="flushed"
                          borderTop={0}
                          borderRight={0}
                          borderLeft={0}
                          {...field}
                          id="project_description"
                        />
                        <FormErrorMessage border={0}>
                          {form.errors.email}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="github_link">
                    {({ field, form }) => (
                      <FormControl
                        flexGrow={1}
                        w="100%"
                        mr="5px"
                        isDisabled
                        isInvalid={
                          form.errors.last_name && form.touched.last_name
                        }
                      >
                        <FormLabel
                          fontFamily="Rubik"
                          fontSize="15px"
                          htmlFor="text"
                        >
                          Линк/ове към GitHub хранилище/а:
                        </FormLabel>
                        <Input
                          isDisabled
                          _invalid={{
                            boxShadow: "0 1px 0 0 #E53E3E",
                            borderColor: "#E53E3E",
                          }}
                          borderColor="#a5cf9f"
                          boxShadow="0px 1px 0px 0px #a5cf9f"
                          variant="flushed"
                          borderTop={0}
                          borderRight={0}
                          borderLeft={0}
                          {...field}
                          id="github_link"
                        />
                        <FormErrorMessage border={0}>
                          {form.errors.last_name}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Flex
                    paddingTop="15px"
                    flexDirection="row"
                    flexWrap="wrap"
                    width="100%"
                  >
                    {tech}
                  </Flex>
                </Form>
              )}
            </Formik>
            <Text>Потвърден:&nbsp;{confirmed}</Text>
          </Flex>

          <Flex
            margin="50px"
            p="25px"
            rounded="lg"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            {players}
          </Flex>
        </Box>
      );
    } else {
      for (var k = 0; k < props.teams.users.length; k++) {
        if (!props.teams.users[k].is_captain) {
          players.push(
            <Player
              key={k}
              outside
              user_id={props.teams.users[k].id}
              team_id={props.teams.id}
              name={`${props.teams.users[k].first_name} ${props.teams.users[k].last_name} - ${props.teams.users[k].form}`}
            ></Player>
          );
        } else if (props.teams.users[k].is_captain) {
          players.push(
            <Player
              key={k}
              captain
              user_id={props.teams.users[k].id}
              team_id={props.teams.id}
              name={`${props.teams.users[k].first_name} ${props.teams.users[k].last_name} - ${props.teams.users[k].form}`}
            ></Player>
          );
        }
      }

      props.teams.technologies.map((data, index) => {
        for (j = 0; j < labels.length; j++)
          if (labels[j].label == data) {
            tech[j] = (
              <Tag
                key={index}
                mt="5px"
                mr="5px"
                background={labels[j].color}
                key={j}
              >
                <TagLabel textColor="white" fontFamily="Rubik">
                  {data}
                </TagLabel>
              </Tag>
            );
          }
      });

      return (
        <Box
          paddingBottom="300px"
          maxW="960px"
          marginLeft="auto"
          marginRight="auto"
        >
          <Flex
            backgroundColor="white"
            p="25px"
            rounded="lg"
            flexDirection="column"
            flexWrap="wrap"
            margin="50px"
          >
            <Flex>
              <Avatar name={props.teams.name} />
              <Text fontSize="md" pl="15px">
                {props.teams.name}
              </Text>
            </Flex>
            <Formik
              initialValues={{
                name: props.teams.name,
                project_name: props.teams.project_name,
                github_link: props.teams.github_link,
                project_description: props.teams.project_description,
              }}
            >
              {(props) => (
                <Form
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    paddingTop: "10px",
                  }}
                  onSubmit={props.handleSubmit}
                >
                  <Field name="name">
                    {({ field, form }) => (
                      <FormControl
                        flexGrow={1}
                        w={["100%", "100%", "33%", "33%", "33%"]}
                        mr="5px"
                        isDisabled
                        isInvalid={
                          form.errors.first_name && form.touched.first_name
                        }
                      >
                        <FormLabel fontFamily="Rubik" fontSize="15px">
                          Име на отбора
                        </FormLabel>
                        <Input
                          isDisabled
                          _invalid={{
                            boxShadow: "0 1px 0 0 #E53E3E",
                            borderColor: "#E53E3E",
                          }}
                          borderColor="#a5cf9f"
                          boxShadow="0px 1px 0px 0px #a5cf9f"
                          variant="flushed"
                          borderTop={0}
                          borderRight={0}
                          borderLeft={0}
                          {...field}
                          id="name"
                        />
                        <FormErrorMessage border={0}>
                          {form.errors.first_name}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="project_name">
                    {({ field, form }) => (
                      <FormControl
                        flexGrow={1}
                        w={["100%", "100%", "33%", "33%", "33%"]}
                        mr="5px"
                        isDisabled
                        isInvalid={
                          form.errors.first_name && form.touched.first_name
                        }
                      >
                        <FormLabel fontFamily="Rubik" fontSize="15px">
                          Име на проекта
                        </FormLabel>
                        <Input
                          isDisabled
                          _invalid={{
                            boxShadow: "0 1px 0 0 #E53E3E",
                            borderColor: "#E53E3E",
                          }}
                          borderColor="#a5cf9f"
                          boxShadow="0px 1px 0px 0px #a5cf9f"
                          variant="flushed"
                          borderTop={0}
                          borderRight={0}
                          borderLeft={0}
                          {...field}
                          id="project_name"
                        />
                        <FormErrorMessage border={0}>
                          {form.errors.first_name}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="project_description">
                    {({ field, form }) => (
                      <FormControl
                        flexGrow={1}
                        w="100%"
                        mr="5px"
                        isDisabled
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <FormLabel
                          paddingTop="15px"
                          paddingBottom="5px"
                          fontFamily="Rubik"
                          fontSize="15px"
                          htmlFor="email"
                        >
                          Описание на проекта
                        </FormLabel>
                        <Textarea
                          resize="none"
                          fontSize="14px"
                          fontFamily="Rubik"
                          isDisabled
                          _invalid={{
                            boxShadow: "0 1px 0 0 #E53E3E",
                            borderColor: "#E53E3E",
                          }}
                          borderColor="#a5cf9f"
                          boxShadow="0px 1px 0px 0px #a5cf9f"
                          variant="flushed"
                          borderTop={0}
                          borderRight={0}
                          borderLeft={0}
                          {...field}
                          id="project_description"
                        />
                        <FormErrorMessage border={0}>
                          {form.errors.email}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="github_link">
                    {({ field, form }) => (
                      <FormControl
                        flexGrow={1}
                        w="100%"
                        mr="5px"
                        isDisabled
                        isInvalid={
                          form.errors.last_name && form.touched.last_name
                        }
                      >
                        <FormLabel
                          fontFamily="Rubik"
                          fontSize="15px"
                          htmlFor="text"
                        >
                          Линк/ове към GitHub хранилище/а:
                        </FormLabel>
                        <Input
                          isDisabled
                          _invalid={{
                            boxShadow: "0 1px 0 0 #E53E3E",
                            borderColor: "#E53E3E",
                          }}
                          borderColor="#a5cf9f"
                          boxShadow="0px 1px 0px 0px #a5cf9f"
                          variant="flushed"
                          borderTop={0}
                          borderRight={0}
                          borderLeft={0}
                          {...field}
                          id="github_link"
                        />
                        <FormErrorMessage border={0}>
                          {form.errors.last_name}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Flex
                    paddingTop="15px"
                    flexDirection="row"
                    flexWrap="wrap"
                    width="100%"
                  >
                    {tech}
                  </Flex>
                  <Flex flexDirection="column" flexWrap="wrap">
                    <Text fontFamily="Rubik">Потвърден:&nbsp;{confirmed}</Text>
                  </Flex>
                </Form>
              )}
            </Formik>
          </Flex>

          <Flex
            margin="50px"
            p="25px"
            rounded="lg"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            {players}
          </Flex>
        </Box>
      );
    }
  } else {
    for (var k = 0; k < props.teams.users.length; k++) {
      if (!props.teams.users[k].is_captain) {
        players.push(
          <Player
            key={k}
            outside
            user_id={props.teams.users[k].id}
            team_id={props.teams.id}
            name={`${props.teams.users[k].first_name} ${props.teams.users[k].last_name} - ${props.teams.users[k].form}`}
          ></Player>
        );
      } else if (props.teams.users[k].is_captain) {
        players.push(
          <Player
            key={k}
            captain
            user_id={props.teams.users[k].id}
            team_id={props.teams.id}
            name={`${props.teams.users[k].first_name} ${props.teams.users[k].last_name} - ${props.teams.users[k].form}`}
          ></Player>
        );
      }
    }

    props.teams.technologies.map((data, index) => {
      for (j = 0; j < labels.length; j++)
        if (labels[j].label == data) {
          tech[j] = (
            <Tag
              key={index}
              mt="5px"
              mr="5px"
              background={labels[j].color}
              key={j}
            >
              <TagLabel textColor="white" fontFamily="Rubik">
                {data}
              </TagLabel>
            </Tag>
          );
        }
    });

    return (
      <Box
        paddingBottom="300px"
        maxW="960px"
        marginLeft="auto"
        marginRight="auto"
      >
        <Flex
          backgroundColor="white"
          p="25px"
          rounded="lg"
          flexDirection="column"
          flexWrap="wrap"
          margin="50px"
        >
          <Flex>
            <Avatar name={props.teams.name} />
            <Text fontSize="md" pl="15px">
              {props.teams.name}
            </Text>
          </Flex>
          <Formik
            initialValues={{
              name: props.teams.name,
              project_name: props.teams.project_name,
              github_link: props.teams.github_link,
              project_description: props.teams.project_description,
            }}
          >
            {(props) => (
              <Form
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  paddingTop: "10px",
                }}
                onSubmit={props.handleSubmit}
              >
                <Field name="name">
                  {({ field, form }) => (
                    <FormControl
                      flexGrow={1}
                      w={["100%", "100%", "33%", "33%", "33%"]}
                      mr="5px"
                      isDisabled
                      isInvalid={
                        form.errors.first_name && form.touched.first_name
                      }
                    >
                      <FormLabel fontFamily="Rubik" fontSize="15px">
                        Име на отбора
                      </FormLabel>
                      <Input
                        isDisabled
                        _invalid={{
                          boxShadow: "0 1px 0 0 #E53E3E",
                          borderColor: "#E53E3E",
                        }}
                        borderColor="#a5cf9f"
                        boxShadow="0px 1px 0px 0px #a5cf9f"
                        variant="flushed"
                        borderTop={0}
                        borderRight={0}
                        borderLeft={0}
                        {...field}
                        id="name"
                      />
                      <FormErrorMessage border={0}>
                        {form.errors.first_name}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="project_name">
                  {({ field, form }) => (
                    <FormControl
                      flexGrow={1}
                      w={["100%", "100%", "33%", "33%", "33%"]}
                      mr="5px"
                      isDisabled
                      isInvalid={
                        form.errors.first_name && form.touched.first_name
                      }
                    >
                      <FormLabel fontFamily="Rubik" fontSize="15px">
                        Име на проекта
                      </FormLabel>
                      <Input
                        isDisabled
                        _invalid={{
                          boxShadow: "0 1px 0 0 #E53E3E",
                          borderColor: "#E53E3E",
                        }}
                        borderColor="#a5cf9f"
                        boxShadow="0px 1px 0px 0px #a5cf9f"
                        variant="flushed"
                        borderTop={0}
                        borderRight={0}
                        borderLeft={0}
                        {...field}
                        id="project_name"
                      />
                      <FormErrorMessage border={0}>
                        {form.errors.first_name}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="project_description">
                  {({ field, form }) => (
                    <FormControl
                      flexGrow={1}
                      w="100%"
                      mr="5px"
                      isDisabled
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <FormLabel
                        paddingTop="15px"
                        paddingBottom="5px"
                        fontFamily="Rubik"
                        fontSize="15px"
                        htmlFor="email"
                      >
                        Описание на проекта
                      </FormLabel>
                      <Textarea
                        resize="none"
                        fontSize="14px"
                        fontFamily="Rubik"
                        isDisabled
                        _invalid={{
                          boxShadow: "0 1px 0 0 #E53E3E",
                          borderColor: "#E53E3E",
                        }}
                        borderColor="#a5cf9f"
                        boxShadow="0px 1px 0px 0px #a5cf9f"
                        variant="flushed"
                        borderTop={0}
                        borderRight={0}
                        borderLeft={0}
                        {...field}
                        id="project_description"
                      />
                      <FormErrorMessage border={0}>
                        {form.errors.email}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="github_link">
                  {({ field, form }) => (
                    <FormControl
                      flexGrow={1}
                      w="100%"
                      mr="5px"
                      isDisabled
                      isInvalid={
                        form.errors.last_name && form.touched.last_name
                      }
                    >
                      <FormLabel
                        fontFamily="Rubik"
                        fontSize="15px"
                        htmlFor="text"
                      >
                        Линк/ове към GitHub хранилище/а:
                      </FormLabel>
                      <Input
                        isDisabled
                        _invalid={{
                          boxShadow: "0 1px 0 0 #E53E3E",
                          borderColor: "#E53E3E",
                        }}
                        borderColor="#a5cf9f"
                        boxShadow="0px 1px 0px 0px #a5cf9f"
                        variant="flushed"
                        borderTop={0}
                        borderRight={0}
                        borderLeft={0}
                        {...field}
                        id="github_link"
                      />
                      <FormErrorMessage border={0}>
                        {form.errors.last_name}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Flex
                  paddingTop="15px"
                  flexDirection="row"
                  flexWrap="wrap"
                  width="100%"
                >
                  {tech}
                </Flex>
                <Flex flexDirection="column" flexWrap="wrap">
                  <Text fontFamily="Rubik">Потвърден:&nbsp;{confirmed}</Text>
                </Flex>
              </Form>
            )}
          </Formik>
        </Flex>

        <Flex
          margin="50px"
          p="25px"
          rounded="lg"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          {players}
        </Flex>
      </Box>
    );
  }
}

export async function getServerSideProps(ctx) {
  const cookies = new Cookies(ctx.req.headers.cookie);

  var response = await axios({
    method: "get",
    url: `http://${process.env.hostname}/teams/${ctx.query.id}/`,
    headers: { "Content-type": "Application/json" },
  }).catch(function (error) {
    if (error.response) {
      console.log(error.response);
    }
  });
  var users = await axios({
    method: "get",
    url: `http://${process.env.hostname}/users/`,
    headers: { "Content-type": "Application/json" },
  }).catch(function (error) {
    if (error.response) {
      console.log(error.response);
    }
  });

  if (cookies.get("auth") != undefined) {
    var response = await axios({
      method: "get",
      url: `http://${process.env.hostname}/teams/${ctx.query.id}/`,
      headers: { "Content-type": "Application/json" },
    }).catch(function (error) {
      if (error.response) {
        console.log(error.response);
      }
    });
    var users = await axios({
      method: "get",
      url: `http://${process.env.hostname}/users/`,
      headers: { "Content-type": "Application/json" },
    }).catch(function (error) {
      if (error.response) {
        console.log(error.response);
      }
    });

    var res = await axios({
      method: "get",
      url: `http://${process.env.hostname}/users/${
        jwt_decode(cookies.get("auth")).user_id
      }`,
      headers: { "Content-type": "Application/json" },
    }).catch(function (error) {
      if (error.response) {
        console.log(error.response);
      }
    });
    var users = users.data.filter(function (item) {
      return (
        item.email !== "-" &&
        item.team_set.length == 0 &&
        item.id != jwt_decode(cookies.get("auth")).user_id &&
        item.first_name != "" &&
        item.last_name != "" &&
        item.is_active != false
      );
    });
    return { props: { teams: response.data, user: res.data, users: users } };
  } else {
    return { props: { teams: response.data } };
  }

  //  captain: captain.data
}

const AutoSave = (props, { debounceMs = 2000 }) => {
  const formik = useFormikContext();
  const [isSaved, setIsSaved] = useState(null);
  const debouncedSubmit = useCallback(
    _.debounce(() => {
      if (formik.isValid) {
        return formik.submitForm().then(() => setIsSaved(true));
      }
    }, debounceMs),
    [formik.submitForm, debounceMs]
  );
  useEffect(() => debouncedSubmit, [debouncedSubmit, formik.values]);
  return (
    <Flex>
      {!!formik.isSubmitting
        ? "Запазване..."
        : isSaved
        ? "Промените бяха запазени"
        : null}
    </Flex>

    /* ? <Button mt={4} colorScheme="green" border="0" cursor="pointer" isLoading>Промени</Button> */
    /* ? <Button mt={4} colorScheme="green" border="0" cursor="pointer" onClick={() => {debouncedSubmit()}} >Промени</Button> */
  );
};

export default Teams;
