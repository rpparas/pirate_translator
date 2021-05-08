import { atom } from "recoil";

export const translationState = atom({
  key: "translationState",
  default: "",
});

export const dialogState = atom({
  key: "dialogState",
  default: false,
});
