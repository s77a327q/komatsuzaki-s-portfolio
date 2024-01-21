import React from "react";
import { Typography, Box } from "@mui/material";
import { useSpring, animated } from "react-spring";
import { styled } from "@mui/system";
import programmingImg from "../static/images/programing.png";

const TitleText = styled(animated(Typography))({
  fontFamily: "Capriola, sans-serif",
  color: "white",
  overflow: "hidden",
});

const BoxAnime = styled(animated(Box))({});

const Welcome: React.FC = () => {
  const scrollToSectionIntroduction = () => {
    const element = document.getElementById("introduction");
    element!.scrollIntoView({ behavior: "smooth" });
  };

  const titleTextPropsX = useSpring({
    from: { opacity: 0, transform: "translateX(800px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 800, tension: 80, friction: 12 },
  });

  const titleTextPropsY = useSpring({
    from: { opacity: 0, transform: "translateY(-800px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1500, tension: 80, friction: 12 },
  });

  const imageTextPropsY = useSpring({
    from: { opacity: 0, transform: "translateY(800px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1500, tension: 80, friction: 12 },
  });

  const titleTextProps = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: async (next) => {
      while (true) {
        await next({ opacity: 1, transform: "translateY(-20px)" });
        await next({ opacity: 1, transform: "translateY(20px)" });
      }
    },
    config: { duration: 2000, tension: 120, friction: 14 },
  });

  return (
    <>
      <Box
        id="welcome"
        sx={{
          backgroundColor: "#79c6b6",
          height: { xs: "100vh", sm: "calc(100vh - 60px)" },
          width: "100%",
          paddingTop: "6rem",
          textAlign: "center",
        }}
      >
        <Box sx={{ display: "grid", justifyContent: "center" }}>
          <TitleText style={titleTextPropsX} sx={{ fontSize: "4.2rem" }}>
            Welcome!!
          </TitleText>
          <TitleText style={titleTextPropsY} sx={{ fontSize: "2rem" }}>
            Komatsuzaki's Portfolio
          </TitleText>
          <BoxAnime style={imageTextPropsY}>
            <img
              style={{ width: "24rem", height: "22rem", marginTop: "-2rem" }}
              src={programmingImg}
            />
          </BoxAnime>
          <Box
            onClick={scrollToSectionIntroduction}
            sx={{ textAlign: "center" }}
          >
            <TitleText
              style={titleTextProps}
              sx={{
                fontSize: "5rem",
                cursor: "pointer",
              }}
            >
              ⬇︎
            </TitleText>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Welcome;
