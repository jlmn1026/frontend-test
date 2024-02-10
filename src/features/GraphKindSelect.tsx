import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { selectedGraphKindAtom } from "@/state/graphConfig";
import { useAtom } from "jotai";

export function GraphKindSelect() {
  const [graphKind, setGraphKind] = useAtom(selectedGraphKindAtom);

  return (
    <Select
      value={graphKind}
      onValueChange={(value) => {
        setGraphKind(value);
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="表示する人口種別を選択" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {["総人口", "年少人口", "生産年齢人口", "老年人口"].map((kind) => {
            return (
              <SelectItem key={kind} value={kind}>
                {kind}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
