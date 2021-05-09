import { atom } from "recoil";

// defines data model for translation and stores it as an atom (state)

export const translationDataModel = atom({
  key: "translationDataModel",
  default: {
    lang: "pirate", // default language to use
    translated: "", // output from translation
    isLoading: false, // whether request is in progress
    openDialog: false, // whether to show dialog
    errorMessage: "", // any error message from API call
  },
});
