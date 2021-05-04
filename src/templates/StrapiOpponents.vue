<template>
  <Layout>
    <h1 style="margin-top: 0;">{{opponent.title}}</h1>
    <g-link
      v-for="match in opponent.matches.sort((a, b) => new Date(b.date) - new Date(a.date))"
      :to="`/matches/${match.id}`"
      :key="match.id"
      class="common"
    >
      <p>{{new Date(match.date).toLocaleDateString()}}</p>
      <p>{{match.legioners.length}} чел.</p>
    </g-link>
  </Layout>
</template>

<page-query>
query ($id: ID!){
  opponent: strapiOpponents (id: $id) {
    title
    matches {
      date
      id
      city
      legioners 
    }
  }
}
</page-query>

<script>
export default {
  computed: {
    opponent() {
      return this.$page.opponent;
    }
  }
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