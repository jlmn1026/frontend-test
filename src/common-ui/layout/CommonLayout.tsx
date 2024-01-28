import { styled } from "@linaria/react";

type Props = {
  children: React.ReactNode;
};

const CommonLayout = ({ children }: Props) => {
  return (
    <RootContainer>
      <Container>
        <Content>{children}</Content>
      </Container>
    </RootContainer>
  );
};

export default CommonLayout;

const RootContainer = styled.main`
  display: flex;
  justify-content: center;
  min-width: 600px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  min-width: 600px;
  max-width: 1600px;
  width: 100%;
  background: #e0f4ff;
`;

const Content = styled.div`
  min-height: 100vh;
`;
