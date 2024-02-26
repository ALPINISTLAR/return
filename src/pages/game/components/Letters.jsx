import styled from "styled-components";

const StyledLetters = styled.div`
  margin-top: 92px;
`;
const Letter = styled.div`
  display: flex;
  width: 40px;
  height: 66px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${props => props.theme.colors.blue};
  box-shadow: 0px 1px 0px 6px #3c74ff inset, 0px -2px 0px 3px #140e66 inset;

  color: ${props => props.theme.colors.white};
  font-size: 40px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const Letters = () => {
  return (
    <StyledLetters>
      <Row>
        <Letter>U</Letter>
        <Letter></Letter>
      </Row>
      <Row>
        <Letter>U</Letter>
        <Letter></Letter>
        <Letter></Letter>
        <Letter></Letter>
        <Letter></Letter>
        <Letter></Letter>
      </Row>
    </StyledLetters>
  );
};

export default Letters;
