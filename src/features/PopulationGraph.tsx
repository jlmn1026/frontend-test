import { usePopulation } from "@/api/resasAPIHooks";
import { prefectureAtomSelector } from "@/state/selectedPrefecture";
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
  prefecture: string;
};

const RootContent = ({ prefecture }: Props) => {
  const population = usePopulation(prefecture ?? "");

  if (!population || population.data.length === 0) {
    return null;
  }

  const data = {
    labels: population.data[0].data.map((val) => val.year),
    datasets: population.data.map((val, index) => {
      return {
        label: val.label,
        data: val.data.map((val) => val.value),
        borderColor: lineColors[index],
      };
    }),
  };

  const options = {
    maintainAspectRatio: false,
  };

  return <Line height="700px" data={data} options={options} />;
};

const PopulationGraph = () => {
  const prefecture = useAtomValue(prefectureAtomSelector);
  if (prefecture == null) {
    return null;
  }

  return <RootContent prefecture={prefecture} />;
};

export default PopulationGraph;
