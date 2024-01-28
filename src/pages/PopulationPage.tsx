import { useAllPrefectures } from "@/api/resasHooks";
import { styled } from "@linaria/react";

const PopulationPage = () => {
  const allPrefectures = useAllPrefectures();
  return (
    <Container>
      {allPrefectures.map((prefecture) => {
        return <div>{prefecture.prefName}</div>;
      })}
    </Container>
  );
};

export default PopulationPage;

const Container = styled.div`
  display: flex;
  height: 100%;

  gap: 24px;
`;
