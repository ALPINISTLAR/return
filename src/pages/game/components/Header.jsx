import styled from "styled-components";
import IconButton from "../../../general/components/IconButton";
import Health from "./Health";
import useModal from "../../../general/hooks/useModal";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTitle = styled.h3`
  color: ${props => props.theme.colors.white};
  font-size: 40px;
  letter-spacing: -0.2px;
`;

const StyledLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const Header = () => {
  const { showModal } = useModal();
  return (
    <StyledHeader>
      <StyledLeft>
        <IconButton onClick={showModal} icon={"/images/icon-menu.svg"} />
        <StyledTitle>Countries</StyledTitle>
      </StyledLeft>
      <Health />
    </StyledHeader>
  );
};

export default Header;
