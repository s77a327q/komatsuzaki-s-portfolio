// src/pages/Home.tsx
import React from "react";
import { Typography, Box } from "@mui/material";

import { styled } from "@mui/system";
import TimeLineData from "../components/TimeLineData";

const TitleText = styled(Typography)({
  fontFamily: "Capriola, sans-serif",
  overflow: "hidden",
});

const Profile: React.FC = () => {
  return (
    <Box
      id="profile"
      sx={{
        width: "100%",
        textAlign: "center",
        pt: { xs: "3rem", sm: "4rem" },
        px: { xs: "10px" },
        mt: { xs: "0", sm: "6rem" },
      }}
    >
      <TitleText sx={{ fontSize: "3rem", margin: "3rem 0 1rem 0" }}>
        Profile
      </TitleText>
      <Typography sx={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
        私が社会人になってから経験したことについてタイムライン形式でまとめました
      </Typography>
      <TimeLineData />
    </Box>
  );
};

export default Profile;
