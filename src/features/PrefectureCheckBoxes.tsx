import { useAllPrefectures } from "@/api/resasAPIHooks";
import { Checkbox } from "@/components/ui/checkbox";

import { prefecturesChecksAtom } from "@/state/selectedPrefecture";
import { styled } from "@linaria/react";
import { useAtom } from "jotai";

export function PrefectureCheckBoxes() {
  const allPrefectures = useAllPrefectures();

  return (
    <PrefectureSelect>
      {allPrefectures.map((prefecture) => {
        return (
          <PrefectureCheck
            key={prefecture.prefCode}
            prefecture={prefecture}
          ></PrefectureCheck>
        );
      })}
    </PrefectureSelect>
  );
}

const PrefectureSelect = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 12px;
`;

type Props = {
  prefecture: {
    prefCode: number;
    prefName: string;
  };
};

const PrefectureCheck = ({ prefecture }: Props) => {
  const [checks, setChecks] = useAtom(prefecturesChecksAtom);

  return (
    <PrefectureSelectOne>
      <Checkbox
        id={`prefecture${prefecture.prefCode}`}
        checked={checks.includes(prefecture.prefCode)}
        onCheckedChange={(checked: boolean) => {
          if (checked) {
            setChecks((current) => [...current, prefecture.prefCode]);
            return;
          }

          setChecks((current) =>
            current.filter((val) => val !== prefecture.prefCode)
          );
        }}
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={`prefecture${prefecture.prefCode}`}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
        >
          {prefecture.prefName}
        </label>
      </div>
    </PrefectureSelectOne>
  );
};

const PrefectureSelectOne = styled.div`
  display: flex;
  /* width: 180px; */
`;
