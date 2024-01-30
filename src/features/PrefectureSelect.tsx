import { useAllPrefectures } from "@/api/resasAPIHooks";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { selectedPrefectureAtom } from "@/state/selectedPrefecture";
import { useAtom } from "jotai";

export function PrefectureSelect() {
  const allPrefectures = useAllPrefectures();
  const [, setPrefecture] = useAtom(selectedPrefectureAtom);

  return (
    <Select
      onValueChange={(value) => {
        setPrefecture(value);
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="都道府県を選択" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {allPrefectures.map((prefecture) => {
            return (
              <SelectItem
                key={prefecture.prefCode}
                value={`${prefecture.prefCode}`}
              >
                {prefecture.prefName}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
