import styled from "styled-components";
import Button from "../../../general/components/Button";
import { useNavigate } from "react-router-dom";

const StyledCategoryList = styled.ul`
  padding-top: 100px;
  display: grid;
  gap: 16px;
`;

const StyledItem = styled.li``;

const CategoryList = () => {
  const navigate = useNavigate();

  return (
    <StyledCategoryList>
      <StyledItem>
        <Button onClick={() => navigate("/game")} variant={"rectangular"}>
          movies
        </Button>
      </StyledItem>
      <StyledItem>
        <Button variant={"rectangular"}>movies</Button>
      </StyledItem>
      <StyledItem>
        <Button variant={"rectangular"}>movies</Button>
      </StyledItem>
    </StyledCategoryList>
  );
};

export default CategoryList;
