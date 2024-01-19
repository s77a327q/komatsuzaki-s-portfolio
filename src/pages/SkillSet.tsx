// src/pages/Home.tsx
import React from "react";
import {
  Typography,
  AppBar,
  Button,
  Box,
  Avatar,
  Paper,
  Grid,
  Card,
  CardContent,
  Rating,
} from "@mui/material";

import { styled } from "@mui/system";
import SkillsSection from "../components/SkillsSection";
import {
  backendSkills,
  dbSkills,
  designSkills,
  frontendSkills,
  infraSkills,
  otherSkills,
} from "../components/SkillData";

const TitleText = styled(Typography)({
  fontFamily: "Capriola, sans-serif",
  overflow: "hidden",
});

const SkillSet: React.FC = () => {
  return (
    <Box
      id="skill_set"
      sx={{
        height: "calc(100vh - 60px)",
        width: "100%",
        paddingTop: "5rem",
        textAlign: "center",
      }}
    >
      <TitleText sx={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Skill Set
      </TitleText>
      <Typography sx={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        私がこれまでに学習・習得した言語やツールについて星五段階で自己評価しました
      </Typography>
      <Grid sx={{ gap: "0 15px", justifyContent: "center" }} container>
        <Card sx={{ opacity: "0.6", width: "max-content" }}>
          <CardContent>
            <SkillsSection title="デザインスキル" skills={designSkills} />
          </CardContent>
        </Card>
        <Card sx={{ opacity: "0.6", width: "max-content" }}>
          <CardContent>
            <SkillsSection title="フロントエンド" skills={frontendSkills} />
          </CardContent>
        </Card>
        <Card sx={{ opacity: "0.6", width: "max-content" }}>
          <CardContent>
            <SkillsSection title="バックエンド" skills={backendSkills} />
          </CardContent>
        </Card>
      </Grid>
      <Box sx={{ mt: 2 }} />
      <Grid sx={{ gap: "0 15px", justifyContent: "center" }} container>
        <Card sx={{ opacity: "0.6", width: "max-content" }}>
          <CardContent>
            <SkillsSection title="DB" skills={dbSkills} />
          </CardContent>
        </Card>
        <Card sx={{ opacity: "0.6", width: "max-content" }}>
          <CardContent>
            <SkillsSection title="インフラ・サーバー" skills={infraSkills} />
          </CardContent>
        </Card>
        <Card sx={{ opacity: "0.6", width: "max-content" }}>
          <CardContent>
            <SkillsSection title="その他ツール等" skills={otherSkills} />
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default SkillSet;
