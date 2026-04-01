import { useEffect, useMemo, useState } from "react";
import { defaultLanguage, languageStorageKey, languages, messages } from "../i18n/translations";

const getInitialLanguage = () => {
  const saved = window.localStorage.getItem(languageStorageKey);
  return languages.includes(saved) ? saved : defaultLanguage;
};

export const useLanguage = () => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(languageStorageKey, language);
  }, [language]);

  const t = useMemo(() => messages[language], [language]);

  return { language, setLanguage, t };
};
