"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "../../../public/images/logo-travaler.svg";
import Link from "next/link";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { wrap } from "module";
import { colors, Divider } from "@mui/material";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";

function Footer() {
  const pathName = usePathname();
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <Box
      component="section"
      sx={{ boxShadow: "0px -4px 12px 0px #0000000F", padding: "16px 0" }}
    >
      <Container className="footer" maxWidth="lg">
        <Grid
          container
          sx={{
            justifyContent: { sm: "flex-start", xs: "center" },
            gap: { sm: "0", xs: "10px" },
          }}
        >
          <Grid item sm={4}>
            <Box
              display={"flex"}
              alignItems={"center"}
              flexWrap={"wrap"}
              sx={{ gap: { xs: 1, sm: 3 } }}
            >
              {pathName.includes("/organizations") ? (
                <Link href="/organizations/termsAndConditions">
                  About Us
                </Link>
              ) : (
                <Link href="/termsAndConditions">About Us</Link>
              )}
              {pathName.includes("/organizations") ? (
                <Link href="/organizations/termsAndConditions">
                  Contact Us
                </Link>
              ) : (
                <Link href="/termsAndConditions">Contact Us</Link>
              )}
            </Box>
          </Grid>
          <Grid item sm={8} textAlign={"right"}>
            <Box
              display={"inline-flex"}
              alignItems={"center"}
              flexWrap={"wrap"}
              sx={{
                gap: { xs: 1, sm: 3 },
                justifyContent: { sm: "flex-start", xs: "center" },
              }}
            >
              {pathName.includes("/organizations") ? (
                <Link href="/organizations/privacyPolicy">Privacy Policy</Link>
              ) : (
                <Link href="/privacyPolicy">Privacy Policy</Link>
              )}
              {pathName.includes("/organizations") ? (
                <Link href="/organizations/termsAndConditions">
                  Terms & Conditions
                </Link>
              ) : (
                <Link href="/termsAndConditions">Terms & Conditions</Link>
              )}
               <Typography variant="body2">Copyright {currentYear} </Typography>
              <Box
                display={"flex"}
                gap={1}
                alignItems={"center"}
                flexWrap={"wrap"}
                justifyContent={"center"}
              >
                <Link href="#">
                  <Typography>Time Site Technologies</Typography>
                </Link>
                <Divider className="divider">|</Divider>
                <Typography className="pointer-none">All Rights Reserved</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
