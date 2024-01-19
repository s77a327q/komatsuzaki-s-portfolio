// src/pages/Home.tsx
import React from "react";
import myImage from "../static/images/header_logo.png";
import { Typography, AppBar, Button, Box, Avatar } from "@mui/material";

import { styled } from "@mui/system";
import {
  scrollIntro,
  scrollProfile,
  scrollSkillSet,
  scrollTop,
} from "../components/ScrollMethod";

const HeaderButton = styled(Button)({
  backgroundColor: "white",
  color: "#555",
  height: "50px",
  borderRadius: "0px",
  "&:hover": {
    backgroundColor: "#79c6b6",
    color: "white",
  },
});

const AppBarStyle = styled(AppBar)({
  height: "60px",
  boxShadow: "none",
});

const HeaderContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Header: React.FC = () => {
  return (
    <>
      <AppBarStyle position="sticky" color="primary">
        <HeaderContainer>
          <Box sx={{ marginTop: "5px", marginLeft: "10%" }} onClick={scrollTop}>
            <img
              style={{ height: "3.5rem", width: "10rem", cursor: "pointer" }}
              src={myImage}
            />
          </Box>
          <Box sx={{ paddingRight: "20%", textAlign: "end" }}>
            <HeaderButton onClick={scrollIntro}>
              <Typography>自己紹介</Typography>
            </HeaderButton>
            <HeaderButton onClick={scrollSkillSet}>
              <Typography>スキルセット</Typography>
            </HeaderButton>
            <HeaderButton sx={{ color: "#555" }} onClick={scrollProfile}>
              <Typography>経験したこと</Typography>
            </HeaderButton>
          </Box>
        </HeaderContainer>
      </AppBarStyle>
    </>
  );
};

export default Header;
