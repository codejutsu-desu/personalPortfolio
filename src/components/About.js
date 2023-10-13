import React from "react";
import styled from "styled-components";
import { device } from "../globalHelpers";
import BottomWave from "../assets/wave2.svg";
import IconsAboutMe from "./IconsAboutMe/index";

const Section = styled.div`
  height: calc(100vh + 211px);
  position: relative;
  background: linear-gradient(to bottom, #55bdca 1%, #022949 99%);
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: clamp(1rem, 8vw, 3rem);
  font-family: CalibreBoldItalic;
  min-height: 568px;
  min-width: 280px;
  @media ${device.tablet} {
    height: calc(100vh + 540px);
  }
`;
const AboutMeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 20vh 0;
  z-index: 1;
`;
const Title = styled.h3`
  margin: 1em;
  text-align: center;
`;
const Summary = styled.p`
  font-size: clamp(1rem, 4vw, 2rem);
  margin: 0 2em;
  padding: 0.5em 0;
  font-family: CalibreRegular;
  @media ${device.laptop} {
    max-width: 50vw;
  }
`;

const About = () => {
  return (
    <Section>
      <img
        src={BottomWave}
        style={{ position: "absolute", bottom: 0, width: "100%" }}
        alt="wave"
      />
      <Title id="about">About Me</Title>
      <AboutMeContent>
        <Summary>
          An Arabic language, Qur'an and computer enthusiast who is committed to
          continuous personal and professional growth, with a strong emphasis on
          learning and staying current in the ever-evolving tech landscape.
          <br />
          <br /> I Possess excellent collaborative, analytical, and creative
          skills along with my Full Stack Web Development Expertise. I am
          proficient in JavaScript technology stacks. I am friendly and easy to
          work with. I guarantee your team and clients will love me!
          <br />
          <br />I spend most of my free time working on personal projects with a
          lineup of interesting applications I want to create. I am a
          self-taught developer having credentials from several Udemy and IBM
          certified Coursera courses.
        </Summary>
        <IconsAboutMe />
      </AboutMeContent>
    </Section>
  );
};

export default About;
