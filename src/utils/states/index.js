import { atom } from "jotai";

export const playerStatus = atom({
  link: null,
  playing: false,
  name: null,
  artist: null,
});
