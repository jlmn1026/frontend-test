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

const RootContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  max-width: 1600px;
  background: #e0f4ff;
`;

const Content = styled.div`
  min-height: 100vh;
`;
