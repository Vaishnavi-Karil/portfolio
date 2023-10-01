import React, { useState } from "react";
import {
  StyledCardContainer,
  StyledCardHeadingContainer,
  StyledHeading1,
  StyledIcon,
  StyledMoreInformation,
  StyledParaTypography,
} from "@/styles/Styles";
import {
  StyledCardDetails,
  StyledCardDetailsContainer,
  StyledRenderToolContainer,
  StyledTab,
  StyledTabs,
  StyledToolBarHeader,
  StyledToolElement,
} from "./SkillsStyle";
import checkmark from "../../../assets/checkmark.png";
import { ArrayOfSkills } from "@/app/data/constants";
import { useRouter } from "next/navigation";
export const Skills = ({ currentTab, setcurrentTab }) => {
  const router = useRouter();
  return (
    <StyledCardContainer id="skills">
      <StyledCardHeadingContainer>
        <StyledMoreInformation>Explore My</StyledMoreInformation>
        <StyledHeading1>Skills & Tools</StyledHeading1>
        <StyledTabs>
          <StyledTab
            id="skills_tab"
            onClick={() => {
              setcurrentTab("Skills");
              console.log("router", router);
              router.push("/#skills");
            }}
            color={currentTab === "Skills" ? "rgb(53, 53, 53)" : "white"}
            background={currentTab === "Skills" ? "white" : "transparent"}
          >
            Skills
          </StyledTab>
          <StyledTab
            id="tools_tab"
            onClick={() => {
              setcurrentTab("Tools");
              console.log("router", router);
              router.push("/#tools");
            }}
            color={currentTab === "Tools" ? "rgb(53, 53, 53)" : "white"}
            background={currentTab === "Tools" ? "white" : "transparent"}
          >
            Tools
          </StyledTab>
        </StyledTabs>
      </StyledCardHeadingContainer>
      <StyledCardDetails>
        {ArrayOfSkills.map((element, index) => {
          const { title, skills } = element;
          return (
            <StyledCardDetailsContainer key={"skills" + index}>
              <StyledToolBarHeader>{title}</StyledToolBarHeader>
              <StyledRenderToolContainer>
                {skills.map((Skill) => {
                  const { skillname, proficiency } = Skill;
                  return (
                    <StyledToolElement key={Skill}>
                      <StyledIcon src={checkmark} alt="checkmark" />
                      <div>
                        <p>{skillname}</p>
                        <StyledParaTypography>
                          {proficiency}
                        </StyledParaTypography>
                      </div>
                    </StyledToolElement>
                  );
                })}
              </StyledRenderToolContainer>
            </StyledCardDetailsContainer>
          );
        })}
      </StyledCardDetails>
    </StyledCardContainer>
  );
};
