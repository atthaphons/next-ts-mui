import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import thTranslation from './locales/th/translation.json';
import enHome from './locales/en/home.json';
import enMember from './locales/en/member.json';
import thHome from './locales/th/home.json';
import thMember from './locales/th/member.json';
import enLogin from './locales/en/login.json';
import thLogin from './locales/th/login.json';
import enButton from './locales/en/common.button.json';
import thButton from './locales/th/common.button.json';

i18n
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        },
        resources: {
            en: {
                translation: {
                    ...enTranslation,
                    ...enHome,
                    ...enMember,
                    ...enLogin,
                    ...enButton
                }
            },
            th: {
                translation: {
                    ...thTranslation,
                    ...thHome,
                    ...thMember,
                    ...thLogin,
                    ...thButton
                }
            }
        },
        lng: 'en', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
