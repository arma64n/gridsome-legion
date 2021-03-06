// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from "@/layouts/Default.vue";
import InfiniteLoading from "vue-infinite-loading";
import "normalize.css";
import "@/assets/styles.css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(InfiniteLoading);

  head.script.push({
    src: "https://maps.api.2gis.ru/2.0/loader.js?pkg=full",
  });
}
