<template>
  <g-link class="opponent" :to="opponent.node.path">
    <div class="opponent__left">
      <opponent-logo
        class="opponent__logo"
        :opponent="opponent.node.title"
        small
      ></opponent-logo>
      <p>{{ opponent.node.title }}</p>
    </div>
    <p>{{ opponent.node.matches.length }}</p>
  </g-link>
</template>

<script>
import OpponentLogo from "@/components/OpponentLogo";

export default {
  components: {
    OpponentLogo,
  },
  props: {
    opponent: Object,
  },
};
</script>

<style lang="scss" scoped>
.opponent {
  background: var(--bg-block);
  border-radius: 8px;
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
  padding: 0.2rem 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-white);
  overflow: hidden;
  position: relative;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }

  &__left {
    display: flex;
    align-items: center;
  }

  &__logo {
    margin-right: 1rem;
  }
}
</style>
