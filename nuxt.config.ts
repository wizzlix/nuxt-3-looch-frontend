import { defineNuxtConfig } from 'nuxt'
import webpack from 'webpack'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

        app: {
            head: {
                title: 'Загрузка... Service Looch',
                htmlAttrs: {
                    lang: 'ru'
                },
                meta: [
                    {charset: 'utf-8'},
                    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                    {hid: 'description', name: 'description', content: ''},
                    {name: 'format-detection', content: 'telephone=no'},
                ],
                link: [{
                    rel: 'icon',
                    href: '/static/logo.svg'
                }],

            }
        },

        css : [
            "~/assets/bootstrap.scss",
            '~/static/css/datatables/datatables.bootstrap.css',
            '~/static/css/datatables/rowReorder.css',
            '~/static/css/datatables/datatables.css',
            '~/assets/css/main.css',
        ],

        styleResources: {
            scss: [
                '~assets/scss/mixins.scss',
                '~assets/scss/variables.scss'
            ]
        },

        vite: {
            css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: '@import "@/assets/scss/variables.scss";',
                    },
                },
            },
        },

        loading: {
            color: 'white',
        },

    buildModules: [ '@pinia/nuxt' ],



})
