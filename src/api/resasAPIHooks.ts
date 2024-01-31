import useSWR from "swr";
import { commonFeatcher } from "./commonFeatcher";

export const useAllPrefectures = () => {
  const { data, isLoading, error } = useSWR<
    { prefCode: number; prefName: string }[]
  >("prefectures", () => {
    return commonFeatcher("prefectures");
  });

  if (isLoading || !data || error) return [];

  return data;
};

type PopulationData = {
  data: {
    year: number;
    value: number;
  }[];
  label: string;
};

export const usePopulation = (prefCode: string) => {
  const { data, isLoading, error } = useSWR<{
    boundaryYear: number;
    data: PopulationData[];
  }>(
    ["population/composition/perYear", prefCode],
    () => {
      return commonFeatcher(
        `population/composition/perYear?prefCode=${prefCode}`
      );
    },
    {
      revalidateOnMount: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
    }
  );

  if (isLoading || !data || error) return undefined;

  return data;
};
