import styled from "styled-components";
import Container from "../../general/components/Container";
import Header from "./components/Header";
import Letters from "./components/Letters";
import Keyboard from "./components/Keyboard";
import Modal from "./components/Modal";
import { createPortal } from "react-dom";

const StyledContainer = styled(Container)`
  padding-top: 32px;
`;

const Game = () => {
  return (
    <>
      <StyledContainer bgBlur>
        <Header />
        <Letters />
        <Keyboard />
      </StyledContainer>
      {createPortal(<Modal />, document.body)}
    </>
  );
};

export default Game;
