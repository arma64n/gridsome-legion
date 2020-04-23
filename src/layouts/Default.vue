<template>
  <div>
    <header>
      <van-nav-bar title="Legion On Tour" :fixed="true" @click-left="onClickLeft()" />
    </header>
    <div class="content">
      <slot />
    </div>
    <footer>
      <van-tabbar v-model="activeTab">
        <van-tabbar-item
          v-for="(link, index) in links"
          :key="link.icon"
          :to="link.path"
          :icon="activeTab == index ? link.icon : `${link.icon}-o`"
        ></van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      links: [
        { icon: "friends", path: "/" },
        { icon: "underway", path: "/matches" },
        { icon: "location", path: "/cities" },
        { icon: "fire", path: "/opponents" }
      ]
    };
  },
  methods: {
    onClickLeft() {
      console.log("go back");
    }
  }
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.content {
  padding: 46px 0 50px 0;
}
</style>
