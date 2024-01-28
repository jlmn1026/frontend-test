import useSWR from "swr";
import { commonFeatcher } from "./commonFeatcher";

export const useAllPrefectures = () => {
  const { data, isLoading, error } = useSWR<
    { prefCode: number; prefName: string }[]
  >("prefectures", () => {
    return commonFeatcher("prefectures");
  });

  if (error) {
    console.error(error);
  }

  if (isLoading || !data) return [];

  return data;
};
