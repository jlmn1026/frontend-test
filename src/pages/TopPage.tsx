import { PageRoute } from "@/routes/pageRoutes";
import { styled } from "@linaria/react";
import { Link } from "react-router-dom";

const TopPage = () => {
  return (
    <Container>
      <Link to={PageRoute.Population}>都道府県別人口</Link>
    </Container>
  );
};

export default TopPage;

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
