import styled from "styled-components";

const StyledList = styled.ul`
  margin-top: 79px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledItem = styled.li`
  padding: 32px;
  border-radius: 20px;
  background: ${props => props.theme.colors.white};
`;

const StyledParagraph = styled.p`
  color: #887dc0;
  letter-spacing: 0.8px;
`;

const StyledTitle = styled.h4`
  display: flex;
  margin-bottom: 16px;
  gap: 16px;
  color: ${props => props.theme.colors.navy};
  font-size: 24px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  & > span {
    color: ${props => props.theme.colors.blue};
  }
`;

const HowToList = () => {
  return (
    <StyledList>
      <StyledItem>
        <StyledTitle>
          <span>01</span>
          Choose a category
        </StyledTitle>
        <StyledParagraph>
          First, choose a word category, like animals or movies. The computer
          then randomly selects a secret word from that topic and shows you
          blanks for each letter of the word.
        </StyledParagraph>
      </StyledItem>
      <StyledItem>
        <StyledTitle>
          <span>02</span>
          Choose a category
        </StyledTitle>
        <StyledParagraph>
          First, choose a word category, like animals or movies. The computer
          then randomly selects a secret word from that topic and shows you
          blanks for each letter of the word.
        </StyledParagraph>
      </StyledItem>
      <StyledItem>
        <StyledTitle>
          <span>03</span>
          Choose a category
        </StyledTitle>
        <StyledParagraph>
          First, choose a word category, like animals or movies. The computer
          then randomly selects a secret word from that topic and shows you
          blanks for each letter of the word.
        </StyledParagraph>
      </StyledItem>
    </StyledList>
  );
};

export default HowToList;
