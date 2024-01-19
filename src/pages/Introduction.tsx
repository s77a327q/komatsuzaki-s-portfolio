// src/pages/Home.tsx
import React from "react";
import { Typography, AppBar, Button, Box, Avatar } from "@mui/material";

import { styled } from "@mui/system";

const TitleText = styled(Typography)({
  fontFamily: "Capriola, sans-serif",
  overflow: "hidden",
});

const Introduction: React.FC = () => {
  return (
    <Box
      id="introduction"
      sx={{
        height: "calc(100vh - 60px)",
        width: "100%",
        paddingTop: "10rem",
        textAlign: "center",
      }}
    >
      <TitleText sx={{ fontSize: "3rem", margin: "3rem 0" }}>
        Self Introduction
      </TitleText>
      <Box>
        <Box sx={{ fontSize: "1.1rem", lineHeight: "2.3rem" }}>
          　はじめまして。平成10年生まれの25歳エンジニアの小松崎
          嶺と申します。社会人歴3年目です。<br></br>
          　新卒では中小企業のSIerに入社しました。
          主にWebアプリケーションを作成しており、柔軟な対応力を活かして業務に取り組んでいます。
          <br></br>
          週に約5時間の自己学習時間を設け、新しい言語の習得に取り組んでいます。また、新人のOJT担当としてJavaの指導にあたる一方で、
          <br></br>
          Python、AWS、JavaScript/TypeScript(React)を活用して現在のプロジェクトの開発に従事しています。
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Introduction;
