// src/pages/Home.tsx
import React from "react";
import { Typography, Box, Grid, Link } from "@mui/material";

import { styled } from "@mui/system";
import {
  scrollIntro,
  scrollProfile,
  scrollSkillSet,
  scrollTop,
} from "../components/ScrollMethod";

const TitleText = styled(Typography)({
  fontFamily: "Capriola, sans-serif",
  overflow: "hidden",
});

const Footer: React.FC = () => {
  return (
    <Box
      id="footer"
      sx={{
        width: "100%",
        textAlign: "center",
        height: "10rem",
        backgroundColor: "#79c6b6",
        pt: "1rem",
        mt: "8rem",
      }}
    >
      <TitleText sx={{ fontSize: "1.2rem", color: "white" }}>
        Thank you for coming!
      </TitleText>
      <Grid
        container
        sx={{ justifyContent: "center", gap: "0 10px", mt: "2rem" }}
      >
        <Link sx={{ cursor: "pointer" }} onClick={scrollTop}>
          ページトップ
        </Link>
        <Link sx={{ cursor: "pointer" }} onClick={scrollIntro}>
          自己紹介
        </Link>
        <Link sx={{ cursor: "pointer" }} onClick={scrollSkillSet}>
          スキルセット
        </Link>
        <Link sx={{ cursor: "pointer" }} onClick={scrollProfile}>
          経験したこと
        </Link>
      </Grid>
      <Typography sx={{ fontSize: "0.8rem", color: "white", mt: "2rem" }}>
        ©Rei komatsuzaki. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
