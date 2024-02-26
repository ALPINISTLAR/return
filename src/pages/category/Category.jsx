import styled from "styled-components";
import Container from "../../general/components/Container";
import BackHeader from "../../general/components/BackHeader";
import CategoryList from "./components/CategoryList";

const StyledContainer = styled(Container)`
  padding-top: 32px;
`;

const Category = () => {
  return (
    <StyledContainer bgBlur>
      <BackHeader icon={"/images/icon-back.svg"} title={"Pick a Category"} />
      <CategoryList />
    </StyledContainer>
  );
};

export default Category;
