export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',


    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxt-tailwind-sample',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/css/main.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/recaptcha'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/recaptcha'
    ],

    recaptcha: {
        hideBadge: true, // Hide badge element (v3 & v2 via size=invisible)
        siteKey: '6LdAaY8aAAAAAF3q2ErR4CgYrzGCRbgOCvufbjFb',    // Site key for requests
        version: 2,     // Version
        size: 'invisible'        // Size: 'compact', 'normal', 'invisible' (v2)
    },
    publicRuntimeConfig: {
        recaptcha: {
            /* reCAPTCHA options */
            siteKey: '6LdAaY8aAAAAAF3q2ErR4CgYrzGCRbgOCvufbjFb' // for example
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    generate: {
        fallback: true
    }
}
