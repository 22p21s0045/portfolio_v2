import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Linkin from "../styles/icon/Linkedin.svg";
import Github from "../styles/icon/GitHub.svg";
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
      <AppBar position="static" elevation = {0}sx={{ backgroundColor: "transparent",paddingTop:5 }}>
        <Grid container spacing={2} justifyContent="flex">
          <Grid item>
            <Button variant="text" sx={buttonstyle}>
              Home
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text" sx={buttonstyle}>
              About
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text" sx={buttonstyle}>
              Skill
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text" sx={buttonstyle}>
              Activity
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text" sx={buttonstyle}>
              Checkout
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="flex-end" alignItems="center">
          <Grid item>
            <Button variant="text" sx={buttonstyle}>
              <Image src={Linkin} width={50} height={45} />
            </Button>
            <Button variant="text" sx={buttonstyle}>
              <Image src={Github} width={50} height={45} />
            </Button>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}

export default Navbar;
