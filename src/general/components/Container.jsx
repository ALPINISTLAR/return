import styled from "styled-components";

const StyledContainer = styled.div`
  padding-top: 206px;
  min-height: 100%;
  padding-left: 25px;
  padding-right: 26px;
  background: url(/images/background-mobile.svg) no-repeat center/cover;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
