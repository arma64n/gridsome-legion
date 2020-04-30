<template>
  <div>
    <div class="content">
      <slot />
    </div>
    <footer class="footer">
      <g-link
        v-for="link in links"
        :to="link.path"
        :key="link.icon"
        class="footer__link"
        exact-active-class="footer__link--active"
      >
        <component :is="`icon-${link.icon}`" class="footer__svg"></component>
      </g-link>
    </footer>
  </div>
</template>

<script>
import IconLegioners from "@/components/icons/IconLegioners";
import IconMatches from "@/components/icons/IconMatches";
import IconCities from "@/components/icons/IconCities";
import IconOpponents from "@/components/icons/IconOpponents";

export default {
  components: {
    IconLegioners,
    IconMatches,
    IconCities,
    IconOpponents,
  },
  data() {
    return {
      links: [
        { icon: "legioners", path: "/" },
        { icon: "matches", path: "/matches" },
        { icon: "cities", path: "/cities" },
        { icon: "opponents", path: "/opponents" },
      ],
    };
  },
};
</script>

<style lang="scss">
.content {
  padding: 1.4rem;
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: var(--bg-main);
  padding: 1.2rem 1.6rem;
  box-sizing: border-box;
  border-radius: 12px 12px 0px 0px;

  &__link {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    path {
      fill: var(--color-secondary);
    }

    &--active {
      background: var(--bg-gradient);

      path {
        fill: var(--color-accent);
      }
    }
  }

  &__svg {
    width: 2rem;
  }
}
</style>
