import styled from "styled-components";

export const StyledExperience = styled.div`
  margin: 0.8rem 0rem;
  padding: 1rem;
  border: rgb(53, 53, 53) 1px solid;
  box-shadow: 0rem 0rem 100rem 0rem rgb(0 0 0 / 73%);
  background: ${({ theme }) => theme.cardBg};
  border-radius: 0.5rem;
`;
StyledExperience.displayName = "StyledExperience";

export const StyledRoleAndDurationOfWork = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

StyledRoleAndDurationOfWork.displayName = "StyledRoleAndDurationOfWork";

export const StyledCompanyName = styled.p`
  /* color: rgb(85, 85, 85); */
  /* color: ${(theme) => theme?.text?.textColor}; */
  color: ${({ theme }) => theme.text.textColor};
  font-weight: 600;
  font-size: ${(props) => props?.styling?.fontSize || "1.9rem"};
  line-height: 3rem;
  border-bottom : ${(props) => props?.styling?.borderBottom || "none"};
`;

StyledCompanyName.displayName = "StyledCompanyName";


export const StyledDescription = styled.div`
  padding: 0.8rem 0rem;
  font-size: 1.1rem;
`;
StyledDescription.displayName = "StyledDescription";

export const StyledTotalExperience = styled.p`
/* color: rgb(85, 85, 85); */
/* color: ${(theme) => theme?.text?.textColor}; */
color: ${({ theme }) => theme.text.textColor};
  font-weight: 600;
  font-size: 1rem;
  line-height: 3rem;`; 

StyledTotalExperience.displayName = "StyledTotalExperience";


export const StyledExperienceHeadingContainer = styled.div`
display : flex; 
flex-direction : row;
justify-content: space-between;`; 

StyledExperienceHeadingContainer.displayName = "StyledExperienceHeadingContainer";