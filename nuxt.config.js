export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "client",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/styles/app.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/auth.js",
    "~/plugins/validator.js",
    "~/plugins/axios.js"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/tailwindcss"],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth"
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: "http://localhost:8000/api"
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/auth/login",
            method: "post"
          },
          logout: {
            url: "/auth/logout",
            method: "post"
          },
          user: {
            url: "/auth/user",
            method: "get",
            propertyName: "data"
          }
        }
      }
    },
    redirect: {
      login: "/",
      logout: "/auth/login",
      home: "/",
      fallback: "/"
    }
  },

  tailwindcss: {
    theme: {},
    variants: {},
    plugins: [],
    purge: {
      enabled: process.env.NODE_ENV === "production",
      content: [
        "components/**/*.vue",
        "layouts/**/*.vue",
        "pages/**/*.vue",
        "plugins/**/*.js",
        "nuxt.config.js",
        // TypeScript
        "plugins/**/*.ts",
        "nuxt.config.ts"
      ]
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
