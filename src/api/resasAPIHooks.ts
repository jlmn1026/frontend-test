import useSWR from "swr";
import { commonFeatcher, useCommonSWR } from "./commonFeatcher";
import { apiKeyAtomSelector } from "@/state/apiKey";
import { useAtomValue } from "jotai";

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

export const useMultiplePopulation = (prefCodes: number[]) => {
  const apiKey = useAtomValue(apiKeyAtomSelector);
  const { data, isLoading, error } = useSWR<
    {
      prefCode: number;
      result: {
        boundaryYear: number;
        data: PopulationData[];
      };
    }[]
  >(
    `multiple-population-${prefCodes.join("-")}`,
    () => {
      return Promise.all(
        prefCodes.map((code: number) => {
          return commonFeatcher(
            `population/composition/perYear?prefCode=${code}`,
            apiKey ?? ""
          );
        })
      ).then((responses) => {
        return responses.map((res, index) => {
          return {
            prefCode: prefCodes[index],
            result: res,
          };
        });
      });
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
    }
  );

  if (isLoading || !data || error) return [];

  return data;
};
