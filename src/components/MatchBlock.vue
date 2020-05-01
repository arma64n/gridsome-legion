<template>
  <div class="match">
    <div class="match__logo">
      <g-link :to="match.node.path">
        <opponent-logo :opponent="match.node.opponent.title"></opponent-logo>
      </g-link>
    </div>
    <div class="match__info">
      <div>
        <p class="match__title">{{ match.node.opponent.title }}</p>
        <p class="match__city">{{ match.node.city.title }}</p>
      </div>
      <div class="match__footer">
        <p>{{ match.node.legioners.length }} чел.</p>
        <p class="match__date">{{ match.node.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import OpponentLogo from "@/components/OpponentLogo";

export default {
  components: {
    OpponentLogo,
  },
  props: {
    match: Object,
  },
};
</script>

<style lang="scss" scoped>
.match {
  background: var(--bg-block);
  border-radius: 8px;
  display: flex;
  margin-bottom: 2rem;
  overflow: hidden;

  &__logo {
    width: 8rem;
    height: 8rem;
    background: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__info {
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__title {
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--color-white);
  }

  &__date {
    font-size: 1.2rem;
    color: var(--color-white);
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
