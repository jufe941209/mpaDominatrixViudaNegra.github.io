import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import esCommon from './es/common.json';
import esHome from './es/home.json';
import esPracticas from './es/practicas.json';
import esPresenciales from './es/presenciales.json';
import esVirtuales from './es/virtuales.json';
import esTalleres from './es/talleres.json';
import esProfesionales from './es/profesionales.json';
import esPrensa from './es/prensa.json';
import esRopaInterior from './es/ropaInterior.json';
import esConstruction from './es/construction.json';
import esNotFound from './es/notFound.json';
import esMazmorra from './es/mazmorra.json';
import esRubberDollJade from './es/rubberDollJade.json';

import enCommon from './en/common.json';
import enHome from './en/home.json';
import enPracticas from './en/practicas.json';
import enPresenciales from './en/presenciales.json';
import enVirtuales from './en/virtuales.json';
import enTalleres from './en/talleres.json';
import enProfesionales from './en/profesionales.json';
import enPrensa from './en/prensa.json';
import enRopaInterior from './en/ropaInterior.json';
import enConstruction from './en/construction.json';
import enNotFound from './en/notFound.json';
import enMazmorra from './en/mazmorra.json';
import enRubberDollJade from './en/rubberDollJade.json';

export const defaultNS = 'common';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    defaultNS,
    ns: [
      'common', 'home', 'practicas', 'presenciales', 'virtuales',
      'talleres', 'profesionales', 'prensa', 'ropaInterior', 'construction', 'notFound', 'mazmorra', 'rubberDollJade',
    ],
    resources: {
      es: {
        common: esCommon,
        home: esHome,
        practicas: esPracticas,
        presenciales: esPresenciales,
        virtuales: esVirtuales,
        talleres: esTalleres,
        profesionales: esProfesionales,
        prensa: esPrensa,
        ropaInterior: esRopaInterior,
        construction: esConstruction,
        notFound: esNotFound,
        mazmorra: esMazmorra,
        rubberDollJade: esRubberDollJade,
      },
      en: {
        common: enCommon,
        home: enHome,
        practicas: enPracticas,
        presenciales: enPresenciales,
        virtuales: enVirtuales,
        talleres: enTalleres,
        profesionales: enProfesionales,
        prensa: enPrensa,
        ropaInterior: enRopaInterior,
        construction: enConstruction,
        notFound: enNotFound,
        mazmorra: enMazmorra,
        rubberDollJade: enRubberDollJade,
      },
    },
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'vn_lang',
      caches: ['localStorage'],
    },
  });

export default i18next;
