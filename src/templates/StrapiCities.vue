<template>
  <Layout>
    <h1>{{ totalCount }}</h1>
    <van-cell-group>
      <van-cell
        v-for="match in $page.city.matches"
        :title="match.date"
        :key="match.date"
        :to="`/matches/${match.id}`"
        is-link
      />
    </van-cell-group>
  </Layout>
</template>

<page-query>
query ($id: ID!){
  city: strapiCities (id: $id) {
    title
    matches {
      date
      id
      opponent
      legioners 
    }
  }
}
</page-query>

<script>
export default {
  computed: {
    totalCount() {
      return this.$page.city.matches.reduce((sum, item) => {
        return sum + item.legioners.length;
      }, 0);
    }
  }
};
</script>