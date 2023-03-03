import ru from './locales/ru.json'
import en from './locales/en.json'
import { localeDomains } from './locales/locale-domains'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/i18n',
        '@nuxtjs/tailwindcss'
      ],
      i18n: {
        detectBrowserLanguage: false,
        differentDomains: true,
        locales: [
            {
                code: 'ru',
                domain: localeDomains.ru
            },
            {
                code: 'en',
                domain: localeDomains.en
            }
        ],
        vueI18n: {
            messages: {
                en,
                ru
            }
        }
      }
})
