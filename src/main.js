// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vue from "vue";
import DefaultLayout from "~/layouts/Default.vue";
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
