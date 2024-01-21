// src/pages/Home.tsx
import React from "react";
import myImage from "../static/images/header_logo.png";
import { Typography, Box, Grid, Rating, useMediaQuery } from "@mui/material";

import { styled } from "@mui/system";

interface SkillCardProps {
  skill: string;
  experience: string;
  skillLevel: number;
}

const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  experience,
  skillLevel,
}) => (
  <Grid container columnSpacing={2}>
    <div style={{ width: "10rem" }}>
      <Typography>{skill}</Typography>
    </div>
    {useMediaQuery("(min-width:600px)") ? (
      <div style={{ width: "10rem" }}>
        <Typography>{experience}</Typography>
      </div>
    ) : (
      <></>
    )}

    <div style={{ width: "10rem" }}>
      <Rating precision={0.5} name="read-only" value={skillLevel} readOnly />
    </div>
  </Grid>
);

interface SkillsSectionProps {
  title: string;
  skills: SkillCardProps[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ title, skills }) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: "1.5rem",
          textAlign: "center",
          fontWeight: "bold",
          gap: "0 2rem",
          marginTop: "1rem",
          marginLeft: "0",
        }}
      >
        {title}
      </Typography>
      <Box sx={{ mt: 2 }} />
      <Grid container columnSpacing={2}>
        <div style={{ width: "10rem" }}>
          <Typography sx={{ fontWeight: "bold" }}>技術名</Typography>
        </div>
        {useMediaQuery("(min-width:600px)") ? (
          <div style={{ width: "10rem" }}>
            <Typography sx={{ fontWeight: "bold" }}>経験年数</Typography>
          </div>
        ) : (
          <></>
        )}

        <div style={{ width: "10rem" }}>
          <Typography sx={{ fontWeight: "bold" }}>スキルレベル</Typography>
        </div>
      </Grid>
      <Box sx={{ mt: 2 }} />
      {skills.map((skill, index) => (
        <React.Fragment key={index}>
          <SkillCard {...skill} />
          <Box sx={{ mt: 1 }} />
        </React.Fragment>
      ))}
    </>
  );
};

export default SkillsSection;
