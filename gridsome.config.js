// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Legion On Tour",
  plugins: [
    {
      use: "@gridsome/source-strapi",
      options: {
        apiURL: "https://strapi-legion.herokuapp.com/",
        queryLimit: 1000, // Defaults to 100
        contentTypes: ["matches", "cities", "opponents", "legioners"],
      },
    },
  ],
  templates: {
    StrapiLegioners: [
      {
        path: "/legioners/:id",
        component: "@/src/templates/StrapiLegioners.vue",
      },
    ],
    StrapiMatches: [
      {
        path: "/matches/:id",
        component: "@/src/templates/StrapiMatches.vue",
      },
    ],
    StrapiCities: [
      {
        path: "/cities/:id",
        component: "@/src/templates/StrapiCities.vue",
      },
    ],
    StrapiOpponents: [
      {
        path: "/opponets/:id",
        component: "@/src/templates/StrapiOpponents.vue",
      },
    ],
  },
};
