import { atom } from "jotai";

export const prefectureAtom = atom<string | undefined>(undefined);

export const prefectureAtomSelector = atom((get) => get(prefectureAtom));

export const prefecturesChecksAtom = atom<number[]>([]);
