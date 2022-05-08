import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid";
import Typewriter from "typewriter-effect";
import Box from "@mui/material/Box";
import Welcome from "../components/Welcome";
import { useEffect,useState } from "react";
const Home: NextPage = () => {
  
  return (
    <div className={styles.container}>
      <Navbar />
      <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Welcome to my place").start();
              }}
            />
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
      <Grid container>
        <Grid item xs={12}>
          <h1>Hello World!</h1>
          <h1>Hello World!</h1>
          <h1>Hello World!</h1>
          <h1>Hello World!</h1>
          <h1>Hello World!</h1>
          <h1>Hello World!</h1>
          <h1>Hello World!</h1>
          <h1>Hello World!</h1>
          <h1>Hello World!</h1>
          <h1>Hello World!</h1>
          <h1>Hello World!</h1>
          <h1>Hello World!</h1>
          <h1>Hello World!</h1>
          <h1>Hello World!</h1>
          <h1>Hello World!</h1>
          </Grid>

      </Grid>
    </div>
  );
};

export default Home;
