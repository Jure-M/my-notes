import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { languages } from './settings';

const initI18next = async (lng: string, ns: string | string[]) => {
  const i18nInstance = createInstance({ lowerCaseLng: true, appendNamespaceToMissingKey: true });

  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`),
      ),
    )
    .init({
      supportedLngs: languages,
      lng,
      ns,
    });

  return i18nInstance;
};

export async function getTranslation(ns: string | string[], lng: string) {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.t,
    i18n: i18nextInstance,
  };
}
