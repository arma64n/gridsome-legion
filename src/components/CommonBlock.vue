<template>
  <g-link class="common" :to="common.node.path">
    <p>{{ common.node.title }}</p>
    <p>{{ common.node.matches.length }}</p>
  </g-link>
</template>

<script>
export default {
  props: {
    common: Object,
  },
};
</script>

<style lang="scss" scoped>
.common {
  background: var(--bg-block);
  border-radius: 8px;
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
  padding: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-white);

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
