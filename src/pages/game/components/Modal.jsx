import styled from "styled-components";
import Title from "../../../general/components/Title";
import Button from "../../../general/components/Button";
import { useNavigate } from "react-router-dom";
import useModal from "../../../general/hooks/useModal";

const StyledDialog = styled.dialog`
  position: relative;
  padding: 0 26px 0 25px;
  min-width: 100%;
  min-height: 100%;
  background: inherit;
  color: white;
  border: none;
`;

const StyledModal = styled.div`
  width: calc(100% - 51px);
  height: 445px;

  border-radius: 48px;
  background: linear-gradient(180deg, #344aba 0%, rgba(0, 20, 121, 0.83) 100%);
  box-shadow: 0px 6px 0px 8px #2463ff inset, 0px -8px 0px 4px #140e66 inset;
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledTitle = styled(Title)`
  font-size: 94px;
  -webkit-text-stroke-width: 4px;
  letter-spacing: -0.47px;
  margin-top: -52px;
  margin-bottom: 43px;
`;

const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
`;
const Modal = () => {
  const navigate = useNavigate();
  const { closeModal } = useModal();
  return (
    <StyledDialog id="dialog">
      <StyledModal>
        <StyledTitle>Paused</StyledTitle>
        <StyledButtons>
          <Button onClick={closeModal} variant={"circular"}>
            continue
          </Button>
          <Button onClick={() => navigate("/category")} variant={"circular"}>
            new category
          </Button>
          <Button onClick={() => navigate("/")} variant={"circular"} danger>
            quit game
          </Button>
        </StyledButtons>
      </StyledModal>
    </StyledDialog>
  );
};

export default Modal;
