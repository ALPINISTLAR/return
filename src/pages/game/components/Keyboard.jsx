import styled from "styled-components";

const StyledKeyboard = styled.div`
  margin-top: 118px;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  column-gap: 8px;
  row-gap: 24px;
`;

const Key = styled.button`
  color: ${props => props.theme.colors.navy};

  font-size: 24px;
  border-radius: 8px;
  background: white;
  border: none;

  line-height: 150%; /* 36px */
  letter-spacing: -0.48px;
  text-transform: uppercase;

  padding: 10px;
  cursor: pointer;
`;

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const Keyboard = () => {
  return (
    <StyledKeyboard>
      {alphabet.map(letter => (
        <Key key={letter}>{letter}</Key>
      ))}
    </StyledKeyboard>
  );
};

export default Keyboard;
