"use client";
import Image from "next/image";
import styles from "./page.module.css";
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
import travelerOne from "../../public/images/Traveler_1.png"
import mobileOne from "../../public/images/layer1.png";
import AppStore from "../../public/images/AppStore.svg";
import GooglePlay from "../../public/images/GooglePlay.svg";
import Button from "@mui/material/Button";

// import isolation from "../../public/images/Isolation_Mode.svg"
import { relative } from "path";

export default function Home() {
  return (
    <main className={styles.main}>
      <Box
        className="slider-box"
        position={"relative"}
        display={"flex"}
        alignItems={"center"}
        component="section"
      >
        <Container maxWidth="lg">
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
                  Time Site Traveler connects<br />
                  you to location-based content<br />
                  made available by organizations.
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
                <Image
                  className="mobile-case"
                  src={travelerOne}
                  alt="mobile"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
        {/* <Image className="isolation" src={isolation} alt="isolation" /> */}
      </Box>
    </main>
  );
}
