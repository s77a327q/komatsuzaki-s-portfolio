// src/pages/Home.tsx
import React from "react";
import {
  Typography,
  AppBar,
  Button,
  Box,
  Avatar,
  useMediaQuery,
} from "@mui/material";

import { styled } from "@mui/system";

const TitleText = styled(Typography)({
  fontFamily: "Capriola, sans-serif",
  overflow: "hidden",
});

const Introduction: React.FC = () => {
  const matches: boolean = useMediaQuery("(min-width:600px)");
  return (
    <Box
      id="introduction"
      sx={{
        width: "100%",
        height: { xs: "100vh", sm: "calc(100vh - 60px)" },
        paddingTop: { xs: "1rem", sm: "10rem" },
        px: { xs: "20px" },
        textAlign: "center",
      }}
    >
      <TitleText sx={{ fontSize: "3rem", margin: "3rem 0" }}>
        Self Introduction
      </TitleText>
      <Box>
        <Box>
          {matches ? (
            <Typography sx={{ fontSize: "1.1rem", lineHeight: "2.3rem" }}>
              　はじめまして。平成10年生まれの25歳エンジニアの小松崎
              嶺と申します。社会人歴3年目です。<br></br>
              　新卒では中小企業のSIerに入社しました。
              主にWebアプリケーションを作成しており、柔軟な対応力を活かして業務に取り組んでいます。
              <br></br>
              週に約5時間の自己学習時間を設け、新しい言語の習得に取り組んでいます。また、新人のOJT担当としてJavaの指導にあたる一方で、
              <br></br>
              Python、AWS、JavaScript/TypeScript(React)を活用して現在のプロジェクトの開発に従事しています。
            </Typography>
          ) : (
            <Typography sx={{ fontSize: "1.1rem", lineHeight: "2.3rem" }}>
              はじめまして。<br></br>
              社会人3年目小松崎嶺と申します。<br></br>
              　新卒では中小企業のSIerに入社しました。
              主にWebアプリを作成しており、<br></br>
              柔軟な対応力を活かして業務に取り組んでいます。
              週に約5時間の学習時間を設け、<br></br>
              新しい言語の習得に取り組んでいます。<br></br>
              また、新人のOJT担当としてJavaの指導にあたる一方で、
              Python、AWS、JavaScript/TypeScript(React)を活用し、<br></br>
              現在のプロジェクトに従事しています。
            </Typography>
          )}
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Introduction;
