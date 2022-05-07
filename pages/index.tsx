import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid";
import Typewriter from "typewriter-effect";
import Box from "@mui/material/Box";
import Welcome from "../components/Welcome";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Grid container sx={{ marginTop: 20, marginLeft: 14 }}>
        <Grid item xs={6}>
          <Box sx={{ fontFamily: "Boogaloo", fontSize: 76 }}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Welcome to my place").start();
              }}
            />
          </Box>
          <Welcome /> 
        </Grid>
        <Grid item xs={6}>
          
          
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
