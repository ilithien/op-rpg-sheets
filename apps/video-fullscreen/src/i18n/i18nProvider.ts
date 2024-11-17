import i18next from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

export function setupi18n() {
  const namespaces = [
    "common",
    "abilities",
    "disciplines",
    "predator_types",
    "systems",
  ];

  i18next
    .use(initReactI18next)
    .use(Backend)
    .init({
      fallbackLng: "es",
      debug: true,
      ns: namespaces,
      backend: {
        loadPath: `./assets/i18n/{{lng}}/{{ns}}.json`,
      },
      keySeparator: ".",
      nsSeparator: ":",
    });

  i18next.loadLanguages(["es"]);

  return i18next;
}
