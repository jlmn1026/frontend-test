import { useAllPrefectures, useMultiplePopulation } from "@/api/resasAPIHooks";
import { prefecturesChecksAtom } from "@/state/selectedPrefecture";
import { useAtomValue } from "jotai";

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { selectedGraphKindAtom } from "@/state/graphConfig";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Title
);

const lineColors = [
  "rgb(75, 192, 192)",
  "rgb(192, 75, 192)",
  "rgb(192, 192,75)",
  "rgb(75, 75, 192)",
];

type Props = {
  prefectures: number[];
};

const ComparePopulationGraph = () => {
  const prefectures = useAtomValue(prefecturesChecksAtom);

  if (!prefectures || prefectures.length === 0) {
    return null;
  }

  return <RootContent prefectures={prefectures} />;
};

export default ComparePopulationGraph;

const RootContent = ({ prefectures }: Props) => {
  const graphKind = useAtomValue(selectedGraphKindAtom);
  const allPrefectures = useAllPrefectures();
  const populations = useMultiplePopulation(prefectures);
  if (!populations || populations.length === 0) {
    return null;
  }

  const data = {
    labels: populations[0].result.data[0].data.map((val) => val.year),
    datasets: populations.flatMap((data, index) => {
      return data.result.data.flatMap((val) => {
        if (val.label !== graphKind) {
          return [];
        }

        return {
          label: `${
            allPrefectures.find((pref) => pref.prefCode === data.prefCode)
              ?.prefName
          }-${val.label}`,
          data: val.data.map((val) => val.value),
          borderColor: lineColors[index],
        };
      });
    }),
  };

  const options = {
    maintainAspectRatio: false,
  };

  return <Line height="700px" data={data} options={options} />;
};
