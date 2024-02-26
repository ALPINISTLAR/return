import styled from "styled-components";

const StyledHealth = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  & > img {
    width: 26px;
  }
`;

const StyledHealthContainer = styled.div`
  border-radius: 96px;
  width: 57px;
  padding: 4px;
  height: 16px;
  background: ${props => props.theme.colors.white};
`;
const StyledHealthBar = styled.div`
  width: 70%;
  height: 100%;
  background: ${props => props.theme.colors.navy};
  border-radius: inherit;
`;

const Health = () => {
  return (
    <StyledHealth>
      <StyledHealthContainer>
        <StyledHealthBar></StyledHealthBar>
      </StyledHealthContainer>
      <img src="/images/icon-heart.svg" alt="" />
    </StyledHealth>
  );
};

export default Health;
