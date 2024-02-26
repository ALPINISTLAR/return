import styled from "styled-components";
import PlayBtn from "./components/PlayBtn";
import Button from "../../general/components/Button";
import Container from "../../general/components/Container";

const Menu = styled.div`
  position: relative;
  padding-top: 138px;
  border-radius: 48px;
  background: linear-gradient(180deg, #344aba 0%, rgba(0, 20, 121, 0.83) 100%);
  box-shadow: 0px 6px 0px 8px #2463ff inset, 0px -8px 0px 4px #140e66 inset;
  height: 481px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    max-width: 592px;
    margin: 0 auto;
  }
`;

const Img = styled.img`
  position: absolute;
  top: -50px;
  width: 250px;
  @media screen and (min-width: 768px) {
    width: 355px;
    top: -80px;
  }
`;

const Home = () => {
  return (
    <Container>
      <Menu>
        <Img src="/images/logo.svg" alt="" />
        <PlayBtn />
        <Button variant={"circular"} danger>
          how to play
        </Button>
      </Menu>
    </Container>
  );
};

export default Home;
