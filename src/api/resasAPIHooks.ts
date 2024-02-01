import { useCommonSWR } from "./commonFeatcher";

export const useAllPrefectures = () => {
  const { data, isLoading, error } =
    useCommonSWR<{ prefCode: number; prefName: string }[]>("prefectures");

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
  const { data, isLoading, error } = useCommonSWR<{
    boundaryYear: number;
    data: PopulationData[];
  }>(`population/composition/perYear?prefCode=${prefCode}`, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });

  if (isLoading || !data || error) return undefined;

  return data;
};
