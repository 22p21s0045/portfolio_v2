import type { NextPage } from "next";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Head from "next/head";
import { InferGetStaticPropsType, GetStaticProps } from "next";
import Image from "next/image";
import Links from "next/link";
import styles from "../styles/Home.module.css";
import ProgressBar from "@ramonak/react-progress-bar";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typewriter from "typewriter-effect";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Droll from "../styles/image/droll.svg";
import Boy from "../styles/svg/boy.svg";
import Plane from "../styles/svg/plane.svg";
import Welcome from "../components/Welcome";
import Room from "../components/Room";
import Bermuda from "../styles/svg/bermuda.svg";
import Astronaut from "../styles/svg/red.svg";
import CatAs from "../styles/svg/cat-astro.svg";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import Lottie from "lottie-react";
import Bat from "../styles/lottie/bat.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Iot from "../components/Iot";
import Dev from "../components/Dev";
import Footer from "../components/Footer";
import { Link } from "react-scroll";
const Home: NextPage = ({ data, activity }: any) => {
  const [skill, setskill] = useState("Programming");
  const animation = useAnimation();

  const { ref, inView } = useInView();
  const [ref2, inView2] = useInView();
  console.table(activity.data);
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
      <Head>
        <meta
          name="google-site-verification"
          content="nK5xkv6pKqugeDb_iK4-x29xYdsPRd64-c3cfeKt0yk"
        />
        <meta name="description" content="Portfolio Akkarawit" />
        <meta name="keywords" content="Portfolio, Akkarawit, Web Developer" />
        <meta name="author" content="Akkarawit Sittiprakan" />
        <title>My portfolio</title>
        <link rel="shortcut icon" href="/favicon.ico" />

      </Head>
      <ParallaxProvider>
        <Navbar />

        <Grid container sx={{ marginTop: 20 }} id="home">
          <Grid item xs={12} lg={6} sx={{ marginLeft: 14 }}>
            <Box sx={{ fontFamily: "Boogaloo", fontSize: 76 }}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Welcome to my place").start();
                }}
              />
              <Link to="me" spy={true} smooth={true} duration={500}>
                <Button
                  sx={{
                    backgroundColor: "#273036",
                    borderRadius: 10,
                    color: "white",
                    fontFamily: "Boogaloo",
                    fontSize: 20,
                    "&:hover": {
                      backgroundColor: "#B224EF",
                      color: "black",
                      boxshadow: "4px 5px 0px #B224EF",
                    },
                  }}
                >
                  GO
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Box sx={{ paddingTop: 0 }}>
              <Welcome />
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ backgroundColor: "#50CB93" }}
          alignItems="center"
          justifyContent="center"
          id="me"
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
          id="about"
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
        <Grid container sx={{ backgroundColor: "#54436B" }} id="skill">
          <Lottie animationData={Bat} loop={true} />
          <Box className="Window">
            <Image src={Bermuda} width={460} height={315} />
          </Box>
          <Grid item xs={12} lg={6}>
            <Parallax translateX={[-100, 150]}>
              <Box>
                <Box className="Boy">
                  <Image src={Boy} width={200} height={200} />
                </Box>
                <Paper
                  sx={{
                    marginTop: 0,
                    backgroundImage: `url('https://www.img.in.th/images/64983a4a85d67de8ebb9ef96448710d2.jpg')`,
                    backgroundSize: "cover",
                  }}
                >
                  <Stack direction="row">
                    <h1 style={{ marginLeft: 45, fontFamily: "Boogaloo" }}>
                      My favorite tools
                    </h1>
                    <Button
                      sx={{
                        fontFamily: "Boogaloo",
                        marginLeft: "10%",
                        fontSize: 20,
                        backgroundColor: "#7579FF",
                        color: "#fff",
                        borderRadius: 10,
                        boxshadow: "4px 5px 0px #B224EF",
                        marginTop: "5%",

                        "&:hover": {
                          backgroundColor: "#B224EF",
                          color: "black",
                          boxshadow: "4px 5px 0px #B224EF",
                        },
                      }}
                      onClick={() => {
                        setskill("Programming");
                      }}
                    >
                      Programming
                    </Button>
                    <Button
                      sx={{
                        fontFamily: "Boogaloo",
                        fontSize: 24,
                        backgroundColor: "#7579FF",
                        color: "#fff",
                        borderRadius: 10,
                        boxshadow: "4px 5px 0px #B224EF",
                        marginTop: "5%",
                        marginLeft: "5%",
                        "&:hover": {
                          backgroundColor: "#B224EF",
                          color: "black",
                          boxshadow: "4px 5px 0px #B224EF",
                        },
                      }}
                      onClick={() => {
                        setskill("Design");
                      }}
                    >
                      Design
                    </Button>
                  </Stack>
                  <Stack
                    direction="row"
                    sx={{
                      marginTop: "15%",
                    }}
                    spacing={5}
                    justifyContent="center"
                  >
                    {data.skills.data.map((item: any) => {
                      if (item.attributes.tag === skill) {
                        return (
                          <Paper className="Skill-box" key={item.id}>
                            <Box className="floating-img">
                              <Image
                                src={`${process.env.NEXT_PUBLIC_URL}${item.attributes.Icon.data.attributes.url}`}
                                width={100}
                                height={100}
                              />
                            </Box>
                            <Box className="Skill-tag">
                              <h1 style={{ fontFamily: "Boogaloo" }}>
                                {item.attributes.level}
                              </h1>
                              <h1 style={{ fontFamily: "Boogaloo" }}>
                                {item.attributes.Name}
                              </h1>
                            </Box>
                          </Paper>
                        );
                      }
                    })}
                  </Stack>
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    sx={{ marginTop: 10 }}
                  >
                    <Links href="https://github.com/22p21s0045">
                      <Button
                        sx={{
                          width: 176,
                          fontFamily: "Boogaloo",
                          fontSize: 24,
                          backgroundColor: "#7579FF",
                          color: "#fff",
                          borderRadius: 10,
                          boxshadow: "4px 5px 0px #B224EF",
                          marginTop: "2%",
                          "&:hover": {
                            backgroundColor: "#B224EF",
                            color: "black",
                            boxshadow: "4px 5px 0px #B224EF",
                          },
                        }}
                      >
                        More
                      </Button>
                    </Links>
                  </Stack>
                </Paper>
              </Box>
            </Parallax>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ backgroundColor: "black" }}
          id="activity"
        >
          <Box sx={{ position: "absolute", right: "10%", display: "block" }}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                type: "spring",
                stiffness: 100,
                repeat: Infinity,
                duration: 4,
              }}
            >
              <Image src={CatAs} width={500} height={500} priority />
            </motion.div>
          </Box>

          <Box sx={{ position: "absolute", left: "5%" }}>
            <Parallax translateY={[-100, 100]}>
              <Image src={Astronaut} width={300} height={300} />
            </Parallax>
          </Box>

          <Grid item sx={{ marginTop: 30, color: "white" }}>
            <Parallax
              translateX={[-400, 0]}
              scale={[0.75, 2]}
              rotate={[-160, 10]}
              easing="easeInQuad"
            >
              <h1 style={{ fontFamily: "Boogaloo" }}>Activity</h1>
            </Parallax>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 50 }}>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 300,
                  width: 1700,
                },
              }}
            >
              {activity.data.activities.data.map((item: any) => {
                return (
                  <SwiperSlide className="swiper-slide" key={item.id}>
                    <Card sx={{ border: "3px solid" }}>
                      <CardMedia
                        component="img"
                        height="200"
                        width="200"
                        image={`${process.env.NEXT_PUBLIC_URL}${item.attributes.cover.data.attributes.url}`}
                        alt="green iguana"
                      ></CardMedia>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ fontFamily: "Source Code Pro" }}
                        >
                          {item.attributes.title}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="subtitle2"
                          component="div"
                          sx={{
                            fontFamily: "Source Code Pro",
                            fontWeight: "bold",
                          }}
                        >
                          {item.attributes.rank}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          sx={{
                            backgroundColor: "#3C3C43",
                            color: "white",
                            fontFamily: "Source Code Pro",
                          }}
                          disableElevation={true}
                          className="Button-More"
                        >
                          More
                        </Button>
                      </CardActions>
                    </Card>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Grid>
        </Grid>
        <Grid container sx={{ backgroundColor: "#C4DDFF" }} id="checkout">
          <Grid item xs={6} lg={4} md={4}>
            <Box sx={{ position: "relative", display: "block", marginTop: 30 }}>
              <Dev isview={inView2} />
            </Box>
          </Grid>
          <Grid item xs={12} lg={4} md={4}>
            <Button
              className="Checkout"
              sx={{
                marginTop: 30,
                marginLeft: 20,
                fontFamily: "Boogaloo",
                fontSize: 40,
                backgroundColor: "#00185E",
                color: "white",
              }}
            >
              Check out me
            </Button>
          </Grid>
          <Grid item xs={6} ref={ref2} lg={4} md={4}>
            <Iot isview={inView2} />
          </Grid>
        </Grid>
        <Footer />
      </ParallaxProvider>
    </div>
  );
};
export async function getStaticProps() {
  const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_URL}/graphql`,
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query Getskill {
        skills {
          data {
            id
            attributes {
              Name
              tag
              level
              Icon {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `,
  });
  const activity = await client.query({
    query: gql`
      query GetActivity {
        activities {
          data {
            id
            attributes {
              cover {
                data {
                  attributes {
                    url
                  }
                }
              }
              title
              rank
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      data: data,
      activity: activity,
    },
  };
}

export default Home;
