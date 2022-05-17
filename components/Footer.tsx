import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";
import Bmc from "../styles/icon/bmc.svg";
import Stack from "@mui/material/Stack";
import Github from "../styles/icon/footer/github.svg";
import Linkedin from "../styles/icon/footer/Linkedin.svg";
import Mail from "../styles/icon/footer/Mail.svg";
function Footer() {
  return (
    <div>
      <Box sx={{backgroundColor:"#C4DDFF"}}>
      <Container className="Footer" maxWidth={false}>
        <Grid container sx={{ paddingTop: 30 }} justifyContent="center">
          <Grid item xs={12} sm={6} lg={4} md={4} sx={{ textAlign: "center",fontSize:36,fontFamily:"Boogaloo",color: "white"}}>
            <h3>Design By Akkarawit</h3>
            <Image src={Bmc} width={190} height={52} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Stack direction="row">
              <Image src={Github} />
              <Image src={Mail} />
              <Image src={Linkedin} />
              <Box sx={{position: "relative", marginLeft: "10%",marginTop: "5%"}}>
              <a
                href="https://portfoliov2.instatus.com/"
                title="Website Uptime Monitoring"
              >
                <img src="https://app.statuscake.com/button/index.php?Track=xcEpdVksmy&Days=1&Design=1" />
              </a>

              </Box>

           
            </Stack>
          </Grid>
        </Grid>
      </Container>
      </Box>
    </div>
  );
}

export default Footer;
