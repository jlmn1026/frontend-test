import { atom } from "jotai";

export const apiKeyAtom = atom<string | undefined>(undefined);

export const apiKeyAtomSelector = atom((get) => {
  return get(apiKeyAtom) ?? localStorage.getItem("apiKey");
});
