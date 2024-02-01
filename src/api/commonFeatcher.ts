import { apiKeyAtomSelector } from "@/state/apiKey";
import { useAtomValue } from "jotai";
import useSWR, { BareFetcher, SWRConfiguration } from "swr";

const headers = new Headers();

export const commonFeatcher = async (path: string, apiKey: string) => {
  headers.set("x-api-key", apiKey);
  return fetch(`https://opendata.resas-portal.go.jp/api/v1/${path}`, {
    headers,
  })
    .then((res) => res.json())
    .then((json) => json.result);
};

export const useCommonSWR = <T>(
  path: string,
  swrConfig?: SWRConfiguration<T, Error, BareFetcher<T>>
) => {
  const apiKey = useAtomValue(apiKeyAtomSelector);
  return useSWR<T>(
    path,
    () => {
      return commonFeatcher(path, apiKey ?? "");
    },
    swrConfig
  );
};
