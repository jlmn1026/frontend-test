import { PrefectureSelect } from "@/features/PrefectureSelect";
import { styled } from "@linaria/react";

const PopulationPage = () => {
  return (
    <Container>
      <HeaderRow>
        <PrefectureSelect />
      </HeaderRow>
    </Container>
  );
};

export default PopulationPage;

const HeaderRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const Container = styled.div`
  display: flex;
  height: 100%;

  gap: 24px;
`;
