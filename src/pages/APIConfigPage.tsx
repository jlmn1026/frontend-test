import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageRoute } from "@/routes/pageRoutes";
import { apiKeyAtom } from "@/state/apiKey";
import { styled } from "@linaria/react";
import { useAtom } from "jotai";
import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const APIConfigPage = () => {
  const [, setApiKey] = useAtom(apiKeyAtom);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const storeAPIKey = useCallback(() => {
    localStorage.setItem("apiKey", inputValue);
    setApiKey(inputValue);
    alert("APIキーを設定しました");
    navigate(PageRoute.Top);
  }, [inputValue, navigate, setApiKey]);

  return (
    <Container>
      <Content>
        <InputContainer>
          <Text>
            RESASのAPIキーを入力してください（取得は
            <Link to="https://opendata.resas-portal.go.jp/" target="_blank">
              こちら
            </Link>
            から）
          </Text>

          <InputRow>
            <Input onChange={(e) => setInputValue(e.target.value)} />
            <Button onClick={storeAPIKey} disabled={inputValue.length === 0}>
              設定
            </Button>
          </InputRow>
        </InputContainer>
      </Content>
    </Container>
  );
};

export default APIConfigPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 24px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 12px;
`;

const InputContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Text = styled.div`
  display: flex;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
