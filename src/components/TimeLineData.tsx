// src/pages/Home.tsx
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BuildIcon from "@mui/icons-material/Build";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import CodeIcon from "@mui/icons-material/Code";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { Typography } from "@mui/material";

const timelineItems = [
  {
    time: "2021/04",
    icon: <EditNoteIcon sx={{ width: "2.5rem", height: "2.5rem" }} />,
    color: "inherit",
    title: "外部研修",
    description: "Java、HTML、CSSの基礎を勉強",
  },
  {
    time: "2021/07",
    icon: <LaptopMacIcon sx={{ width: "2.5rem", height: "2.5rem" }} />,
    color: "primary",
    title: "OJT",
    description: "社内売上管理システムの作成(Java)",
  },
  {
    time: "2021/10",
    icon: <BuildIcon sx={{ width: "2.5rem", height: "2.5rem" }} />,
    color: "primary",
    variant: "outlined",
    title: "保守",
    description: "データ変換ツール作成(Java)",
    connectorColor: "secondary.main",
  },
  {
    time: "2022/02",
    icon: <CodeIcon sx={{ width: "2.5rem", height: "2.5rem" }} />,
    color: "secondary",
    title: "システム開発",
    description: "部品表閲覧システム開発(Java)",
    connectorColor: "secondary.main",
  },
  {
    time: "2022/07",
    icon: <Diversity2Icon sx={{ width: "2.5rem", height: "2.5rem" }} />,
    color: "secondary",
    title: "メンター、OJT担当",
    description: "新入社員のメンター兼OJT担当者になる",
    connectorColor: "secondary.main",
  },
  {
    time: "2022/12",
    icon: <CodeIcon sx={{ width: "2.5rem", height: "2.5rem" }} />,
    color: "secondary",
    title: "システム開発",
    description: "販売管理システム開発(ノーコードツール)",
    connectorColor: "secondary.main",
  },
  {
    time: "2023/03",
    icon: <NoteAddIcon sx={{ width: "2.5rem", height: "2.5rem" }} />,
    color: "secondary",
    title: "資格取得",
    description: "AWS Certified Cloud Practitionerの資格を取得",
    connectorColor: "secondary.main",
  },
  {
    time: "2023/04",
    icon: <CodeIcon sx={{ width: "2.5rem", height: "2.5rem" }} />,
    color: "secondary",
    title: "システム開発",
    description: "栽培管理システム開発(React、Django、AWS)",
    connectorColor: "secondary.main",
  },
  {
    time: "2023/07",
    icon: <Diversity2Icon sx={{ width: "2.5rem", height: "2.5rem" }} />,
    color: "secondary",
    title: "メンター、OJT担当",
    description: "新入社員のメンター兼OJT担当者になる",
    connectorColor: "secondary.main",
  },
  {
    time: "2023/08",
    icon: <DesignServicesIcon sx={{ width: "2.5rem", height: "2.5rem" }} />,
    color: "secondary",
    title: "設計、開発",
    description: "労働通知書システム開発(Django,AWS)",
    connectorColor: "secondary.main",
  },
];

const TimeLineData = () => {
  return (
    <>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        {timelineItems.map((item, index) => (
          <TimelineItem key={index} sx={{ minHeight: "10rem" }}>
            <TimelineOppositeContent
              sx={{
                m: "auto 0",
                fontSize: "1.3rem",
                width: { xs: "6rem" },
                textAlign: { xs: "left", sm: "right" },
                padding: { xs: "0 10px 0 0", sm: "6px 16px" },
              }}
            >
              {item.time}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot
                sx={{ backgroundColor: "#79c6b6", boxShadow: "none" }}
              >
                {item.icon}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ m: "auto 0" }}>
              <Typography
                sx={{
                  fontSize: { xs: "1.1rem", sm: "1.5rem" },
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: "1rem", sm: "1.3rem" } }}>
                {item.description}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
};

export default TimeLineData;
