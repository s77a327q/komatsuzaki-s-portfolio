// src/pages/Home.tsx
import React from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Rating,
  useMediaQuery,
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
        width: "100%",
        textAlign: "center",
        height: { sm: "calc(100vh - 60px)" },
        paddingTop: { xs: "3rem", sm: "6rem" },
        px: { xs: "10px" },
        mt: { xs: "3rem", sm: "0" },
      }}
    >
      <TitleText sx={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Skill Set
      </TitleText>
      {useMediaQuery("(min-width:600px)") ? (
        <Typography sx={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
          私がこれまでに学習・習得した言語やツールについて星五段階で自己評価しました
        </Typography>
      ) : (
        <Typography sx={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
          私がこれまでに学習・習得した言語やツールに<br></br>
          ついて 星五段階で自己評価しました
        </Typography>
      )}

      <Grid sx={{ gap: "0 15px", justifyContent: "center" }} container>
        <Card
          sx={{ opacity: "0.6", width: { xs: "24rem", sm: "max-content" } }}
        >
          <CardContent>
            <SkillsSection title="デザインスキル" skills={designSkills} />
          </CardContent>
        </Card>
        <Box sx={{ mt: { xs: 2, sm: 0 } }} />
        <Card
          sx={{ opacity: "0.6", width: { xs: "24rem", sm: "max-content" } }}
        >
          <CardContent>
            <SkillsSection title="フロントエンド" skills={frontendSkills} />
          </CardContent>
        </Card>
        <Box sx={{ mt: { xs: 2, sm: 0 } }} />
        <Card
          sx={{ opacity: "0.6", width: { xs: "24rem", sm: "max-content" } }}
        >
          <CardContent>
            <SkillsSection title="バックエンド" skills={backendSkills} />
          </CardContent>
        </Card>
        <Box sx={{ mt: { xs: 2, sm: 0 } }} />
      </Grid>
      <Box sx={{ mt: { xs: 0, sm: 2 } }} />
      <Grid sx={{ gap: "0 15px", justifyContent: "center" }} container>
        <Card
          sx={{ opacity: "0.6", width: { xs: "24rem", sm: "max-content" } }}
        >
          <CardContent>
            <SkillsSection title="DB" skills={dbSkills} />
          </CardContent>
        </Card>
        <Box sx={{ mt: { xs: 2, sm: 0 } }} />
        <Card
          sx={{ opacity: "0.6", width: { xs: "24rem", sm: "max-content" } }}
        >
          <CardContent>
            <SkillsSection title="インフラ・サーバー" skills={infraSkills} />
          </CardContent>
        </Card>
        <Box sx={{ mt: { xs: 2, sm: 0 } }} />
        <Card
          sx={{ opacity: "0.6", width: { xs: "24rem", sm: "max-content" } }}
        >
          <CardContent>
            <SkillsSection title="その他ツール等" skills={otherSkills} />
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default SkillSet;
