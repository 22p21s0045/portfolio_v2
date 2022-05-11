import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ProgressBar from "@ramonak/react-progress-bar";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typewriter from "typewriter-effect";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Droll from "../styles/image/droll.svg";
import Boy from "../styles/svg/boy.svg";
import Plane from "../styles/svg/plane.svg";
import Welcome from "../components/Welcome";
import Room from "../components/Room";
import Bermuda from "../styles/svg/bermuda.svg";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
const Home: NextPage = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      animation.start({
        scale: [1, 2, 2, 1, 1],
        transition: {
          duration: 1,
        },
      });
    }
    if (!inView) {
      animation.start({
        scale: [0.5, 1, 1, 0.5, 0.5],
      });
    }
    console.log(inView);
  }, [inView]);
  return (
    <div>
      <ParallaxProvider>
        <Navbar />

        <Grid container sx={{ marginTop: 20 }}>
          <Grid item xs={6} sx={{ marginLeft: 14 }}>
            <Box sx={{ fontFamily: "Boogaloo", fontSize: 76 }}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Welcome to my place").start();
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ marginTop: 0 }}>
              <Welcome />
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ backgroundColor: "#50CB93" }}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item lg={6} xs={12} md={5}>
            <Parallax translateY={[20, -40]}>
              <Room />
            </Parallax>
          </Grid>

          <Grid item lg={6} xs={12} md={6}>
            <Parallax translateY={[20, -40]}>
              <motion.div animate={animation} ref={ref}>
                <Box
                  sx={{
                    marginLeft: "10%",
                    marginTop: 10,
                    transform: "rotate(15deg)",
                  }}
                  className="Hero"
                >
                  <Image
                    src="/hero.jpg"
                    width={600}
                    height={685}
                    className="Hero"
                  />
                  <Box className="stats">
                    <Box sx={{ position: "relative", marginLeft: "10%" }}>
                      <h1 style={{ fontFamily: "Boogaloo" }}>Coding</h1>

                      <ProgressBar
                        completed={30}
                        customLabel=" "
                        bgColor="#FF3D68"
                        width="50%"
                        labelColor="#e80909"
                        maxCompleted={100}
                      />
                    </Box>
                    <Box sx={{ position: "relative", marginLeft: "10%" }}>
                      <h1 style={{ fontFamily: "Boogaloo" }}>Design</h1>

                      <ProgressBar
                        completed={40}
                        customLabel=" "
                        bgColor="#A73489"
                        width="50%"
                        labelColor="#e80909"
                        maxCompleted={100}
                      />
                    </Box>
                    <Box sx={{ position: "relative", marginLeft: "10%" }}>
                      <h1 style={{ fontFamily: "Boogaloo" }}>Business</h1>

                      <ProgressBar
                        completed={15}
                        customLabel=" "
                        bgColor="#FAAD80"
                        width="50%"
                        labelColor="#e80909"
                        maxCompleted={100}
                      />
                    </Box>
                    <Image src={Droll} width={377} height={350} />
                  </Box>
                </Box>
              </motion.div>
            </Parallax>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ backgroundColor: "#ACFFAD" }}
          justifyContent="center"
        >
          <Grid item xs={12} lg={5} sx={{ marginTop: 10 }}>
            <Parallax translateX={[30, -35]}>
              <Paper>
                <Stack
                  sx={{
                    fontFamily: "Boogaloo",
                    paddingLeft: 10,
                    position: "relative",
                  }}
                  justifyContent="center"
                  className="About"
                >
                  <h1 style={{ fontSize: "3em", textAlign: "center" }}>
                    About Me
                  </h1>
                  <h1>Name: Akkarawit Sittiprakan</h1>
                  <h1>Age: 18 years old</h1>
                  <h1> Education: Information technology KMUTT </h1>
                  <h1> Skills : Programming,Design,Analytic </h1>
                </Stack>
              </Paper>
            </Parallax>
          </Grid>
          <Grid item sx={{ marginTop: 20 }}>
            <Parallax translateY={[0, 280]}>
              <Image src={Plane} width={200} height={200} />
            </Parallax>
          </Grid>
        </Grid>
        <Grid container sx={{ backgroundColor: "#54436B" }}>
          <Box className="Window">
            <Image src={Bermuda} width={460} height={315} />
          </Box>
          <Grid item xs={12} lg={6}>
            <Parallax translateX={[-100, 195]}>
              <Box>
                <Box className="Boy">
                  <Image src={Boy} width={200} height={200} />
                </Box>
                <Paper
                  sx={{
                    marginTop: 0,
                    backgroundImage: `url('https://www.img.in.th/images/64983a4a85d67de8ebb9ef96448710d2.jpg')`,
                    backgroundSize: "955px 500px",
                  }}
                >
                  <Stack direction="row">
                    <h1 style={{ marginLeft: 45, fontFamily: "Boogaloo" }}>
                      My favorite tools
                    </h1>
                    <Button
                      className="Button"
                      style={{ marginLeft: "20%" }}
                      disableElevation={true}
                    >
                      Programming
                    </Button>
                    <Button
                      className="Button"
                      style={{ marginLeft: "20%" }}
                      disableElevation={true}
                    >
                      Design
                    </Button>
                  </Stack>
                  <Stack
                    direction="row"
                    sx={{
                      marginTop: "10%",
                    }}
                    spacing={5}
                    justifyContent="center"
                  >
                    <Paper className="Skill-box">
                      <Box className="floating-img">
                        <Image
                          src={require("../styles/icon/python.png")}
                          width={100}
                          height={100}
                        />
                      </Box>
                      <Box className="Skill-tag">
                      <h1 style={{ fontFamily: "Boogaloo" }}>Beginner</h1>
                        <h1 style={{ fontFamily: "Boogaloo" }}>Python</h1>
                      </Box>
                    </Paper>
                    <Paper>
                      <Image
                        src={require("../styles/icon/python.png")}
                        width={100}
                        height={100}
                      />
                    </Paper>
                    <Paper>
                      <Image
                        src={require("../styles/icon/python.png")}
                        width={100}
                        height={100}
                      />
                    </Paper>

                  </Stack>
                </Paper>
              </Box>
            </Parallax>
          </Grid>
         

        </Grid>
        <h1>HH</h1>
          <h1>HH</h1>
          <h1>HH</h1>
          <h1>HH</h1>
          <h1>HH</h1>
          <h1>HH</h1>
      </ParallaxProvider>
    </div>
  );
};

export default Home;
