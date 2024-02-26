import styled from "styled-components";
import Container from "../../general/components/Container";
import BackHeader from "../../general/components/BackHeader";
import HowToList from "./components/HowToList";

const StyledContainer = styled(Container)`
  padding-top: 32px;
`;

const HowTo = () => {
  return (
    <StyledContainer bgBlur>
      <BackHeader icon={"/images/icon-back.svg"} title={"How to Play"} />
      <HowToList />
    </StyledContainer>
  );
};

export default HowTo;
