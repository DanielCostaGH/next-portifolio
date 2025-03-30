import intl from "react-intl-universal";
import { ExperienceTranslation } from "./types";

export const getExperience = (key: string): ExperienceTranslation => {
  const currentLocale = intl.getInitOptions()?.currentLocale;
  const allLocales = intl.getInitOptions()?.locales;

  if (
    currentLocale &&
    allLocales &&
    allLocales[currentLocale] &&
    allLocales[currentLocale].experience &&
    allLocales[currentLocale].experience[key]
  ) {
    return allLocales[currentLocale].experience[key];
  }

  // fallback
  return {
    company: "",
    position: "",
    description: "",
  };
};