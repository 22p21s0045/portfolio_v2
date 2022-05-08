import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ProgressBar from "@ramonak/react-progress-bar";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid";
import Typewriter from "typewriter-effect";
import Box from "@mui/material/Box";
import Droll from "../styles/image/droll.svg";
import Welcome from "../components/Welcome";
import Room from "../components/Room";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
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
    <div className={styles.container}>
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
      <Grid container sx={{ backgroundColor: "#50CB93" }}>
        <Grid item lg={6}>
          {/* <Room /> */}
        </Grid>
        <Grid item>
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
                <Box sx={{ position: "relative" ,marginLeft: "10%"}}>
                  <h1 style={{fontFamily:"Boogaloo"}}>Coding</h1>

                  <ProgressBar
                    completed={30}
                    customLabel=" "
                    bgColor="#FF3D68"
                    width="50%"
                    labelColor="#e80909"
                    maxCompleted={100}
                  />
                </Box>
                <Box sx={{ position: "relative",marginLeft: "10%" }}>
                  <h1 style={{fontFamily:"Boogaloo"}}>Design</h1>

                  <ProgressBar
                    completed={40}
                    customLabel=" "
                    bgColor="#A73489"
                    width="50%"
                    labelColor="#e80909"
                    maxCompleted={100}
                  />
                </Box>
                <Box sx={{ position: "relative",marginLeft: "10%" }}>
                  <h1 style={{fontFamily:"Boogaloo"}}>Business</h1>

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
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
