import "../styles/globals.css";
import {
  ChakraProvider,
  Box,
  Slide,
  Button,
  Text,
  Flex,
  Link,
} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "keen-slider/keen-slider.min.css";
import "../styles/react-big-calendar.css";
import React, { useEffect, useRef } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { useControllableState } from "@chakra-ui/react";
import NextNprogress from "nextjs-progressbar";
import { motion, useCycle } from "framer-motion";
import Router from "next/router";
const cookies = new Cookies();
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

export const NavProvider = React.createContext(false);
import _ from "lodash";
import { useDimensions } from "../components/navbar/dim";
import { MenuToggle } from "../components/navbar/button";
import Navigation from "../components/navbar/nav";
import { useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/router";
import routerEvents from "next-router-events";

import Head from "next/head";

// Router.events.on('routeChangeComplete', () => NProgress.done())

// axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
// axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

Sentry.init({
  dsn:
    "https://47d68f3b1c084b459d17b4013d403960@o516791.ingest.sentry.io/5623722",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "1200px",
  xl: "1500px",
});

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "../public/background.svg",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      },
    },
  },
  breakpoints,
});

function checkToken(exp) {
  if (Date.now() - 36000000 <= exp.exp * 1000) {
  } else {
    refreshToken();
  }
}

function MyApp({ Component, pageProps }) {
  const [logged, setLogin] = useControllableState({ defaultValue: 0 });
  const [inTeam, setTeam] = useControllableState({ defaultValue: null });
  const [captain, setCaptain] = useControllableState({ defaultValue: null });

  const [isLargerThan797] = useMediaQuery("(min-width: 797px)");

  // const [isOpen, toggleOpen] = useCycle(false, true);
  const [isOpen, toggleOpen] = useControllableState({ defaultValue: false });

  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  var sidebar;
  var variant;
  var dived;

  const closeNav = (props) => {
    // if(props == "/"){
    //   toggleOpen(true);
    // }
    // else{
    toggleOpen(false);
    // }
    // console.log(props);
  };

  const start = (url) => {
    // if(url == "/"){
    //   toggleOpen(true);
    // }
    // else{
    toggleOpen(false);
    // }
  };

  const complete = (url) => {
    if (url.split("/")[1] == "registration") {
      toggleOpen(false);
    } else {
      toggleOpen(false);
    }
  };

  // == "/registration/second_step"

  var router = useRouter();

  useEffect(() => {
    // if(router.pathname == '/'){
    //   toggleOpen(true);
    // }
    // else{
    //   toggleOpen(false);
    // }

    Router.events.on("routeChangeStart", start);
    // Router.events.on('routeChangeComplete', closeNav)
    // routerEvents.on("routeChangeStart", start);
    // routerEvents.on("routeChangeComplete", complete);

    // if (cookies.get("CookieConsent")) {
      if (cookies.get("auth")) {
        setLogin(1);
        checkToken(jwt_decode(cookies.get("auth")));
        if (router.query.t == "success") {
          axios({
            method: "get",
            url: `https://${process.env.hostname}/users/${
              jwt_decode(cookies.get("auth")).user_id
            }/`,
            headers: {
              "Content-type": "Application/json",
              Authorization: `Bearer ${cookies.get("auth")}`,
            },
          })
            .then(function (response) {
              if (_.isEmpty(response.data.team_set)) {
                setTeam(false);
              } else {
                if (response.data.captain) {
                  setCaptain(true);
                  setTeam(response.data.team_set[0]);
                } else {
                  setTeam(response.data.team_set[0]);
                }
                // if(response.data.){

                // }
              }
            })
            .catch(function (error) {
              if (error.response.data.code == "user_not_found") {
                setLogin(0);
                cookies.remove("auth");
                cookies.remove("refresh");
              }
            });
        }
        if (inTeam == null) {
          axios({
            method: "get",
            url: `https://${process.env.hostname}/users/${
              jwt_decode(cookies.get("auth")).user_id
            }/`,
            headers: {
              "Content-type": "Application/json",
              Authorization: `Bearer ${cookies.get("auth")}`,
            },
          })
            .then(function (response) {
              if (_.isEmpty(response.data.team_set)) {
                setTeam(false);
              } else {
                if (response.data.captain) {
                  setCaptain(true);
                  setTeam(response.data.team_set[0]);
                } else {
                  setTeam(response.data.team_set[0]);
                }
                // if(response.data.){

                // }
              }
            })
            .catch(function (error) {
              if (error.response.data.code == "user_not_found") {
                setLogin(0);
                cookies.remove("auth");
                cookies.remove("refresh");
              }
            });
        }
      } else {
        setLogin(0);
      }
    // }

    return Router.events.on("routeChangeStart", start);
  });

  if (!isLargerThan797) {
    dived = {
      open: {
        display: "none",
        overflow: "hidden",
        transition: {
          transitionEnd: { opacity: 0 },
        },
      },
      closed: {
        // opacity:1,
        display: "initial",
        overflow: "visible",
        transition: {
          stiffness: 10000,
          when: "beforeChildren",
          transitionEnd: { opacity: 1 },
        },
      },
    };

    sidebar = {
      open: (height = 1000) => ({
        clipPath: `circle(${height * 1.5}px at 40px 40px)`,
        overflow: "hidden",
        transition: {
          type: "spring",
          stiffness: 20,
          restDelta: 2,
        },
      }),
      closed: {
        clipPath: "circle(30px at 40px 40px)",
        overflow: "visible",
        transition: {
          delay: 0.3,
          type: "spring",
          stiffness: 400,
          damping: 40,
        },
      },
    };

    variant = {
      open: {
        height: "100vh",
        marginRight: "0px",
        overflow: "hidden",
      },
      closed: {
        // height:"0px",
        height: "80px",
        overflow: "visible",
        // marginRight:"20px",
        transition: {
          when: "afterChildren",
        },
      },
    };
  } else {
    dived = {};

    sidebar = {
      open: (height = 1000) => ({
        clipPath: `circle(${height * 1.5}px at 40px 40px)`,
        transition: {
          type: "spring",
          stiffness: 20,
          restDelta: 2,
        },
      }),
      closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
          delay: 0.3,
          type: "spring",
          stiffness: 400,
          damping: 40,
        },
      },
    };

    variant = {
      open: {
        width: "300px",
        marginRight: "0px",
        height: "100vh",
      },
      closed: {
        width: "50px",
        marginRight: "20px",
        transition: {
          when: "afterChildren",
        },
      },
    };
  }

  return (
    <ChakraProvider resetCSS={false} theme={theme}>
      <Flex flexDirection={["column", "column", "row", "row"]} flexWrap="wrap">
        <Head>
          <title>Hack TUES GG</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            
          />
          <link rel="icon" property="og:image" href="https://www.hacktues.com/favicon.ico?v=2" />
        </Head>
        <NextNprogress
          color="#009d60"
          height="3"
          options={{ showSpinner: false }}
        />
        <Flex
          as={motion.div}
          zIndex="15"
          flexDirection="column"
          flexWrap="nowrap"
          position="sticky"
          h="100vh"
          top="0"
          flexGrow="1"
          left="0"
          bottom="0"
          variants={variant}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
        >
          <MenuToggle
            toggle={() => {
              toggleOpen(!isOpen);
            }}
          />
          <Navigation
            ctx={{ inteam: inTeam, loggedin: logged, captain: captain }}
          />
          <Box
            as={motion.div}
            h="100%"
            position="absolute"
            width={["100%", "100%", "300px", "300px"]}
            background="#fff"
            className="background"
            variants={sidebar}
          />
        </Flex>
        <Box
          animate={isOpen ? "open" : "closed"}
          as={motion.div}
          variants={dived}
          flexBasis="0"
          flexGrow="999"
          minW="50%"
          flexShrink="1"
        >
          <Component {...pageProps} />
        </Box>
      </Flex>
      <Cookie />
    </ChakraProvider>
  );
}

const Cookie = () => {
  const [value, setValue] = useControllableState({ defaultValue: true });

  function cookieConsentHandler() {
    cookies.set("CookieConsent", true, { path: "/", maxAge: 604800 });
  }
  if (!cookies.get("CookieConsent")) {
    return (
      <Slide direction="bottom" in={value} style={{ zIndex: 10 }}>
        <Flex
          pb={["50px", "50px", "20px", "20px"]}
          mr="50px"
          marginLeft={["0", "0", "auto", "auto"]}
          w={["100%", "100%", "33%", "33%"]}
          flexDirection="column"
          flexWrap="wrap"
          mb={["0px", "0px", "150px", "150px"]}
          paddingLeft="20px"
          paddingRight="20px"
          paddingTop="20px"
          color="white"
          mt="4"
          rounded="lg"
          bg="#a5cf9f"
          shadow="md"
        >
          <Text fontFamily="Rubik" alignSelf="center">
            Този уебсайт използва бисквитки. Научи повече{" "}
            <Link
            fontFamily="Rubik"
              textDecoration="underline"
              isExternal
              href="https://hacktues.pythonanywhere.com/static/frontend/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0%20%D0%B7%D0%B0%20%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82%D0%BA%D0%B8.pdf"
            >
              тук
            </Link>
          </Text>
          <Button
            cursor="pointer"
            alignSelf="center"
            border="0"
            colorScheme="white"
            backgroundColor="transparent"
            onClick={() => {
              setValue(false);
              cookieConsentHandler();
            }}
          >
            Съгласявам се
          </Button>
        </Flex>
      </Slide>
    );
  }
  return <Box></Box>;
};

function refreshToken() {
  axios({
    method: "post",
    url: `https://${process.env.hostname}/token/refresh/`,
    headers: { "Content-type": "Application/json" },
    data: { refresh: `${cookies.get("refresh")}` },
  }).then(function (response) {
    cookies.set("auth", response.data.access, { path: "/" });
    if (response.data.refresh != undefined) {
      cookies.set("refresh", response.data.access, { path: "/" });
    }
  });
}

export default MyApp;
