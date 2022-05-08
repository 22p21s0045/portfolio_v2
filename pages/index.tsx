import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid";
import Typewriter from "typewriter-effect";
import Box from "@mui/material/Box";
import Welcome from "../components/Welcome";
import Room from "../components/Room";
import { useEffect, useState } from "react";
const Home: NextPage = () => {
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
          <Room />
        </Grid>
        <Grid item >
          <Box>
             <Image src="/hero.jpg" width={620} height={695} /> 
            </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
