import { defineNuxtConfig } from 'nuxt'
import webpack from 'webpack'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css : [
        "~/assets/bootstrap.scss",
        '~/assets/css/main.css',
        '~/static/css/datatables/rowReorder.css',
        '~/static/css/datatables/datatables.bootstrap.css',
        // 'quill/dist/quill.snow.css',
        // 'quill/dist/quill.bubble.css',
        // 'quill/dist/quill.core.css'
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

    build: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            })
        ]
    },

    buildModules: [ '@pinia/nuxt' ],




})
