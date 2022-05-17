import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Linkin from "../styles/icon/Linkedin.svg";
import Github from "../styles/icon/GitHub.svg";
import { Link } from "react-scroll";
import Links from "next/link";
function Navbar() {
  const buttonstyle = {
    fontFamily: "Boogaloo",
    fontSize: {
      lg: 30,
      md: 30,
      sm: 20,
      xs: 20,
    },
    fontWeight: "bold",
    color: "#54436B",
    marginRight: "0.5rem",
  };
  return (
    <div>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "transparent", paddingTop: 5 }}
      >
        <Grid container spacing={2} justifyContent="flex">
          <Grid item>
            <Link to="home" spy={true} smooth={true} duration={500}>
              <Button variant="text" sx={buttonstyle}>
                Home
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="about" spy={true} smooth={true} duration={500}>
              <Button variant="text" sx={buttonstyle}>
                About
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="skill" spy={true} smooth={true} duration={500}>
              <Button variant="text" sx={buttonstyle}>
                Skill
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="activity" spy={true} smooth={true} duration={500}>
              <Button variant="text" sx={buttonstyle}>
                Activity
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="checkout" spy={true} smooth={true} duration={500}>
              <Button variant="text" sx={buttonstyle}>
                Checkout
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid item>
            <Links href="https://www.linkedin.com/in/akkarawit-sittiprakan-58911523b/">
              <Button variant="text" sx={buttonstyle}>
                <Image src={Linkin} width={50} height={45} />
              </Button>
            </Links>
            <Links href="https://github.com/22p21s0045">
              <Button variant="text" sx={buttonstyle}>
                <Image src={Github} width={50} height={45} />
              </Button>
            </Links>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}

export default Navbar;
