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
