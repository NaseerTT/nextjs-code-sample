"use client";
import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "../../../public/images/Logo-Traveler.png";
import logoCurator from "../../../public/images/Logo-curator.png";
import Link from "next/link";
import Container from "@mui/material/Container";
import { usePathname } from "next/navigation";

function Header() {
  const pathName = usePathname();
  // useEffect(() => {
  // },[pathName])
  return (
    <Box component="section" sx={{ boxShadow: "0px 4px 12px 0px #0000000F" }}>
      <Container maxWidth="xl">
        <AppBar
          position="static"
          color="transparent"
          elevation={0}
          sx={{ padding: "8px 0" }}
        >
          <Toolbar sx={{ padding: "0 !important" }}>
            <Box sx={{ flexGrow: 1 }} marginRight={2}>
              <Link href="/">
                {pathName.includes("/organizations")  ? (
                  <Image className="logo" src={logoCurator} alt="logo" height={42}/>
                ) : (
                  <Image className="logo" src={logo} alt="logo" height={42} />
                )}
              </Link>
            </Box>

            {pathName.includes("/organizations")  ? (
              <Box display={"flex"} flexWrap={'wrap'} gap={1} marginRight={{ xs: '0', lg: '200px'}}>
                <Link href="/"  className="btn btn-primary textSm">
                <Typography
                  sx={{
                    fontSize: { sm: "14px", xs: "12px" },
                    textTransform: "capitalize",
                  }}
                >
                 For Travelers
                </Typography>
              </Link>
              {/* <Link href="" className="btn btn-secondary textSm">
                <Typography
                  sx={{
                    fontSize: { sm: "14px", xs: "12px" },
                    textTransform: "capitalize",
                  }}
                >
                  Sign Up
                </Typography>
              </Link> */}
              </Box>
            ) : (
              <Box display={"flex"} flexWrap={'wrap'} gap={1} marginRight={{ xs: '0', lg: '200px'}}>
              <Link href="/organizations" className="btn btn-primary">
                <Typography
                  sx={{
                    fontSize: { sm: "14px", xs: "12px" },
                    textTransform: "capitalize",
                  }}
                >
                 For  Organizations
                </Typography>
              </Link>
            </Box>
            )}
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
}

export default Header;
