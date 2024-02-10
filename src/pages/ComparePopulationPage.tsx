import ComparePopulationGraph from "@/features/ComparePopulationGraph";
import { GraphKindSelect } from "@/features/GraphKindSelect";
import { PrefectureCheckBoxes } from "@/features/PrefectureCheckBoxes";
import { styled } from "@linaria/react";

const PopulationPage = () => {
  return (
    <Container>
      <HeaderRow>
        <SelectRow>
          <PrefectureCheckBoxes />
        </SelectRow>
        <GraphKindSelect />
      </HeaderRow>
      <GraphContent>
        <ComparePopulationGraph />
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
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const SelectRow = styled.div`
  width: 80%;
`;

const GraphContent = styled.div`
  display: flex;
  width: 100%;
`;
