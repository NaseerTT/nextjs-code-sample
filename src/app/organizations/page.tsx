"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Mousewheel,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box } from "@mui/material";
import Link from "next/link";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import mobileOne from "../../../public/images/phone1.png";
import AppStore from "../../../public/images/AppStore.svg";
import GooglePlay from "../../../public/images/GooglePlay.svg";
import slide1 from "../../../public/images/mobile1.png";
import slide2 from "../../../public/images/mobile2.png";
import slide3 from "../../../public/images/mobile3.png";
import Button from "@mui/material/Button";

// import isolation from "../../public/images/Isolation_Mode.svg"
import { relative } from "path";

function Organizations() {
  return (
    <main className="main">
      <Box
        className="slider-box"
        position={"relative"}
        display={"flex"}
        alignItems={"center"}
        component="section"
      >
        <Container maxWidth="lg">
          <Swiper
            // install Swiper modules
            loop={true}
            direction={'vertical'}
            // effect="fade"
            modules={[
              // Navigation,
              Pagination,
              // Scrollbar,
              // A11y,
              // EffectFade,
              // Mousewheel,
            ]}
            spaceBetween={50}
            slidesPerView={1}
            // navigation
            // mousewheel={true}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <Grid
                container
                alignItems={"center"}
                display={"flex"}
                sx={{
                  justifyContent: { sm: "center", xs: "center" },
                  gap: { sm: "0", xs: "10px" },
                }}
              >
                <Grid
                  item
                  sm={12}
                  md={5}
                  sx={{ paddingTop: { md: "0px", xs: "50px" } }}

                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    flexWrap={"wrap"}
                    sx={{ gap: { xs: 1, sm: 2 } }}
                  >
                    <Typography
                      marginBottom={3}
                      sx={{
                        fontSize: { sm: "22px", xs: "16px" },
                      }}
                      fontFamily={'"Roboto", sans-serif !important'}
                      color={"#000000"}
                    >
                      Time Machine Curator is a collection<br />
                      management system that enables<br />
                      cultural institutions to easily organize<br />
                      items that are on display, in storage,<br />
                      or at other institutions.
                    </Typography>

                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "transparent",
                        padding: 0,
                        border: 0,
                        boxShadow: 0,
                        width: { sm: "auto", xs: "140px" },

                        "&:hover": { backgroundColor: "transparent" },
                      }}
                    >
                      <Image src={GooglePlay} alt="GooglePlay" />
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "transparent",
                        padding: 0,
                        border: 0,
                        boxShadow: 0,
                        width: { sm: "auto", xs: "140px" },
                        "&:hover": { backgroundColor: "transparent" },
                      }}
                    >
                      <Image src={AppStore} alt="AppStore" />
                    </Button>
                  </Box>
                </Grid>
                <Grid item sm={12} md={2} height={50}></Grid>
                <Grid item sm={12} md={5} textAlign={"center"}>
                  <Box
                    display={"inline-flex"}
                    alignItems={"center"}
                    flexWrap={"wrap"}
                    sx={{
                      gap: { xs: 1, sm: 3 },
                      justifyContent: { sm: "flex-start", xs: "center" },
                    }}
                  >
                    <Image className="mobile-case" src={slide1} alt="slide1" />
                  </Box>
                </Grid>
              </Grid>
            </SwiperSlide>

            {/* <SwiperSlide>
              <Grid
                container
                alignItems={"center"}
                display={"flex"}
                sx={{
                  justifyContent: { sm: "flex-start", xs: "center" },
                  gap: { sm: "0", xs: "10px" },
                }}
              >
                <Grid
                  item
                  sm={12}
                  md={5}
                  sx={{ paddingTop: { md: "0px", xs: "50px" } }}
                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    flexWrap={"wrap"}
                    sx={{ gap: { xs: 1, sm: 2 } }}
                  >
                    <Typography
                      marginBottom={3}
                      sx={{
                        fontSize: { sm: "22px", xs: "16px" },
                      }}
                      color={"#727272"}
                    >
                      Use images and three dimensional objects from your collection to create location based experiences for members and visitors.<br/>
                       These experiences can be located within your institution or at a location related to the content.
                    </Typography>

                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "transparent",
                        padding: 0,
                        border: 0,
                        boxShadow: 0,
                        width: { sm: "auto", xs: "140px" },

                        "&:hover": { backgroundColor: "transparent" },
                      }}
                    >
                      <Image src={GooglePlay} alt="GooglePlay" />
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "transparent",
                        padding: 0,
                        border: 0,
                        boxShadow: 0,
                        width: { sm: "auto", xs: "140px" },
                        "&:hover": { backgroundColor: "transparent" },
                      }}
                    >
                      <Image src={AppStore} alt="AppStore" />
                    </Button>
                  </Box>
                </Grid>
                <Grid item sm={12} md={2} height={50}></Grid>
                <Grid item sm={12} md={5} textAlign={"center"}>
                  <Box
                    display={"inline-flex"}
                    alignItems={"center"}
                    flexWrap={"wrap"}
                    sx={{
                      gap: { xs: 1, sm: 3 },
                      justifyContent: { sm: "flex-start", xs: "center" },
                    }}
                  >
                    <Image className="mobile-case" src={slide3} alt="slide2" />
                  </Box>
                </Grid>
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid
                container
                alignItems={"center"}
                display={"flex"}
                sx={{
                  justifyContent: { sm: "flex-start", xs: "center" },
                  gap: { sm: "0", xs: "10px" },
                }}
              >
                <Grid
                  item
                  sm={12}
                  md={5}
                  sx={{ paddingTop: { md: "0px", xs: "50px" } }}

                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    flexWrap={"wrap"}
                    sx={{ gap: { xs: 1, sm: 2 } }}
                  >
                    <Typography
                      marginBottom={3}
                      sx={{
                        fontSize: { sm: "22px", xs: "16px" },
                      }}
                      color={"#727272"}
                    >
                      See your institution&apos;s activity and metrics.<br />
                      Reduce the cost of collection management.<br />
                      Be found by new visitors and members.<br />
                      Earn revenue from shared content.
                    </Typography>

                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "transparent",
                        padding: 0,
                        border: 0,
                        boxShadow: 0,
                        width: { sm: "auto", xs: "140px" },

                        "&:hover": { backgroundColor: "transparent" },
                      }}
                    >
                      <Image src={GooglePlay} alt="GooglePlay" />
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "transparent",
                        padding: 0,
                        border: 0,
                        boxShadow: 0,
                        width: { sm: "auto", xs: "140px" },
                        "&:hover": { backgroundColor: "transparent" },
                      }}
                    >
                      <Image src={AppStore} alt="AppStore" />
                    </Button>
                  </Box>
                </Grid>
                <Grid item sm={12} md={2} height={50}></Grid>
                <Grid item sm={12} md={5} textAlign={"center"}>
                  <Box
                    display={"inline-flex"}
                    alignItems={"center"}
                    flexWrap={"wrap"}
                    sx={{
                      gap: { xs: 1, sm: 3 },
                      justifyContent: { sm: "flex-start", xs: "center" },
                    }}
                  >
                    <Image className="mobile-case" src={slide2} alt="slide2" />
                  </Box>
                </Grid>
              </Grid>
            </SwiperSlide> */}
          </Swiper>
        </Container>
        {/* <Image className="isolation" src={isolation} alt="isolation" /> */}
      </Box>
    </main>
  );
}

export default Organizations;
