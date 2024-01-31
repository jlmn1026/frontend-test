import PopulationGraph from "@/features/PopulationGraph";
import { PrefectureSelect } from "@/features/PrefectureSelect";
import { styled } from "@linaria/react";

const PopulationPage = () => {
  return (
    <Container>
      <HeaderRow>
        <PrefectureSelect />
      </HeaderRow>
      <GraphContent>
        <PopulationGraph />
      </GraphContent>
    </Container>
  );
};

export default PopulationPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 24px;
`;

const HeaderRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const GraphContent = styled.div`
  display: flex;
  width: 100%;
`;
