<template>
  <Layout>
    <h1 style="margin-top: 0;">{{ city.title }}</h1>
    <g-link
      v-for="match in sortedArray"
      :to="`/matches/${match.id}`"
      :key="match.id"
      class="common"
    >
      <p>{{ new Date(match.date).toLocaleDateString() }}</p>
      <p>{{ match.legioners.length }} чел.</p>
    </g-link>
  </Layout>
</template>

<page-query>
query ($id: ID!){
  city: strapiCities (id: $id) {
    title
    matches {
      date
      id
      legioners 
    }
  }
}
</page-query>

<script>
export default {
  computed: {
    city() {
      return this.$page.city;
    },
    sortedArray() {
      return this.city.matches.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    },
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
