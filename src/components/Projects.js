import React from "react";
import styled from "styled-components";
import { device } from "../globalHelpers";
import iTravelImage from "./iTravel.png";
import alHamra from "./alHamra.png";
import peak1 from "../assets/peak1.svg";
import peak2 from "../assets/peak2.svg";

const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #022949;
  font-family: CalibreRegular;
  font-size: clamp(1rem, 8vw, 3rem);
  padding: 10rem 0;
  min-height: 568px;
  min-width: 280px;
  @media ${device.laptop} {
    padding: 15rem 0;
  }
  @media ${device.laptopL} {
    padding: 28rem 5.6rem;
  }
`;
const SectionTitle = styled.h3`
  color: #fff;
  margin: 1em 0;
  font-family: CalibreBoldItalic;
`;
const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #fff;
  padding: 1em 0;
  @media ${device.laptopL} {
    flex-direction: row;
    margin: 0 2em;
    max-height: 600px;
  }
  @media ${device.desktopL} {
    justify-content: center;
  }
`;
const ProjectTitle = styled.h5`
  margin: 0.5em 0;
  color: #f27d42;
  font-family: CalibreBoldItalic;
  @media ${device.desktop} {
    margin: 0;
  }
`;
const SkillsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  padding: 0;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
`;
const Skill = styled.li`
  list-style: none;
  background-color: #55bdca;
  padding: 0.5em;
  margin: 0.2em;
`;
const Summary = styled.p`
  font-size: clamp(1rem, 5vw, 1.6rem);
`;
const ProjectDetails = styled.div`
  margin: 0 1em;
  max-width: 700px;
`;
const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 1em 0;
  font-family: MontserratBold;
  @media ${device.laptopL} {
    justify-content: unset;
  }
`;
const Link = styled.a`
  display: block;
  width: 6em;
  font-size: 0.525em;
  padding: 0.225em 1em;
  text-align: center;
  color: #55bdca;
  text-decoration: none;
  border: 2px solid;
  border-image: linear-gradient(135deg, #02aab0, #00cdac);
  border-image-slice: 1;
  cursor: pointer;
  background-size: 200% 100%;
  background-image: linear-gradient(to right, transparent 50%, #55bdca 50%);
  transition: background-position 0.5s;
  z-index: 1;
  margin-right: 1em;
  &:hover {
    color: #fff;
    background-position: -100% 0;
  }
`;
const LineBreak = styled.div`
  border-bottom: 1px solid #96ffff;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const PreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1.5;
  max-width: 800px;
  position: relative;
`;
const Preview = styled.img`
  aspect-ratio: 4/3;
  width: 100%;
  height: 100%;
  max-width: 665px;
  max-height: 466px;
`;
const Projects = () => {
  return (
    <Section>
      <img
        src={peak1}
        alt="wave"
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
        }}
      />
      <img
        src={peak2}
        alt="wave"
        style={{ position: "absolute", bottom: "0px", width: "100%" }}
      ></img>
      <SectionTitle>Projects</SectionTitle>
      <ProjectContainer>
        <PreviewContainer>
          <Preview src={alHamra} alt="Image Alt Text" />
        </PreviewContainer>
        <ProjectDetails>
          <ProjectTitle>Al Hamra Inn</ProjectTitle>
          <SkillsContainer>
            <Skill>React</Skill>
            <Skill>React Query</Skill>
            <Skill>Styled Component</Skill>
            <Skill>Javascript</Skill>
            <Skill>React Router Dom</Skill>
            <Skill>Supabase</Skill>
          </SkillsContainer>
          <Summary>
            A hotel management web application designed for clients and
            employee. It keeps track of check in and check out time, duration of
            stay. Employees can update cabins and many interesting features.
          </Summary>
          <Buttons>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://al-hamra-o95hb4w51-codejutsu-desu.vercel.app/"
            >
              Live Demo
            </Link>
          </Buttons>
        </ProjectDetails>
        <LineBreak />
      </ProjectContainer>
      <ProjectContainer>
        <PreviewContainer>
          <Preview src={iTravelImage} alt="Image Alt Text" />
        </PreviewContainer>
        <ProjectDetails>
          <ProjectTitle>iTravel</ProjectTitle>
          <SkillsContainer>
            <Skill>React</Skill>
            <Skill>Context API</Skill>
            <Skill>CSS modules</Skill>
            <Skill>Javascript</Skill>
            <Skill>React Router Dom</Skill>
            <Skill>Leaflet Library</Skill>
          </SkillsContainer>
          <Summary>
            A web application designed for users to log and manage their visited
            locations, showcasing features like routing, the React Context API,
            and integration with the Leaflet library, geolocation tracking and
            many more
          </Summary>
          <Buttons>
            <Link
              href="https://i-travel.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </Link>
          </Buttons>
        </ProjectDetails>
        <LineBreak />
      </ProjectContainer>
    </Section>
  );
};
export default Projects;
