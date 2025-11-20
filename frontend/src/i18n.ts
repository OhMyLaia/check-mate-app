import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import es from './locales/es.json';
import ca from './locales/ca.json';

// This configuration loads translations synchronously.
// For large apps, we would load these files lazily (asynchronously), 
// but this method guarantees they are available immediately.
i18n
    .use(initReactI18next) // Passes i18n instance to react-i18next
    .init({
        resources: {
            en: { translation: en },
            es: { translation: es },
            ca: { translation: ca }
        },
        lng: 'en', // Default language on startup
        fallbackLng: 'en', // Fallback if a translation is missing
        interpolation: {
            escapeValue: false // React already escapes values to prevent XSS
        }
    });

export default i18n;